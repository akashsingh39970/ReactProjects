import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
    const value = 0.70;
  return (
    <div className='featured flex-[2]'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>

        </div>
        <div className="bottom flex p-[20px] flex-col items-center justify-center gap-[15px]">
            <div className="featuredChart">
            <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} strokeWidth={5} />
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">&420</p>
            <p className="desc">
                previous transactions processing. Last payments may not be included.
            </p>
            <div className='summary'>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small' />
                        <div className="resultAmount">$12.4k</div>

                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small' />
                        <div className="resultAmount">$12.4k</div>

                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small' />
                        <div className="resultAmount">$12.4k</div>

                    </div>
                </div>
            </div>


            
        </div>
    </div>
  )
}

export default Featured;