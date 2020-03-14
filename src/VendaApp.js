import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from 'remote-redux-devtools';

const compose = composeWithDevTools({realtime: true});
const store = createStore(rootReducer, compose(applyMiddleware(reduxThunk)));

const VendaApp = prop => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#0d2957" />
    <Provider store={store}>
      <Routes />
    </Provider>
  </NavigationContainer>
);

export default VendaApp;
