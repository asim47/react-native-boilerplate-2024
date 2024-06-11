import { Dimensions, StyleSheet } from 'react-native';
import { CONSTANTS } from '../constants';
import { useEnhancedSelector } from '../helpers/reduxHooks';

export const CommonStyles = () => {
  const colorMode = useEnhancedSelector((state) => state.config.colorMode);

  return StyleSheet.create({
    AppContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      backgroundColor: CONSTANTS.colors[colorMode].backgroundColorPrimary,
    },
    CommonButton: {
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      height: 50,
      backgroundColor: 'green',
      marginTop: 40,
    },
    blackColor: { color: 'black' },
    redColor: { color: 'red' },
    flexStyle: { flex: 1 },
  });
};

export const staticStylesCommon = StyleSheet.create({});
