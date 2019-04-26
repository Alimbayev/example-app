import React from 'react';
import propTypes from 'prop-types';
import styles from './ResultLine.css';
import SortBy from './SortBy/SortBy';

const ResultLine = ({ quantity }) => (
  <div className={styles.result_line}>
    <span className={styles.result_line__count_founded_films}>{`${quantity} movies found`}</span>
    <SortBy />
  </div>
);

ResultLine.defaultProps = {
  quantity: 1,
};

ResultLine.propTypes = {
  quantity: propTypes.number,
};

export default ResultLine;