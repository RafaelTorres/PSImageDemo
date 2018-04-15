// Dependencies
import {Map} from 'immutable';

// Constants
import {
  BASE_URL,
  ACCESS_KEY
} from '../utils/constants';

/**
 *  Get List  public photos using Snplash Api
 * @param  {Number} page Page to get photos
 * @param  {Number} perPage Count Items per Page
 */
export function fetchPhotos(page = 1, perPage = 15) {
  return fetch(`${BASE_URL}?page=${page}&per_page=${perPage}&client_id=${ACCESS_KEY}`)
    .then(res => res.json())
    .then(photos => {
      // Process Response
      if (typeof photos !== 'undefined') {
        const photosUrl = photos.map(photo => {
          return new Map({
            image: photo.urls.regular
          });
        });
        return photosUrl;
      }
      return [];
    });
}
