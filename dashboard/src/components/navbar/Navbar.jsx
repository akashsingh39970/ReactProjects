import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
function Navbar() {
  return (
    <div className='navbar flex items-center'>
      <div className='wrapper flex items-center justify-between'>
        <div className='search flex items-center'>
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon/>
        </div>
        <div className='items flex items-center'>
          <div className='item flex items-center my-6'>
            <LanguageOutlinedIcon/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon/>
            English
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon/>
            English
          </div>
          <div className='item'>
            <NotificationsOutlinedIcon/>
            English
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon/>
            English
          </div>
          <div className='item'>
            <FormatListBulletedOutlinedIcon/>
            English
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
