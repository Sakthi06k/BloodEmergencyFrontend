import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <div className='logo'>BLOOD<span className='e'>E</span></div>
      <ul className='links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Register'>Register</Link></li>
      </ul>
    </nav>
  )
}

export default Nav