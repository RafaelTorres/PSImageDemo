// Dependencies
import React from 'react';
import {StackNavigator} from 'react-navigation';

// Modules
import HomeViewContainer from '../HomeView/HomeViewContainer';

// Components
import NavigationAction from '../../components/NavigationAction';

// Themes
import {
  color1,
  color2
} from '../../themes/Colors';

// Relative Path Only
import Actions from './NavigationActions/Actions';

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {
    screen: HomeViewContainer,
    navigationOptions: ({navigation}) => {
      const params = navigation.state.params || {};
      return {
        title: 'PSImageDemo',
        headerTintColor: color2,
        headerStyle: {
          backgroundColor: color1
        },
        headerRight: (
         <NavigationAction actions={Actions(params).addImage}/>
       )
      };
    }
  }
});

export default AppNavigator;
