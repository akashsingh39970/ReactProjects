import './single.scss';
import avatar from '../../assets/Images/avatar.jpg';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className="single flex w-[100%]">
        <Sidebar/>   
        <div className="singleContainer flex-6">
          <Navbar/>
          <div className="top p-[20px] flex gap-[20px]">
            <div className="left  flex-1 ">
              <div className='topHeading '>
                <div className="editButton">Edit</div>
              <h1 className="title   ">Information</h1>
              </div>
              
              <div className="infoContainer flex gap-[20px]">
                 <div className="item">
                <img src={avatar} alt="" className="itemImg" />
              </div>
              <div className="details">
                <h1 className="itemTitle text-2xl font-semibold">Jane Dane</h1>
                <div className="detailItem ">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">abac@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 9897769788</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">H-33, Bock N, Udhav Nagar, Delhi-97</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
              </div>
             
            </div>
            <div className="right flex-2">
              <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title   ">Last Transactions</h1>
            <List/>
          </div>
        </div>
    </div>
  )
}

export default Single;
