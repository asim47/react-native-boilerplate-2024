import { Dimensions, StyleSheet } from 'react-native';

export const MainStyles = () => {
  return StyleSheet.create({
    AppContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
};

export const staticStylesMain = StyleSheet.create({});
