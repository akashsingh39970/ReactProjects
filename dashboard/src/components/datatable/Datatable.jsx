import './datatable.scss';

import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns, userRows } from '../datatablesource/Datatablesource';
import { Link } from 'react-router-dom';
import { useLink } from '../../utility/context/LinkContext';



const paginationModel = { page: 0, pageSize: 10 };

const Datatable = () => {
  const link = useLink();
  

  const actionColumn = [
    {
      field: 'action', headerName: 'Action', width: 150, renderCell: () => {
        return (
          <div className="cellAction">
            <Link to='/users/single'>
              <span className="viewButton">View</span>
            </Link>
            <span className="deleteButton">Delete</span>
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
          rows={userRows}
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