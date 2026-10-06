import React from 'react'
import './TransacttionListPage.css'

const TransacttionListPage = () => {
  return (
    <div className="transaction-container">
        <div className="transaction-header">
            <h2>Transactions</h2>

            <button className="add-transaction-btn">Add Transaction</button>
        </div>

        <div className="transaction-filter">
          <input type="text" className="transaction-search" placeholder="Search transactions..." />
          <label htmlFor="transaction-type">Filter by Type:</label>
          <select id="transaction-type" className="transaction-type-filter">
            <option value="">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <label htmlFor="category">Filter by Category:</label>
          <select id="category" className="transaction-category-filter">
            <option value="">All</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="date">Filter by Date:</label>
          <input type="date" id="date" className="transaction-date-filter" />

          {/* button clear filters */}
          <button className="clear-filters-btn">Clear Filters</button>
        </div>

    </div>
  )
}

export default TransacttionListPage