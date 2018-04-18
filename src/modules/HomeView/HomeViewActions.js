// Constants
import {
  SET_IMAGES_LIST,
  ADD_IMAGE_TO_LIST,
  ADD_MORE_IMAGES_TO_LIST
} from './HomeViewConstants';

/**
 * Update list Image in Store
 * @param  {Array} images Array with images to save
 * @return {{type, payload:array}}    Action Object
 */
export function setImagesList(images) {
  return {
    type: SET_IMAGES_LIST,
    payload: images
  };
}

/**
 * Add image to list images
 * @param  {Object} image Object with images to save
 * @return {{type, payload:Object}}    Action Object
 */
export function addImagesToList(image) {
  return {
    type: ADD_IMAGE_TO_LIST,
    payload: image
  };
}

/**
 * Add more image in current list Image in Store
 * @param  {Array} images Array with images to save
 * @return {{type, payload:array}}    Action Object
 */
export function addMoreImagesToList(images) {
  return {
    type: ADD_MORE_IMAGES_TO_LIST,
    payload: images
  };
}
