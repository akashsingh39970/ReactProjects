import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import avatar from '../../assets/Images/avatar.jpg';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './new.scss'
import { useState} from 'react';


const New = ({inputs, title}) => {
  // console.log(inputs);
  const [file, setFile] = useState("");
  console.log(file);
  return (
    
    <div className="new flex w-[100%]">
      <Sidebar/>
      <div className="newContainer flex-6">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file): avatar} alt="" />
          </div>
          <div className="right">
            <form >
              <div className="formInput">
                <label htmlFor="file">Image:<DriveFolderUploadIcon className='icon'/></label>
                <input type="file" name="" id="file"  style={{display:'none'}} onChange={ e => setFile(e.target.files[0])}/>
              </div>
              {inputs.map( (input) =>{
                return (
                  <div className="formInput"  key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
                )
                
              })}
              
              <button>Send</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;