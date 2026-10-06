import React, { useContext } from 'react'
import './TransactionList.css';
import { TransactionContext } from '../Context/Context';

const TransactionList = () => {
 
    const {transaction} = useContext(TransactionContext);

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
                    {
                        transaction && transaction.length > 0 ? (
                            transaction.map((item, index) =>{
                                return(
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.type}</td>
                                    </tr>
                        )}
                    ))             :
                    (
                        <tr>
                            <td colSpan="5">No transactions found.</td>
                        </tr>
                    )
                    }
                    {/* <tr>
                        <td>1</td>
                        <td>Salary</td>
                        <td>Income</td>
                        <td>$5000</td>
                        <td>Credit</td>
                    </tr> */}
                </tbody>

            </table>
        </div>

    </div>
  )
}

export default TransactionList