import React from 'react'
import {Routes,Route} from 'react-router-dom'
import User from './Pages/User.js'
import Adduser from './Pages/Adduser.js';
import Edituser from './Pages/Edituser.js'
import './assets/Css/core.css'
const App=()=>
{
  return(
    <>
    <Routes>
      <Route path='/' element={<User/>}/>
      <Route path='/add' element={<Adduser/>}/>
      <Route path='/edit/:id' element={<Edituser/>}/>
    </Routes>
    </>
  )
}
export default App