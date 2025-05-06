import './sidebar.scss';

function Sidebar() {
  return (
    <div className='sidebar flex  bg-orange-50'>
      <div className='top'><span className='logo'>lamaadmin</span></div>
      <div className='center'>
        <ul>
          <li>
            <span>Dashborad</span>
          </li>
          <li>
            <span>Dashborad</span>
          </li>
          <li>
            <span>Dashborad</span>
          </li>
          <li>
            <span>Dashborad</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>color options</div>
    </div>
  )
}

export default Sidebar;
