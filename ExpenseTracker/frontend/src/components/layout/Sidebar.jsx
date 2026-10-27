import React from 'react'
import './Sidebar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <aside className='sidebar-container d-flex flex-column '>


      {/* side bar header  */}
      <Link className=' sidebar-header ' to="/">

        <div className="main-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="main-heading">
          <span><h4>Expense</h4><h4>Tracker</h4></span>
        </div>


      </Link>

      {/* side bar options */}
      <div className="sidebar-options d-flex flex-column m-0 p-2">

        <Link className="options-container" to="/">
        
            <HomeIcon sx={{ color: "rgb(228, 228, 228);", fontSize : "1.8rem" }} />
          
          <span>Dashboard</span>
        </Link>

         <Link className="options-container" to='/transactions'>
            <MenuIcon sx={{ color: "rgb(228, 228, 228);", fontSize : "1.8rem" }} />
          
          <span>Transaction</span>
        </Link>

          <div className="options-container">
          <Link to='#href'>
            <AnalyticsIcon sx={{ color: "rgb(228, 228, 228);", fontSize : "1.8rem" }} />
          </Link>
          <span>Analytics</span>
        </div>

           <div className="options-container">
          <Link to='#href'>
            <SettingsIcon sx={{ color: "rgb(228, 228, 228);", fontSize : "1.8rem" }} />
          </Link>
          <span>Settings</span>
        </div>




      </div>




    </aside>
  )
}

export default Sidebar
