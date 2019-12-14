import React, { useState } from 'react';
import { TransactionsContext } from '../context';
import * as transactionTypes from '../data/transaction-types';

import '../styles/transaction.scss';

const Transaction = props => {
  return (
    <TransactionsContext.Consumer>
      {value => {
        const transaction = value.transactions.filter(
          transaction => transaction.id === props.match.params.id
        );
        const { type, title, amount, startDate, endDate, occurence } = transaction[0];
        console.log(transaction);
        return (
          <div className='container root'>
            <h1 className='title'>{title}</h1>
            <div className='row form'>
              <div className='leftColumn col-sm-6 container-fluid'>
                <div className='row-type row'>
                  <span className='lbl lbl-type col-sm-6'>Type: </span>
                  <select defaultValue={type} className='form-control col-sm-6'>
                    <option value={transactionTypes.EXPENSE}>
                      {transactionTypes.EXPENSE}
                    </option>
                    <option value={transactionTypes.INCOME}>
                      {transactionTypes.INCOME}
                    </option>
                  </select>
                </div>
                <div className='row-amount row'>
                  <div className='lbl-amount col-sm-6'>Amount:</div>
                  <input
                    type='text'
                    className='amount form-control col-sm-6'
                    defaultValue={amount}
                  />
                </div>
              </div>
              <div className='rightColumn col-sm-6 container-fluid'>
                <div className='row-startDate row'>
                  <div className='lbl-startDate col-sm-6'>Start Date:</div>
                  <input
                    type='date'
                    defaultValue={new Date()}
                    className='startDate form-control datepicker col-sm-6'
                  />
                </div>
                <div className='row-endDate row'>
                  <div className='lbl-endDate col-sm-6'>End Date:</div>
                  <input
                    type='date'
                    className='endDate form-control col-sm-6'
                    defaultValue={endDate == null ? 'None' : endDate}
                  />
                </div>
                <div className='row-occurence row'>
                  <div className='lbl-occurence col-sm-6'>Occurence:</div>
                  <div className='occurence col-sm-6'>{occurence}</div>
                </div>
              </div>
              <input
                type='submit'
                className='btn btn-success save'
                value='Save changes'
              />
            </div>
          </div>
        );
      }}
    </TransactionsContext.Consumer>
  );
};

export default Transaction;
