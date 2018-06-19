import React from 'react';
import { Text,AppRegistry } from 'react-native';
import Header from './src/components/header.js';
import {View} from 'react-native';
import AlbumList from './src/components/AlbumList';
const App = () =>(
  <View style={{flex:1}}>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>  
  
);
AppRegistry.registerComponent('albums', () => App);
