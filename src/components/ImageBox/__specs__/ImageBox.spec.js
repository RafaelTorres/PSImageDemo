/*eslint-disable max-nested-callbacks*/

// Dependencies
import React from 'react';
import {
  Image
} from 'react-native';
import {
  shallow,
  configure
} from 'enzyme';

// fix Enzyme to work with React 16 as per https://github.com/airbnb/enzyme#installation
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// Component
import ImageBox from '../index';

// Default params
const defaultParams = {
  item: {}
};

describe('ImageBox', () => {
  it('should render a <Image />', () => {
    const wrapper = shallow(
      <ImageBox {...defaultParams}/>
    );
    expect(wrapper.find(Image).length).toBe(1);
  });
});
