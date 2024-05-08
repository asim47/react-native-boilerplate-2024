import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import ConfigWrapper from './src/commonComponents/configWrapper';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);
  return (
    <>
      <Provider store={store}>
        <ConfigWrapper>
          <Main />
        </ConfigWrapper>
      </Provider>
    </>
  );
};

export default App;
