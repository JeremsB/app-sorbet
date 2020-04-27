import React from 'react';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { StatusBar } from 'react-native'
import * as firebase from 'firebase';

const API_KEY = process.env.FIREBASE_API_KEY;
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "sorbet-6a666.firebaseapp.com",
    databaseURL: "https://sorbet-6a666.firebaseio.com",
    projectId: "sorbet-6a666",
    storageBucket: "sorbet-6a666.appspot.com",
    messagingSenderId: "614640091551",
    appId: "1:614640091551:web:c053d184bfbb5a7940bdaa",
    measurementId: "G-W879WN4BMZ"
}

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (

          <Provider store={Store}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00000000" translucent = {true}/>
            <Navigation/>
          </Provider>

  );
}
