import { Pressable, SafeAreaView, StatusBar, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import useIsDarkMode from './helpers/useIsDarkMode';
import * as Styles from './styles';
import { localStorage, StoredKeys } from './helpers/localStorage';
import { Log } from './helpers/logger';
import { useEnhancedDispatch } from './helpers/reduxHooks';
import { setMode } from './store/reducers/config.reducer';
import { CONSTANTS } from './constants';
const Main = () => {
  const dispatch = useEnhancedDispatch();
  const { modeName, isDarkMode } = useIsDarkMode();
  const styles = Styles.MainStyles(modeName);
  useEffect(() => {
    if (localStorage.getItem(StoredKeys.firstOpen) !== 'false') {
      Log('First App open: ', modeName);
      localStorage.setItem(StoredKeys.firstOpen, 'false');
      dispatch(setMode(modeName));
    } else {
      dispatch(setMode(localStorage.getItem(StoredKeys.colorMode) || modeName));
    }
  }, [modeName, dispatch]);

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={CONSTANTS.colors[modeName].backgroundColorPrimary}
      />
      <SafeAreaView>
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
      </SafeAreaView>
    </>
  );
};

export default Main;
