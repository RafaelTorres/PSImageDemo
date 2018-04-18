// Constants
import {
  SET_IMAGES_LIST,
  ADD_IMAGE_TO_LIST
} from '../HomeViewConstants';

// Actions
import {
  setImagesList,
  addImagesToList
} from '../HomeViewActions';

describe('HomeView - Actions - SET_IMAGES_LIST', () => {

  it('should return the correct type and the passed images', () => {
    const images = [];
    const expectedResult = {
      type: SET_IMAGES_LIST,
      payload: images
    };
    expect(setImagesList(images)).toEqual(expectedResult);
  });
});

describe('HomeView - Actions - ADD_IMAGE_TO_LIST', () => {

  it('should return the correct type and the passed image', () => {
    const image = {};
    const expectedResult = {
      type: ADD_IMAGE_TO_LIST,
      payload: image
    };
    expect(addImagesToList(image)).toEqual(expectedResult);
  });
});
