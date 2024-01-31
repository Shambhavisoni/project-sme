import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className='header'>
            <NavLink activeClassName={({isActive})=>isActive? "active_class":""} to="/">Home</NavLink>
            <div className="header__search"> 
                <input type="text" placeholder="Search" className='search-input'/>
            </div>
            <NavLink className={({isActive})=>isActive ? "active_class":""} to="/about">About Us</NavLink>
            <NavLink className={({isActive})=>isActive ? "active_class":""} to="/contact">Contact Us</NavLink>      
        </div>
    </>

  )
}

export default Navbar