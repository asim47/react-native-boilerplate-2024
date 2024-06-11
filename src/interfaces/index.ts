import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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
  colorMode: Themes;
}

export type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
  Home: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
