import React from 'react';
import './RecentActivityCard.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const activities = [
    { id: 1, title: 'Salary', date: 'Today', amount: 50000, type: 'income' },
    { id: 2, title: 'Shopping', date: 'Yesterday', amount: 2500, type: 'expense' },
    { id: 3, title: 'Freelance', date: '28 Sep 2026', amount: 10000, type: 'income' },
];

const RecentActivityCard = () => {
    return (
        <div className="recent-activity-container">

            <div className="recent-header">
                <h3>Recent Activity</h3>
                <span>View All &gt;</span>
            </div>

            <div className="recent-activity-list row g-3">
                {activities.map((activity) => (
                    <div className="col-12 col-md-6 col-xl-4" key={activity.id}>
                        <div className="recent-cards">

                            <div className={`recent-icon ${activity.type}`}>
                                {activity.type === 'income' ? (
                                    <ArrowUpwardIcon />
                                ) : (
                                    <ArrowDownwardIcon />
                                )}
                            </div>

                            <div className="recent-details">
                                <h4>{activity.title}</h4>
                                <p>{activity.date}</p>
                            </div>

                            <div className={`recent-amount ${activity.type}`}>
                                {activity.type === 'income' ? '+' : '-'}
                                ₹{activity.amount.toLocaleString('en-IN')}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default RecentActivityCard;