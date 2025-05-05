
import Home from './assets/Pages/home/Home';
import Login from './assets/Pages/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;