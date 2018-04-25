// @flow
import React from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './src/components/Home';
import List from './src/components/List';


const App = StackNavigator({
  Home: { screen: Home },
  List: { screen: List },
});

export default App;