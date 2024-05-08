export type Themes = 'dark' | 'light';

export interface DarkModeHookReturn {
  isDarkMode: boolean;
  modeName: Themes;
}
