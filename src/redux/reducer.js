// Dependencies
import {
  Map,
  fromJS
} from 'immutable';
import {
  loop,
  combineReducers
} from 'redux-loop-symbol-ponyfill';

// ## Generator Reducer Imports
import HomeViewReducer from '../modules/HomeView/HomeViewState';
import NavigatorStateReducer from '../modules/navigator/NavigatorState';
import AppViewReducer from '../modules/AppView/AppViewState';

// Constants
import {RESET_STATE} from '../modules/AppView/AppViewConstants';

const reducers = {
  // App globalty
  AppState: AppViewReducer,

  // ## Generator Reducers
  homeState: HomeViewReducer,

  // Navigator states
  navigatorState: NavigatorStateReducer
};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  const [nextState, effects] = action.type === RESET_STATE
    ? namespacedReducer(action.payload, action)
    : namespacedReducer(state || void 0, action);

  // enforce the state is immutable
  return loop(fromJS(nextState), effects);
}
