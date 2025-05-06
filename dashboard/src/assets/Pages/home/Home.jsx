import Sidebar from '../../../components/sidebar/Sidebar';
import './home.scss';
const Home = () => {
  return (
    <div className='home flex flex-2 bg-red-500'>
      <Sidebar/>
      <div className='homeContainer   '>container</div>
    </div>
    
  )
}

export default Home