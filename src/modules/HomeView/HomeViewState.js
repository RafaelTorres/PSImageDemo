// Dependencies
import {Map, List} from 'immutable';

// Constants
import {
  SET_IMAGES_LIST,
  ADD_IMAGE_TO_LIST,
  ADD_MORE_IMAGES_TO_LIST
} from './HomeViewConstants';

import {
  RESET_STATE
} from '../AppView/AppViewConstants';

// Initial state
const initialState = Map({
  images: List([])
});

// Reducer
export default function HomeViewStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    case SET_IMAGES_LIST:
      return state
        .set('images', List(action.payload));
    case ADD_IMAGE_TO_LIST:
      return state
        .set('images', state.get('images').unshift(new Map(action.payload)));
    case ADD_MORE_IMAGES_TO_LIST:
      return state
        .set('images', state.get('images').concat(new List(action.payload)));
    default:
      return state;
  }
}
