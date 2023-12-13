import './assets/Css/style.css';
import Nav from './components/Nav';
import Register from './components/Register';
import Login from './components/Login';

import Review from './components/Review';
import {Route,Routes} from "react-router-dom";
import Home from './components/Home';
function App()
{
    return(
      <>
      <div>
        <Nav/>
      </div>
      <div>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Review" element={<Review/>}/>
        </Routes>
      </div>
      </>
      
    )
}
export default App;
