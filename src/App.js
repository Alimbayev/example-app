import React from 'react';
import Header from './components/Header/Header'; // no
import ResultLine from './components/ResultLine/ResultLine'; //no
import MoviesGrid from './components/MoviesGrid/MoviesGrid'; //no
import Footer from './components/Footer/Footer'; //no
import ErrorBoundary from './ErrorBoundary'; //no
import styles from './App.css'; //no

const App = () => (
    <React.Fragment>
      <Header />
      <ResultLine />
      <MoviesGrid />
      <Footer />
    </React.Fragment>
);

export default App;