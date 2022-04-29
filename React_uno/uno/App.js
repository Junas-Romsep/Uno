
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './src/Home';
import API from './src/API';


const Navigator = createStackNavigator({
    Home: { screen: Home },
    API: { screen: API },
});
const App = createAppContainer(Navigator);

export default App;