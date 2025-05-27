import './datatable.scss';

import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns, userRows } from '../datatablesource/Datatablesource';
import { Link } from 'react-router-dom';
import { useLink } from '../../utility/context/LinkContext';
import { useState } from 'react';



const paginationModel = { page: 0, pageSize: 10 };

const Datatable = () => {

  const [data, setData] = useState(userRows);
  const link = useLink();

  const handelDelete = (id) =>{
   
    setData( data.filter(item => item.id !== id ))
   
    
  }
  

  const actionColumn = [
    {
      field: 'action', headerName: 'Action', width: 150, renderCell: ( praams) => {
          // console.log(praams.id);
        return (
        
          <div className="cellAction">
            <Link to='/users/single'>
              <span className="viewButton">View</span>
            </Link>
            <span className="deleteButton" onClick={ () => handelDelete(praams.row.id)}>Delete</span>
          </div>
        )
      }
    }
  ]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <span>Add New</span>
        <Link to={link} className='link'>
          Add New
        </Link>
      </div>
      <Paper sx={{ height: 500, width: '100%' }}>
        <DataGrid className='datagrid'
          rows={data}
          columns={userColumns.concat(actionColumn)}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}

export default Datatable