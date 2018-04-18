/*eslint-disable max-nested-callbacks*/

// Dependencies
import React from 'react';
import {
  ActivityIndicator,
  StatusBar
} from 'react-native';
import {
  shallow,
  configure
} from 'enzyme';

// fix Enzyme to work with React 16 as per https://github.com/airbnb/enzyme#installation
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// Modules
import AppView from '../AppView';
import NavigatorViewContainer from '../../navigator/NavigatorViewContainer';

// Default params
const defaultParams = {
  isLoggedIn: false,
  isReady: false,
  fn: () => {},
  actions: {
    resetSessionStateFromSnapshot: () => {},
    initializeSessionState: () => {}
  }
};

describe('AppView', () => {

  describe('isReady', () => {

    it('should render a <StatusBar /> if not ready', () => {
      const wrapper = shallow(
        <AppView {...defaultParams}/>
      );
      expect(wrapper.find(StatusBar).length).toBe(1);
    });

    it('should render a <StatusBar /> if  ready', () => {
      const wrapper = shallow(
        <AppView
          {...defaultParams}
          isReady={true}
        />
      );
      expect(wrapper.find(StatusBar).length).toBe(1);
    });

    it('should render a <ActivityIndicator /> if not ready', () => {
      const wrapper = shallow(
        <AppView {...defaultParams}/>
      );
      expect(wrapper.find(ActivityIndicator).length).toBe(1);
    });

    it('should not render a <ActivityIndicator /> if ready', () => {
      const wrapper = shallow(
        <AppView
          {...defaultParams}
          isReady={true}
        />
      );
      expect(wrapper.find(ActivityIndicator).length).toBe(0);
    });
    it('should render a <NavigatorViewContainer /> if not ready', () => {
      const wrapper = shallow(
        <AppView {...defaultParams}/>
      );
      expect(wrapper.find(NavigatorViewContainer).length).toBe(0);
    });

    it('should not render a <NavigatorViewContainer /> if ready', () => {
      const wrapper = shallow(
        <AppView
          {...defaultParams}
          isReady={true}
        />
      );
      expect(wrapper.find(NavigatorViewContainer).length).toBe(1);
    });
  });
});
