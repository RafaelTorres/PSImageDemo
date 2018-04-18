/*eslint-disable max-nested-callbacks*/

// Dependencies
import React from 'react';
import {
  FlatList
} from 'react-native';
import {
  shallow,
  configure
} from 'enzyme';

// fix Enzyme to work with React 16 as per https://github.com/airbnb/enzyme#installation
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// Component
import ImageList from '../index';

// Default params
const defaultParams = {
  images: []
};

describe('ImageList', () => {
  it('should render a <FlatList />', () => {
    const wrapper = shallow(
      <ImageList {...defaultParams}/>
    );
    expect(wrapper.find(FlatList).length).toBe(1);
  });
});
