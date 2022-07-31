import React from 'react'
import {Link} from "react-router-dom"
import './Navbar.scss'

function NavBar() {
  return (
    <div className='navbar'>
        <div className='navbar-heading'>
            <h1>Baraka Meals</h1>
        </div>
        <div className='navbar-links'>
            <ul>
                <Link to ="/"><li>Home</li></Link>
                <Link to="/categories"><li>Categories</li></Link>
                <Link to="/random"><li>Random Meal</li></Link>
                <Link to="/contact"><li>Contact Us</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default NavBar