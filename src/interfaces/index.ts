export type Themes = 'dark' | 'light';

export interface DarkModeHookReturn {
  isDarkMode: boolean;
  modeName: Themes;
}

export interface GenericData<T> {
  data: T;
}

export interface UserData {
  id: string;
}

export interface UserStore {
  isAuth: boolean;
  userData: null | UserData;
  accessToken: null | string;
  refreshToken: null | string;
}

export interface AuthSuccessResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ConfigStore {
  colorMode: Themes | null;
}
