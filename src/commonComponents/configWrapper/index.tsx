import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { CONSTANTS } from '../../constants';
import { localStorage, StoredKeys } from '../../helpers/localStorage';
import { Log } from '../../helpers/logger';
import { useEnhancedDispatch, useEnhancedSelector } from '../../helpers/reduxHooks';
import useIsDarkMode from '../../helpers/useIsDarkMode';
import { setColorMode } from '../../store/reducers/config.reducer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Styles from '../../styles';

const ConfigWrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  const dispatch = useEnhancedDispatch();
  const { modeName } = useIsDarkMode();
  const colorMode = useEnhancedSelector((state) => state.config.colorMode);
  const commonStyles = Styles.CommonStyles();

  useEffect(() => {
    if (localStorage.getItem(StoredKeys.firstOpen) !== 'false') {
      Log('First App open: ', modeName);
      localStorage.setItem(StoredKeys.firstOpen, 'false');
      dispatch(setColorMode(modeName));
    } else {
      dispatch(setColorMode(localStorage.getItem(StoredKeys.colorMode) || modeName));
    }
  }, [modeName, dispatch]);

  return (
    <SafeAreaView>
      <GestureHandlerRootView style={commonStyles.flexStyle}>
        {colorMode ? (
          props.children
        ) : (
          <ActivityIndicator size={'large'} color={CONSTANTS.colors[modeName].primaryColor} />
        )}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default ConfigWrapper;
