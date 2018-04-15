// Dependencies
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

// Redux
import store from './src/redux/store';

// Modules
import AppViewContainer from './src/modules/AppView/AppViewContainer';

class PSImageDemo extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PSImageDemo', () => PSImageDemo);
