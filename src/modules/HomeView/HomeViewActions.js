// Constants
import {
  SET_IMAGES_LIST,
  ADD_IMAGE_TO_LIST
} from './HomeViewConstants';

// Action creators
export function setImagesList(images) {
  return {
    type: SET_IMAGES_LIST,
    payload: images
  };
}

// Action creators
export function addImagesToList(image) {
  return {
    type: ADD_IMAGE_TO_LIST,
    payload: image
  };
}
