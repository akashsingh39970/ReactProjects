import './sidebar.scss';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../utility/context/DarkModeContext';

function Sidebar() {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar flex-1 min-h-screen bg-white'>
      <div className='top flex  items-center justify-center '>
        <Link to='/'><span className='logo font-bold '>lamaadmin</span></Link>
      </div>
      <hr />
      <div className='center ps-2'>
        <ul className='list-none m-0 p-0'>
          <p className='title'>MAIN</p>
          <Link to='/'>
            <li>
              <DashboardCustomizeIcon />

              <span>Dashborad</span>
            </li>
          </Link>

          <p className='title'>LISTS</p>
          <Link to='/users'>
          <li>
            <PersonIcon />
            <span>Users</span>
          </li>
          </Link>
          <Link to='/product'>
          <li>
            <Inventory2Icon />
              <span>Product</span>
          </li>
          </Link>
          <li>
            <AddShoppingCartIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL LINKS</p>
          <li>
            <QueryStatsIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <HealthAndSafetyIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom flex m-10 items-center'>
        <div className='colorOptions' onClick={()=> dispatch({type:'Light'})}></div>
        <div className='colorOptions' onClick={()=> dispatch({type:'Dark'})}></div>
        {/* <div className='colorOptions'></div> */}
      </div>
    </div>
  )
}

export default Sidebar;
