//iOS

//Import a library to help create a Component
//npm components
import React from 'react';
import { AppRegistry } from 'react-native';
//custom components
import Header from './src/components/header';

//Create a Component
const App = () => (
  <Header headerText={'Albums'} />
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
