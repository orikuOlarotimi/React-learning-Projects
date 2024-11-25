import React from 'react';
import { BrowserRouter as Router,Route,Routes, Link } from 'react-router-dom';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Home from './Home';

const Navbar = () => {
  return (
    <Router>
          <div className='navbar'>
            <h2> Trade With Tim</h2>
          <div className='link-div' >
            <Link to="/"  className='links'> Home</Link>
            <Link to="/"  className='links'> About</Link>
            <Link to="/"  className='links'> Projects</Link>
            <Link to="/"  className='links'> Contact</Link>
            <Link to="/"  className='links'> Profile</Link>
          </div>
          
          <div className='icons-div'>
                <Link to="https://www.facebook.com/" style={{textDecoration:"none", fontSize:"25px", color:"#49a6e9" }}>  <FaFacebook /></Link>
                <Link to="https://twitter.com/" style={{textDecoration:"none", fontSize:"25px" , color:"#49a6e9"}}> <FaTwitter/> </Link>
                <Link to="https://www.linkedin.com" style={{textDecoration:"none", fontSize:"25px", color:"#49a6e9" }}> <FaLinkedin/> </Link>
                <Link to="https://www.behance.net/" style={{textDecoration:"none", fontSize:"25px", color:"#49a6e9" }}> <FaBehance/> </Link>

          </div>
          </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
  )
}

export default Navbar