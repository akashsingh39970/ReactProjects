import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './widgets.scss';

function widgets() {
  return (
    <div className='widget flex flex-1 justify-between p-[10px] '>
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">12664</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon/>
          20%
        </div>
          <PersonOutlineOutlinedIcon className='icon'/>
      </div>

    </div>
  )
}

export default widgets