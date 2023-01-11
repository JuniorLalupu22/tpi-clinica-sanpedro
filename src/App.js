import React from 'react';
import { Provider } from 'react-redux';
import RootComponent from './components/RootComponent';
import store from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <RootComponent/>
    </Provider>
  )
}
