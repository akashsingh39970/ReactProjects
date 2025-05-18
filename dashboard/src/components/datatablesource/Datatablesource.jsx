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
          }
    ]