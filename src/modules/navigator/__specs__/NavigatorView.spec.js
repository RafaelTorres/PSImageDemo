/*eslint-disable max-nested-callbacks*/

// Dependencies
import React from 'react';
import {
  shallow,
  configure
} from 'enzyme';

// fix Enzyme to work with React 16 as per https://github.com/airbnb/enzyme#installation
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// Modules
import NavigatorView from '../NavigatorView';

// Relative Path only!
import AppNavigator from '../Navigator';

// Default params
const defaultParams = {
  dispatch: () => {},
  navigatorState: {
    index: 0,
    routes: [
      {
        key: '',
        routeName: ''
      }
    ]
  }
};

describe('NavigatorView', () => {
  it('should render a <AppNavigator />', () => {
    const wrapper = shallow(
      <NavigatorView {...defaultParams}/>
    );
    expect(wrapper.find(AppNavigator).length).toBe(1);
  });
});
