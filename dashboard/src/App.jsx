
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import List from './Pages/list/List';
import Single from './Pages/single/Single';
import New from './Pages/new/New';
import './globalstyle/darktheme/darktheme.scss';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from './components/formsource/Formsource';
import { LinkContext } from './utility/context/LinkContext';
import { useContext } from 'react';
import { DarkModeContext } from './utility/context/DarkModeContext';

const App = () => {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'app dark': 'dark'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={
                <LinkContext.Provider value='/users/new'>
                  <List />
                </LinkContext.Provider>} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} title='Add New User' />} />
            </Route>
            <Route path='product'>
              <Route index element={
                <LinkContext.Provider value='/product/new'><List /></LinkContext.Provider>
              } />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title='Add New Product' />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;