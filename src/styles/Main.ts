import { Dimensions, StyleSheet } from 'react-native';
import { CONSTANTS } from '../constants';
import { Themes } from '../interfaces';

export const MainStyles = (theme: Themes) =>
  StyleSheet.create({
    AppContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      backgroundColor: CONSTANTS.colors[theme].backgroundColorPrimary,
    },
    welcomeText: {
      color: CONSTANTS.colors[theme].textPrimary,
      fontSize: 20,
      fontWeight: 'bold',
    },
    buttonText: {
      color: CONSTANTS.colors[theme].textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    welcomeButton: {
      height: 50,
      width: '80%',
      backgroundColor: 'gre',
      marginTop: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
