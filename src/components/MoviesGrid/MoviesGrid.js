import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import MovieElement from './MovieElement/MovieElement';
import styles from './MoviesGrid.css';
import {fetchMovies} from "../../modules/movies/moviesActions";
import {connect} from "react-redux";

class MoviesGrid extends Component {
  componentDidMount() {
    this.props.fetchMovies();
    global.document.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    global.document.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler = () => {
    const { fetchNextMovies, isFetchingMovies } = this.props;
    if ((global.window.innerHeight + global.window.pageYOffset)
    >= global.document.body.scrollHeight && !isFetchingMovies) {
      fetchNextMovies();
    }
  };

  render() {
    const { movies, isFetchingMovies } = this.props;
    console.log(movies);
    return (
    // if (!movies.length) {
    //   return (
    //     <article className={styles.movies_grid}>
    //       <span className={styles.movies_grid__not_found}>No films found</span>
    //     </article>
    //   );
    // }
    // const data = movies.map(item => <MovieElement data={item} key={item.id} />);
    // return (
    //   <Fragment>
    //     <article className={styles.movies_grid}>
    //       {data}
    //     </article>
    //     {isFetchingMovies}
    //   </Fragment>
        <div>Hello</div>
    )
  }
}

const mapStateToProps = rootState => ({
  movies: rootState['movies'].allMovies,
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies("https://reactjs-cdp.herokuapp.com/movies"))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesGrid);