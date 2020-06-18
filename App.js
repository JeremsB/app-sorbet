import React from 'react';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { StatusBar } from 'react-native'

export default function App() {
  return (

          <Provider store={Store}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00000000" translucent = {true}/>
            <Navigation/>
          </Provider>

  );
}
