import { createAction } from 'redux-actions';
import axios from 'axios';

export const urlDefaultMoviesList = 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21';
export const urlSortMoviesList = 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&searchBy=title&limit=21';
export const urlSearchMovies = 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21';

export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';

export const dataRequest = createAction(DATA_REQUEST);
export const dataSuccess = createAction(DATA_SUCCESS);
export const dataError = createAction(DATA_ERROR);

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMovies = (url, offset = 0, searchBy = 'title', sortBy = 'release_date') => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    return axios.get(`${url}`)
      .then((response) => {
        dispatch(dataSuccess({
          movies: response.data.data, quantity: response.data.total, searchBy, sortBy, url, offset,
        }));
        dispatch(fetchMoviesSuccess(response))
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
}

export function fetchDefaultMovies() {
  return (dispatch) => {
    dispatch(fetchMovies(urlDefaultMoviesList));
  };
}

export function fetchSearchMovies(searchRequest, searchBy, sortBy) {
  return (dispatch) => {
    if (searchBy === 'genres') {
      dispatch(fetchMovies(`${urlSearchMovies}&filter=${searchRequest}`, 0, searchBy, sortBy));
    } else {
      dispatch(fetchMovies(`${urlSearchMovies}&search=${searchRequest}`, 0, searchBy, sortBy));
    }
  };
}

export function fetchNextMovies() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.movies.offset !== -1) {
      dispatch(fetchMovies(
        state.movies.url,
        state.movies.offset + 22,
      ));
    }
  };
}

export function fetchMoviesRequest() {
  return {type: FETCH_MOVIES_REQUEST}
}

export function fetchMoviesSuccess(payload) {
  return {type: FETCH_MOVIES_SUCCESS, payload}
}

export function fetchMoviesFailure() {
  return {type: FETCH_MOVIES_FAILURE}
}
