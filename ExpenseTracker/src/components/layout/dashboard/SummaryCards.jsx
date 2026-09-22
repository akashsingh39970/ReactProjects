import React from 'react';
import './SummaryCard.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const SummaryCards = () => {
    return (
        <div className="summary-cards row g-4">

            {/* Income */}
            <div className="col-12 col-md-4">
                <div className="summary-card"
                style={{  backgroundColor: 'var(--credit-in-icon-color)'}}>

                    <div className="summary-card-icon" 
                    style={{  backgroundColor: 'var(--credit-in-bg-color)'}}>
                        <ArrowUpwardIcon
                            sx={{ color: 'white', fontSize: '40px' }}
                        />
                    </div>

                    <div className="summary-card-content">
                        <p>Total Income</p>
                        <h3>₹50,000</h3>
                        <span>1 Transaction</span>
                    </div>

                </div>
            </div>

            {/* Expense */}
            <div className="col-12 col-md-4">
                <div className="summary-card"
                          style={{  backgroundColor: 'var(--credit-out-icon-color)'}}>

                    <div className="summary-card-icon"
                    style={{  backgroundColor: 'var(--credit-out-bg-color)'}}>
                        <ArrowDownwardIcon
                            sx={{ color: 'white', fontSize: '40px' }}
                        />
                    </div>

                    <div className="summary-card-content">
                        <p>Total Expense</p>
                        <h3>₹20,000</h3>
                        <span>5 Transactions</span>
                    </div>

                </div>
            </div>

            {/* Balance */}
            <div className="col-12 col-md-4">
                <div className="summary-card"
                style={{  backgroundColor: 'var(--credit-balance-icon-color)'}}>

                    <div className="summary-card-icon"
                    style={{  backgroundColor: 'var(--credit-balance-bg-color)'}}>
                        <AccountBalanceWalletIcon
                            sx={{ color: 'white', fontSize: '40px' }}
                        />
                    </div>

                    <div className="summary-card-content">
                        <p>Balance</p>
                        <h3>₹30,000</h3>
                        <span>Income - Expense</span>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SummaryCards;