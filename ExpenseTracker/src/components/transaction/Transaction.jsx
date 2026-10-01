import React from 'react'
import TransactionForm from './TransactionForm'
import './Transaction.css';
import TransactionList from './TransactionList';

const Transaction = () => {
  return (
  <div className="transaction-container row ">
    <div className="col-md-4">
        <TransactionForm/>
    </div>
    <div className="col-md-8">
      <TransactionList/>

    </div>
  </div>
  )
}

export default Transaction
