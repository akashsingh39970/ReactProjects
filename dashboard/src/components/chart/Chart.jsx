import './chart.scss';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({aspect, title}) => {
    const data = [
       {name: 'january', Total: 1200},
       {name: 'februrary', Total: 2000},
       {name: 'March', Total: 2200},
       {name: 'April', Total: 1800},
       {name: 'May', Total: 2700},
       {name: 'june', Total: 2300},

      ];
  return (
    <div className='chart flex-[4]'>
        <div className="title">{title}</div>
         <ResponsiveContainer width="100%" aspect={aspect}>
         <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  
  </defs>
  <XAxis dataKey="name" stroke='gray' />
  {/* <YAxis /> */}
  <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#total)" /> */}
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;