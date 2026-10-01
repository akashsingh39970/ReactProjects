import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import Content from '../components/layout/Content'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className="d-flex min-vh-100">
      {/* leftside */}
      <Sidebar/>


      {/* Rightside */}
      <div className="flex-grow-1 dashboard-rightside ">
      <Header/>
      <Content/>
      </div>

    </div>
  )
}

export default Dashboard
