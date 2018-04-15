// Constants
import {
  RESET_STATE,
  INITIALIZE_STATE
} from './AppViewConstants';

export function resetSessionStateFromSnapshot(state) {
  return {
    type: RESET_STATE,
    payload: state
  };
}

export function initializeSessionState() {
  return {
    type: INITIALIZE_STATE
  };
}
