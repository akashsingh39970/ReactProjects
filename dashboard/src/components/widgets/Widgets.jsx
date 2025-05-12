import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';


import './widgets.scss';

const widgets = ({type}) => {
  let data;

  const amount = 100;
  const diff = 20;
  
  switch(type){
    case 'user':
      data ={
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
       
        icon: (
                    <div className='icon-wrapper' 
                    style={{ backgroundColor:'rgba(255, 0, 0, 0.2)'}}>
                    <PersonOutlineOutlinedIcon className='icon' 
                    style={{color: 'crimson'}}/> </div>
              )
      }
      break;

      case 'order':
        data ={
          title: 'ORDERS',
          isMoney: false,
          link: 'View all orders',
         
          icon: (
                     <div className='icon-wrapper' 
                     style={{ backgroundColor:'rgba(237,227, 10, 0.2)'}}>
                     <ShoppingCartOutlinedIcon className='icon' 
                     style={{color: 'goldenrod'}}/> </div>
                )
        }
        break;

        case 'earnings':
          data ={
            title: 'EARNINGS',
            isMoney: true,
            link: 'View net earnings',
           
            icon: (
                         <div className='icon-wrapper' 
                        style={{ backgroundColor:'rgba(0, 128, 0, 0.2)'}}>
                        <MonetizationOnOutlinedIcon className='icon' 
                        style={{color: 'green'}}/> </div>
                   )
          }
          break;  

          case 'balance':
            data ={
              title: 'BALANCE',
              isMoney: true,
              link: 'View details',
             
              icon: (
                       <div className='icon-wrapper' 
                        style={{ backgroundColor:'rgba(128, 0, 128, 0.2)'}}>
                        <AccountBalanceOutlinedIcon className='icon' 
                         style={{color: 'purple'}}/> </div>
                    )
            }
            break;
        
      

      default:
        break;
  }
  return (
    <div className='widget flex flex-1 justify-between p-[10px] '>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && '$' } {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"> 
          <KeyboardArrowUpIcon/>
          {diff} %  
        </div>
        <div class="icon-wrapper">
             {data.icon}
        </div>
      </div>

    </div>
  )
}

export default widgets