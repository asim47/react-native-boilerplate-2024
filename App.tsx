import React from 'react';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import ConfigWrapper from './src/commonComponents/configWrapper';
const App = () => {
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
