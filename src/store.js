import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';
import movies from './modules/movies/moviesReducer';
import filter from './modules/filter/filterReducer';

const rootReducer = combineReducers({
  movies,
  filter,
});

const initialState = {};

export default () => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    global.window.devToolsExtension ? global.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);