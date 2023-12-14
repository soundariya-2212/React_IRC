import './assets/Css/style.css'
import Nav from './components/Nav.js';
import Home from'./pages/Home.js'
import About from'./pages/About.js'
import Contact from './pages/Contact.js'
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
     <>
      <Nav/>
      <Routes>
        <Route path="Home" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
     </>
  );
}

export default App;
