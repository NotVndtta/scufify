import React from 'react'
import './navbar.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Artists from '../Artists/Artists';

const Navbar = () => {
  return (
    <div>

      <div className='nav'>
        <div className="nav-logo"> Scufify</div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Artists</li>
          <li>Trends</li>
          <li>Contact</li>
        </ul>
      </div>
        
      
    </div>
  )
}


export default Navbar
