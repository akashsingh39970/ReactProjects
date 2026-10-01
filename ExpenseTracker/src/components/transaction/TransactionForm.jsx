import React from 'react'
import './TransactionFrom.css';
const TransactionForm = () => {
  return (
    <div className='transaction-form'>

      <div className="transaction-heading">
        <h3>Add Transaction</h3>
      </div>

      {/* // Transaction form content goes here */}
      <div className="transaction-content">

        <form action="">

          <label htmlFor="transaction-type">Category</label>
          <input type="text" id="transaction-type" name="transaction-type" placeholder='Enter Category' />

          <label htmlFor="transaction-amount">Amount</label>
          <input type="number" id="transaction-amount" name="transaction-amount" placeholder='Enter Amount' />


          {/* transaction filter */}

          {/* transaction income filter */}
          <div className="transaction-filter">
            <div className="income-filter">
              <label htmlFor="income">Type</label>
              <select id="income" name="income">
                <option >Select Type</option>
                <option >Income</option>
                <option >Expense</option>
              </select>

            </div>


            {/* transaction category filter */}
            <div className="category-filter">
              <label htmlFor="transaction-type">Category</label>
              <select id="transaction-type" name="transaction-type">
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
