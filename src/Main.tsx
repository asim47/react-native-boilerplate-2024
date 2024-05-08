import { Pressable, StatusBar, Text, View } from 'react-native';
import React from 'react';
import useIsDarkMode from './helpers/useIsDarkMode';
import * as Styles from './styles';
import { useEnhancedDispatch } from './helpers/reduxHooks';
import { setMode } from './store/reducers/config.reducer';
import { CONSTANTS } from './constants';

const Main = () => {
  const dispatch = useEnhancedDispatch();
  const { isDarkMode, modeName } = useIsDarkMode();
  const styles = Styles.MainStyles();

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={CONSTANTS.colors[modeName].backgroundColorPrimary}
      />
      <View style={styles.AppContainer}>
        <Text style={styles.welcomeText}>Welcome, this is {modeName} mode</Text>
        <Pressable
          onPress={() => {
            dispatch(setMode(isDarkMode ? 'light' : 'dark'));
          }}
          style={styles.welcomeButton}
        >
          <Text style={styles.buttonText}>Change Mode to {isDarkMode ? 'light' : 'dark'}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Main;
