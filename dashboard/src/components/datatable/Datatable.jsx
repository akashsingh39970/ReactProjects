import './datatable.scss';

import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns, userRows } from '../datatablesource/Datatablesource';



const paginationModel = { page: 0, pageSize: 5 };

const Datatable = () => {

  const actionColumn =[
    {fiels: 'action', headerName: 'Action', width: 150, renderCell: ()=>{
      return(
        <div className="cellAction">
          <span className="viewButton">View</span>
          <span className="deleteButton">Delete</span>
        </div>
      )
    }}
  ]
  return (
    <div className="datatable">
         <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
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