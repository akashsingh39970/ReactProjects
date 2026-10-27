import React from 'react'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TransacttionListPage from './components/transaction/TransacttionListPage'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import './App.css'

const App = () => {
  return (

    <BrowserRouter>

      <div className="d-flex min-vh-100">
        {/* leftside */}
        <Sidebar />


        {/* Rightside */}
        <div className="flex-grow-1 dashboard-rightside ">
          <Header />
  <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<TransacttionListPage />} />
      </Routes>

      </div>
    
              </div>

    </BrowserRouter>
  )
}

export default App
