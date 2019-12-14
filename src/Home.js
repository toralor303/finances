import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import TransactionsContextProvider from './context';

const Home = () => {
  return (
    <TransactionsContextProvider>
      <Router>
        <Navbar />
      </Router>
    </TransactionsContextProvider>
  );
};

export default Home;
