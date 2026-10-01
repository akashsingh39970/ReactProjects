import React from 'react'
import './TransactionList.css';

const TransactionList = () => {
  return (
    <div className="transaction-list-container">

        <div className="transaction-list-heading">
            <h3>Transactions</h3>
            <input type="text" className="search" placeholder="Search by title" />
        </div>
      {/* Transaction items will be rendered here */}
        <div className="transaction-table-container">
            <table className="transaction-table table-striped">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Type</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Salary</td>
                        <td>Income</td>
                        <td>$5000</td>
                        <td>Credit</td>
                    </tr>
                </tbody>

            </table>
        </div>

    </div>
  )
}

export default TransactionList