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
  });
