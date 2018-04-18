// Dependencies
import {Map} from 'immutable';

// Constants
import {
  RESET_STATE,
  INITIALIZE_STATE
} from '../AppViewConstants';

// Actions
import {
  resetSessionStateFromSnapshot,
  initializeSessionState
} from '../AppViewActions';

describe('AppView - Actions - RESET_STATE', () => {

  it('should return the correct type and the passed state', () => {
    const state = Map({
      isReady: false
    });
    const expectedResult = {
      type: RESET_STATE,
      payload: state
    };
    expect(resetSessionStateFromSnapshot(state)).toEqual(expectedResult);
  });
});

describe('AppView - Actions - INITIALIZE_STATE', () => {

  it('should return the correct type', () => {

    const expectedResult = {
      type: INITIALIZE_STATE
    };
    expect(initializeSessionState()).toEqual(expectedResult);
  });
});
