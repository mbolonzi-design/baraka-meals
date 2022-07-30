import React from 'react'

function NavBar() {
  return (
    <div className='navbar'>
        <div className='navbar-heading'>
            <h1>Baraka Meals</h1>
        </div>
        <div className='navbar-links'>
            <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>Random Meal</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar