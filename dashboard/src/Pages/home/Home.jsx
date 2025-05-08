import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';


import './home.scss';

const Home = () => {
  return (
    <div className='home flex '>
      <Sidebar/>
      <div className='homeContainer flex-[6] '>
        <Navbar/>
        <div className='widgets flex p-[20px] gap-[20px]'>
          <Widgets/>  
          <Widgets/>  
          <Widgets/>  
          <Widgets/>  
        </div>
      </div>
    </div>
    
  )
}

export default Home;