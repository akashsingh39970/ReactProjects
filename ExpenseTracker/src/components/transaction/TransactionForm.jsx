  import React, { useContext, useState } from 'react'
  import { TransactionContext } from '../Context/Context';

  import './TransactionFrom.css';
  const TransactionForm = () => {

  const { transaction, setTransaction, data, setData, handleChange, handleSubmit } = useContext(TransactionContext);



    return (
      <div className='transaction-form'>

        <div className="transaction-heading">
          <h3>Add Transaction</h3>
        </div>

        {/* // Transaction form content goes here */}
        <div className="transaction-content">

          <form onSubmit={handleSubmit}>

            <label htmlFor="transaction-title">Title</label>
            <input type="text" id="transaction-title" name="transaction-title" placeholder='Enter Title' 
            value={data['transaction-title']}
            onChange={handleChange}
            />

            <label htmlFor="transaction-amount">Amount</label>
            <input type="number" id="transaction-amount" name="transaction-amount" placeholder='Enter Amount' 
            value={data['transaction-amount']}
            onChange={handleChange}
            />


            {/* transaction filter */}

            {/* transaction income filter */}
            <div className="transaction-filter">
              <div className="income-filter">
                <label htmlFor="income">Type</label>
                <select id="income" name="transaction-income"
                value={data['transaction-income']}
                onChange={handleChange}>
                  <option >Select Type</option>
                  <option >Income</option>
                  <option >Expense</option>
                </select>

              </div>


              {/* transaction category filter */}
              <div className="category-filter">
                <label htmlFor="transaction-type">Category</label>
                <select id="transaction-type" name="transaction-type"
                value={data['transaction-type']}
                onChange={handleChange}>
                  <option >Select Transaction Type</option>
                  <option >Groccery</option>
                  <option>Food</option>
                  <option>Transport</option>
                </select>
              </div>
            </div>

            <button type='submit'>Add Transaction</button>
          </form>




        </div>


      </div>
    )
  }

  export default TransactionForm
