import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';



import './home.scss';
import List from '../../components/table/Table';

const Home = ({type}) => {

  return (
    <div className='home flex '>
      <Sidebar/>
      <div className='homeContainer flex-[6] '>
        <Navbar/>
        <div className='widgets flex p-[20px] gap-[20px]'>
          <Widgets type='user'/>  
          <Widgets type='order'/>  
          <Widgets type='earnings'/>  
          <Widgets type='balance'/>  
        </div>
        <div className="charts flex py-[5px] px-[20px]  gap-[20px] "> 
          <Featured />
          <Chart/>
       
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List/>
        </div>
      </div>
    </div>
    
  )
}
 
export default Home;