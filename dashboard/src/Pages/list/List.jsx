import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
function List() {
  return (
    <div className="list flex w-[100%]">
      <Sidebar/>
      <div className="listContainer flex-6">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List
