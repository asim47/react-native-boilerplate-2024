import { SafeAreaView, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import useIsDarkMode from './helpers/useIsDarkMode';
import * as Styles from './styles';
import { localStorage, StoredKeys } from './helpers/localStorage';
const Main = () => {
  const { modeName } = useIsDarkMode();
  const styles = Styles.MainStyles(modeName);

  useEffect(() => {
    localStorage.setItem(StoredKeys.colorMode, modeName);
  }, [modeName]);

  return (
    <SafeAreaView>
      <View style={styles.AppContainer}>
        <Text style={styles.welcomeText}>Welcome, this is {localStorage.getItem(StoredKeys.colorMode)} mode</Text>
      </View>
    </SafeAreaView>
  );
};

export default Main;
