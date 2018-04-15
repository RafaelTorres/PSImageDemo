// Dependencies
import {Map} from 'immutable';

// Constants
import {
  RESET_STATE,
  INITIALIZE_STATE
} from './AppViewConstants';

// Initial State
const initialState = Map({
  isReady: false
});

// Reducer
export default function SessionStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE_STATE:
    case RESET_STATE:
      return state
        .set('isReady', true);
    default:
      return state;
  }
}
