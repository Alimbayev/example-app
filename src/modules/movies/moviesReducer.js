import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
  FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS
} from './moviesActions';
  
  const initialState = {
    allMovies: [],
    errorMovies: {},
    isFetchingMovies: false,
    isFetchedMovies: false,
    url: '',
    offset: null,
    quantity: null,
    searchBy: 'title',
    sortBy: 'release_date',
  };
  
function movieReducer(state = initialState, action) {
  if (action.type === FETCH_MOVIES_SUCCESS) {
    return Object.assign({}, state, {
      allMovies: state.allMovies.concat(action.payload)
    });
  }
  return state;
}
  
  export default movieReducer;