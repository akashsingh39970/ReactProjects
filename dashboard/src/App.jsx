
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import List from './Pages/list/List';
import Single from './Pages/single/Single';
import New from './Pages/new/New';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from './components/formsource/Formsource';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='users'>
              <Route index element={<List/>}/>
              <Route path=':userId' element={<Single/>}/>
              <Route path='new' element={<New inputs={userInputs} title='Add New User'/>}/>
            </Route>
            <Route path='product'>
              <Route index element={<List/>}/>
              <Route path=':productId' element={<Single/>}/>
              <Route path='new' element={<New inputs={productInputs} title='Add New Product'/>}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;