import avatar from '../../assets/Images/avatar.jpg';
export const userColumns = [
     { field: 'id', headerName: 'ID', width: 70 },
     {field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
      return (
        <div className="cellWithImg flex items-center">
          <img src={params.row.img} alt="avatar/" className="cellImg" />
          {params.row.customer}
        </div>
      )
     }},
     { field: 'product', headerName: 'Product', width: 200 },
     { field: 'date', headerName: 'Date', width: 100 },
     { field: 'amount', headerName: 'Amount', width: 100 },
     { field: 'method', headerName: 'Method', width: 150 },
     { field: 'status', headerName: 'Status', width: 100, renderCell: (params)=>{
      return(
        <div className="celWithStatus">
          <span className={`status ${params.row.status}`}>
            {params.row.status}
          </span>
        </div>
      )
     }}
]



//temperory data
 export const userRows = [
  {
    id: 101,
    product: 'Lunchbox Set 3',
    img: avatar,
    customer: 'Ravi Saxena',
    date: '1 March',
    amount: '969',
    method: 'Cash On Delivery',
    status: 'approved',
  },
  {
    id: 102,
    product: 'Stainless Steel Bottle',
    img: avatar,
    customer: 'Anita Mehra',
    date: '10 April',
    amount: '599',
    method: 'Online Payment',
    status: 'pending',
  },
  {
    id: 103,
    product: 'Thermal Coffee Mug',
    img: avatar,
    customer: 'Karan Patel',
    date: '22 February',
    amount: '749',
    method: 'Cash On Delivery',
    status: 'approved',
  },
  {
    id: 104,
    product: 'Kids Snack Box',
    img: avatar,
    customer: 'Nisha Batra',
    date: '3 May',
    amount: '399',
    method: 'Online Payment',
    status: 'declined',
  },
  {
    id: 105,
    product: 'Eco-Friendly Tumbler',
    img: avatar,
    customer: 'Siddharth Jain',
    date: '17 March',
    amount: '449',
    method: 'Cash On Delivery',
    status: 'approved',
  },
  {
    id: 106,
    product: 'Spill-proof Water Bottle',
    img: avatar,
    customer: 'Ruchi Verma',
    date: '25 April',
    amount: '529',
    method: 'Online Payment',
    status: 'pending',
  },
  {
    id: 107,
    product: 'Compact Bento Box',
    img: avatar,
    customer: 'Mohit Rana',
    date: '29 March',
    amount: '799',
    method: 'Cash On Delivery',
    status: 'approved',
  },
  {
    id: 108,
    product: 'Glass Storage Jar Set',
    img: avatar,
    customer: 'Deepika Sharma',
    date: '5 May',
    amount: '999',
    method: 'Online Payment',
    status: 'approved',
  },
  {
    id: 109,
    product: 'Microwaveable Lunch Box',
    img: avatar,
    customer: 'Tina Bhalla',
    date: '8 March',
    amount: '649',
    method: 'Online Payment',
    status: 'approved',
  },
  {
    id: 110,
    product: 'Foldable Bottle',
    img: avatar,
    customer: 'Manish Soni',
    date: '11 April',
    amount: '499',
    method: 'Cash On Delivery',
    status: 'pending',
  },
  {
    id: 111,
    product: 'Insulated Tiffin Box',
    img: avatar,
    customer: 'Rina Desai',
    date: '15 March',
    amount: '899',
    method: 'Cash On Delivery',
    status: 'declined',
  },
  {
    id: 112,
    product: 'Leak-proof Sipper',
    img: avatar,
    customer: 'Saurabh Khurana',
    date: '20 March',
    amount: '359',
    method: 'Online Payment',
    status: 'approved',
  },
  {
    id: 113,
    product: 'Portable Snack Cup',
    img: avatar,
    customer: 'Geeta Malhotra',
    date: '22 April',
    amount: '279',
    method: 'Cash On Delivery',
    status: 'pending',
  },
  {
    id: 114,
    product: 'Bamboo Fiber Bowl Set',
    img: avatar,
    customer: 'Aditya Rao',
    date: '12 March',
    amount: '699',
    method: 'Online Payment',
    status: 'approved',
  },
  {
    id: 115,
    product: 'Eco Bento Combo',
    img: avatar,
    customer: 'Prerna Yadav',
    date: '14 April',
    amount: '749',
    method: 'Cash On Delivery',
    status: 'declined',
  },
  {
    id: 116,
    product: 'Reusable Juice Bottle',
    img: avatar,
    customer: 'Vikram Singh',
    date: '16 March',
    amount: '499',
    method: 'Online Payment',
    status: 'approved',
  },
  {
    id: 117,
    product: 'Stackable Food Box',
    img: avatar,
    customer: 'Ritika Kapoor',
    date: '19 April',
    amount: '829',
    method: 'Cash On Delivery',
    status: 'pending',
  },
  {
    id: 118,
    product: 'Silicone Lid Bowl',
    img: avatar,
    customer: 'Yash Thakur',
    date: '21 March',
    amount: '559',
    method: 'Online Payment',
    status: 'approved',
  },
  {
    id: 119,
    product: 'Kid-Safe Thermos',
    img: avatar,
    customer: 'Neha Rathi',
    date: '23 April',
    amount: '799',
    method: 'Cash On Delivery',
    status: 'declined',
  },
  {
    id: 120,
    product: 'Fold-n-Go Container',
    img: avatar,
    customer: 'Harsh Vardhan',
    date: '26 March',
    amount: '689',
    method: 'Online Payment',
    status: 'approved',
  }
];
