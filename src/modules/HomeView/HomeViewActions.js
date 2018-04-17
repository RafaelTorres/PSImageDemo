// Constants
import {
  SET_IMAGES_LIST,
  ADD_IMAGE_TO_LIST
} from './HomeViewConstants';

/**
 * Update Lits Image in Store
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
