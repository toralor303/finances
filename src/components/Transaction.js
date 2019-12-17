import React from 'react';
import {TransactionsContext} from '../context';
import * as transactionTypes from '../data/transaction-types';
import * as occurencesList from '../data/occurences';

import '../styles/transaction.scss';
const occurences = Object.values(occurencesList);

const Transaction = props => {
  return (
    <TransactionsContext.Consumer>
      {value => {
        const transaction = value.transactions.filter(
          transaction => parseInt(transaction.id) === parseInt(props.match.params.id)
        );
        const {type, title, amount, startDate, endDate, occurence} = transaction[0];
        return (
          <form className='container root'>
            <h1 className='title'>{title}</h1>
            <div className='row form'>
              <div className='leftColumn col-sm-6 container-fluid'>
                <div className='row-type row'>
                  <span className='lbl lbl-type col-sm-6'>Type: </span>
                  <select defaultValue={type} className='form-control col-sm-6'>
                    <option value={transactionTypes.EXPENSE}>{transactionTypes.EXPENSE}</option>
                    <option value={transactionTypes.INCOME}>{transactionTypes.INCOME}</option>
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
                    defaultValue={startDate == null ? null : new Date(startDate)}
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
                  <select defaultValue={occurence} className='occurence form-control col-sm-6'>
                    {occurences.map(occurence => {
                      return (
                        <option value={occurence} key={occurence}>
                          {occurence}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <input type='submit' className='btn btn-primary save form-btn' value='Save changes' />
              <input
                type='button'
                className='btn btn-danger  delete form-btn'
                value='Delete'
                onClick={() => {
                  //Redirect to transactions page
                  props.history.push('/transactions');
                  //Delete transaction
                  value.deleteTransaction(transaction[0].id);
                }}
              />
            </div>
          </form>
        );
      }}
    </TransactionsContext.Consumer>
  );
};

export default Transaction;
