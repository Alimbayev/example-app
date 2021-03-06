import { connect } from 'react-redux';
import SortInput from './SortInput';
import { updateFilterSearch, updateFilterSort, updateSearchRequest } from '../../modules/filter/filterActions';
import { fetchSearchMovies } from '../../modules/movies/moviesActions';
import { getSearchBy, getSortBy, getSearchRequest } from '../../modules/filter/filterSelectors';

const mapStateToProps = state => ({
  searchBy: getSearchBy(state),
  sortBy: getSortBy(state),
  searchRequest: getSearchRequest(state),
});

const mapDispatchToProps = {
  updateFilterSearch,
  updateSearchRequest,
  updateFilterSort,
  fetchSearchMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(SortInput);