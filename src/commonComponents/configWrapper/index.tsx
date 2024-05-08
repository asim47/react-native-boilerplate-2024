import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { CONSTANTS } from '../../constants';
import { localStorage, StoredKeys } from '../../helpers/localStorage';
import { Log } from '../../helpers/logger';
import { useEnhancedDispatch, useEnhancedSelector } from '../../helpers/reduxHooks';
import useIsDarkMode from '../../helpers/useIsDarkMode';
import { setMode } from '../../store/reducers/config.reducer';

const ConfigWrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  const dispatch = useEnhancedDispatch();
  const { modeName } = useIsDarkMode();
  const colorMode = useEnhancedSelector((state) => state.config.colorMode);

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
    <SafeAreaView>
      {colorMode ? (
        props.children
      ) : (
        <ActivityIndicator size={'large'} color={CONSTANTS.colors[modeName].primaryColor} />
      )}
    </SafeAreaView>
  );
};

export default ConfigWrapper;
