import { Dimensions, StyleSheet } from 'react-native';
import { CONSTANTS } from '../constants';
import { useEnhancedSelector } from '../helpers/reduxHooks';

export const MainStyles = () => {
  const colorMode = useEnhancedSelector((state) => state.config.colorMode);

  return StyleSheet.create({
    AppContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      backgroundColor: CONSTANTS.colors[colorMode].backgroundColorPrimary,
    },
    welcomeText: {
      color: CONSTANTS.colors[colorMode].textPrimary,
      fontSize: 20,
      fontWeight: 'bold',
    },
    buttonText: {
      color: CONSTANTS.colors[colorMode].textPrimary,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    welcomeButton: {
      height: 80,
      width: '80%',
      backgroundColor: 'brown',
      marginTop: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export const staticStyles = StyleSheet.create({});
