import axios, { AxiosRequestConfig } from 'axios';
import { CONSTANTS } from '../constants/';
import { AuthSuccessResponse, GenericData } from '../interfaces';
import { setLogOut } from '../store/reducers';
import { store } from '../store/store';
import { localStorage, StoredKeys } from './localStorage';

const instance = axios.create({
  baseURL: CONSTANTS.endpoint.END_POINT,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(StoredKeys.accessToken);
    if (token) {
      config.headers['access-token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.data.Msg === 'jwt expired' && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post<GenericData<AuthSuccessResponse>>(
          `${CONSTANTS.endpoint.END_POINT}/auth/login/refresh-token`,
          {
            refreshToken: localStorage.getItem(StoredKeys.refreshToken),
          },
        );

        // if token API returns new token
        if (refreshResponse.status === 200) {
          // save new token to localStorage
          localStorage.setItem(StoredKeys.accessToken, refreshResponse.data.data.accessToken);
          localStorage.setItem(StoredKeys.refreshToken, refreshResponse.data.data.refreshToken);

          // update authorization header with new token
          originalRequest.headers['access-token'] = refreshResponse.data.data.accessToken;

          // retry original request with new token
          return instance(originalRequest);
        } else {
          // token API failed to return new token
          store.dispatch(setLogOut());
          throw new Error('Failed to refresh token');
        }
      } catch (e) {
        store.dispatch(setLogOut());
        // token API call failed
        throw new Error('Failed to refresh token');
      }
    }

    if (error.response.data.Msg === 'invalid token') {
      store.dispatch(setLogOut());
    }

    // for any other error, throw it
    return Promise.reject(error);
  },
);

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await instance(config);

    return response.data;
  } catch (error) {
    const errorObj: any = error;
    throw new Error(errorObj.response?.data.message || errorObj.response?.data.error || 'Something went wrong');
  }
};
