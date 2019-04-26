import React from 'react';
import Header from './components/Header/Header'; // no
import ResultLine from './components/ResultLine/ResultLine'; //no
import MoviesGrid from './components/MoviesGrid/MoviesGrid'; //no
import Footer from './components/Footer/Footer'; //no
import ErrorBoundary from './ErrorBoundary'; //no
import styles from './App.css'; //no

const App = () => (
  <main className={styles.main}>
    <ErrorBoundary>
      <Header />
      <ResultLine />
      <MoviesGrid />
      <Footer />
    </ErrorBoundary>
  </main>

);

export default App;