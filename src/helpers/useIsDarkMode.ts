import { useColorScheme } from 'react-native';
import { DarkModeHookReturn } from '../interfaces';

const useIsDarkMode: () => DarkModeHookReturn = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return {
    isDarkMode,
    modeName: isDarkMode ? 'dark' : 'light',
  };
};

export default useIsDarkMode;
