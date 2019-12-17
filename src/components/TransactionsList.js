import React from 'react';

import '../styles/transactionsList.scss';
import {TransactionsContext} from '../context';

const TransactionsList = () => {
  return (
    <TransactionsContext.Consumer>
      {value => {
        console.log('Rendering...');
        return (
          <>
            <h1 className='title'>Transactions</h1>
            <table className='table table-dark table-hover container'>
              <thead className='thead'>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Type</th>
                  <th scope='col'>
                    <img
                      alt='Add new transaction'
                      src='images/add.svg'
                      className='icon add-icon'
                      onClick={() => value.addTransaction(() => {})}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {value.transactions.map(transaction => {
                  const {id, type, title, amount} = transaction;
                  return (
                    <tr key={id}>
                      <th width='20%' scope='row'>
                        {id}
                      </th>
                      <td width='25%'>{title}</td>
                      <td width='25%'>${amount}</td>
                      <td width='20%'>{type}</td>
                      <td width='10%' className='edit-column'>
                        <a href={'/transactions/' + id}>
                          <img
                            alt='Edit this transaction'
                            src='images/edit.svg'
                            className='icon edit-icon col-sm-6'
                          />
                        </a>
                        <img
                          alt='Delete this transaction'
                          src='images/delete.svg'
                          className='icon delete-icon col-sm-6'
                          onClick={() => value.deleteTransaction(id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        );
      }}
    </TransactionsContext.Consumer>
  );
};

export default TransactionsList;
