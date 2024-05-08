import { useColorScheme } from 'react-native';
import { DarkModeHookReturn } from '../interfaces';
import { useEnhancedSelector } from './reduxHooks';

const useIsDarkMode: () => DarkModeHookReturn = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const colorMode = useEnhancedSelector((state) => state.config.colorMode);

  if (colorMode) {
    return {
      isDarkMode: colorMode === 'dark',
      modeName: colorMode,
    };
  }

  return {
    isDarkMode,
    modeName: isDarkMode ? 'dark' : 'light',
  };
};

export default useIsDarkMode;
