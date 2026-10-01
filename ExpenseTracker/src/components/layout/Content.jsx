import React from 'react'
import SummaryCards from './dashboard/SummaryCards'
import Transaction from '../transaction/Transaction'
import './Content.css'
import RecentActivityCard from '../recentActivity/RecentActivityCard'

const Content = () => {
  return (
    <div className="content-container">
      <SummaryCards/>
      <Transaction/>
      <RecentActivityCard/>

    </div>
  )
}

export default Content
