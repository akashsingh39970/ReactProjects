import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import avatar from '../../assets/Images/avatar.jpg';
import { useContext } from 'react';
import { DarkModeContext } from '../../utility/context/DarkModeContext';
function Navbar() {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='navbar flex items-center'>
      <div className='wrapper flex items-center justify-between'>
        <div className='search flex items-center'>
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon/>
        </div>
        <div className='items flex items-center'>
          <div className='item '>
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon' onClick={()=> dispatch({type:'Toogle'})}/>
            
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className='icon'/>
            
          </div>  
          <div className='item'>
            <NotificationsOutlinedIcon className='icon'/>
            <div className='counter'>1</div>
            
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className='counter'>2</div>
            
          </div>
          <div className='item'>
            <FormatListBulletedOutlinedIcon className='icon'/>
            
          </div>
          <div className='item'>
            <img src={avatar}
             alt="" className='avatar' />              
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
