import { useColorScheme } from 'react-native';
import { DarkModeHookReturn } from '../interfaces';

const useIsDarkMode: () => DarkModeHookReturn = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('hello');
  return {
    isDarkMode,
    modeName: isDarkMode ? 'dark' : 'light',
  };
};

export default useIsDarkMode;
