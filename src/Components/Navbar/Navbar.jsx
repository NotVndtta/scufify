import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo"> Scufify</div>
      <ul className="nav-menu">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/artists'>Artists</Link>
        </li>
        <li>Trends</li>
        <li>Contact</li>
      </ul>
    </div>    
  )
}

export default Navbar
