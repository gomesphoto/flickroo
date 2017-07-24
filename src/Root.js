import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import reducers from './redux';
import App from './App';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
