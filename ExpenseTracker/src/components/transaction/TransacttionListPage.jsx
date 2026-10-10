import React from 'react'
import './TransacttionListPage.css'

const TransacttionListPage = () => {
  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <h2>Transactions</h2>

        <button className="add-transaction-btn">Add Transaction</button>
      </div>

        {/* transaction filters */}

      <div className="transaction-filters">
        <input type="text" className="transaction-search container-styling" placeholder="Search transactions..." />
        <div>
          <label htmlFor="transaction-type">Filter by Type:</label>
          <select id="transaction-type" className="transaction-type-filter container-styling">
            <option value="">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="">
          <label htmlFor="category">Filter by Category:</label>
          <select id="category" className="transaction-category-filter container-styling">
            <option value="">All</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
            <option value="other">Other</option>
          </select>
        </div>


        <div className="">
          <label htmlFor="date">Filter by Date:</label>
          <input type="date" id="date" className="transaction-date-filter container-styling" />
        </div>


        {/* button clear filters */}
        <button className="clear-filters-btn">Clear Filters</button>
      </div>


      {/* transaction list */}
      <div className="transaction-list-container">
        
      </div>

    </div>
  )
}

export default TransacttionListPage