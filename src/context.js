import React, { createContext, useState } from 'react';
import transactionsList from './data/transactionsList';

export const TransactionsContext = createContext();

const TransactionsContextProvider = props => {
  const [transactions, setTransactions] = useState(transactionsList);

  const deleteTransaction = id => {
    setTransactions(transactions.filter(transactionId => transactionId !== id));
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
