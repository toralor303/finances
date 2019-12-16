import React, { createContext, useState } from 'react';
import transactionsList from './data/transactionsList';

export const TransactionsContext = createContext();

const TransactionsContextProvider = props => {
  const [transactions, setTransactions] = useState(transactionsList);

  const deleteTransaction = id => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const addTransaction = transaction => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
