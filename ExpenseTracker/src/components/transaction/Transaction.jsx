import React from 'react'
import TransactionForm from './TransactionForm'
import './Transaction.css';

const Transaction = () => {
  return (
  <div className="transaction-container row ">
    <div className="col-md-4">
        <TransactionForm/>
    </div>
    <div className="col-md-8">

    </div>
  </div>
  )
}

export default Transaction
