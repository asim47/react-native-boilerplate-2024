import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { ScreenProps } from '../interfaces';
import * as Styles from '../styles';
import { useEnhancedDispatch } from '../helpers/reduxHooks';
import useIsDarkMode from '../helpers/useIsDarkMode';
import { setColorMode } from '../store/reducers/config.reducer';
const Login: React.FC<ScreenProps<'Login'>> = ({ navigation }) => {
  const dispatch = useEnhancedDispatch();
  const { isDarkMode } = useIsDarkMode();
  const commonStyles = Styles.CommonStyles();

  return (
    <View style={commonStyles.AppContainer}>
      <Text style={commonStyles.blackColor}>Login</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Signup');
        }}
        style={commonStyles.CommonButton}
      >
        <Text>Signup</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          dispatch(setColorMode(isDarkMode ? 'light' : 'dark'));
        }}
        style={commonStyles.CommonButton}
      >
        <Text>Change theme</Text>
      </Pressable>
    </View>
  );
};

export default Login;
