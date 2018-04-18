// Dependencies
import {Map} from 'immutable';

// Reducer
import AppViewReducer from '../AppViewState';

// Actions
import {
  resetSessionStateFromSnapshot,
  initializeSessionState
} from '../AppViewActions';

// Default Params
let emptyState;

describe('AppView - Reducer', () => {
  let state;
  beforeEach(() => {
    state = new Map({
      isReady: false
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(AppViewReducer(emptyState, {})).toEqual(expectedResult);
  });

  it('should handle  the initializeSessionState action correctly ', () => {
    const expectedResult = state.set('isReady', true);

    expect(AppViewReducer(state, initializeSessionState())).toEqual(expectedResult);
  });

  it('should handle  the resetSessionStateFromSnapshot action correctly ', () => {
    const expectedResult = state.set('isReady', true);

    expect(AppViewReducer(state, resetSessionStateFromSnapshot(state))).toEqual(expectedResult);
  });
});
