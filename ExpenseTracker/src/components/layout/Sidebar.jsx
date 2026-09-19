import React from 'react'
import './Sidebar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
  return (
    <aside className='sidebar-container d-flex flex-column '>


      {/* side bar header  */}
      <div className=' sidebar-header '>

        <div className="main-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="main-heading">
          <span><h4>Expense</h4><h4>Tracker</h4></span>
        </div>


      </div>

      {/* side bar options */}
      <div className="sidebar-options d-flex flex-column m-0 p-2">

        <div className="options-container">
          <Link to='#href'>
            <HomeIcon sx={{ color: "rgb(228, 228, 228);", fontSize : "1.9rem" }} />
          </Link>
          <span>Dashboard</span>
        </div>




      </div>




    </aside>
  )
}

export default Sidebar
