import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../styles/Navbar.css';
import Transaction from './Transaction';
import TransactionsList from './TransactionsList';

function Navbar() {
  return (
    <>
      <ul className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <li className='nav-link'>
          <Link to='/' className='link'>
            Home
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/transactions' className='link'>
            Transactions
          </Link>
        </li>
      </ul>

      <Route exact path='/transactions' component={TransactionsList} />
      <Route path='/transactions/:id' component={Transaction} />
    </>
  );
}

export default Navbar;
