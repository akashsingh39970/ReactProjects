import Sidebar from '../../../components/sidebar/Sidebar';
import './home.scss';

const Home = () => {
  return (
    <div className='home flex '>
      <Sidebar/>
      <div className='homeContainer flex-6 '>container</div>
    </div>
    
  )
}

export default Home