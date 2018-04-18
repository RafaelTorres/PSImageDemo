// Dependencies
import {Map, List} from 'immutable';

// Reducer
import HomeViewReducer from '../HomeViewState';

// Actions
import {
  setImagesList,
  addImagesToList,
  addMoreImagesToList
} from '../HomeViewActions';

// Default Params
let emptyState;

describe('HomeView - Reducer', () => {
  let state;
  beforeEach(() => {
    state = new Map({
      images: List([])
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(HomeViewReducer(emptyState, {})).toEqual(expectedResult);
  });

  it('should handle  the setImagesList action correctly ', () => {
    const images = [{},{},{}];
    const expectedResult = state.set('images', List(images));
    expect(HomeViewReducer(state, setImagesList(images))).toEqual(expectedResult);
  });

  it('should handle  the addImagesToList action correctly ', () => {
    const image = {};
    const expectedResult = state.set('images', state.get('images').unshift(new Map(image)));
    expect(HomeViewReducer(state, addImagesToList(image))).toEqual(expectedResult);
  });

  it('should handle  the addMoreImagesToList action correctly ', () => {
    const images = [{},{},{}];
    const expectedResult = state.set('images', state.get('images').concat(new List(images)));
    expect(HomeViewReducer(state, addMoreImagesToList(images))).toEqual(expectedResult);
  });
});
