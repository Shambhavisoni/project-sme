import React from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
const d = new Date();
let year = d.getFullYear();
function Footer() {
  return (
    <>
    <footer>
        <div className="footer">
            <div className='footer-top'>
                <section>
                    <img src="./logo.jpg" alt="SME" />
                    <p>
                    Your One-Stop Shop for Government and Private Support.
                    </p>
                </section>
                <section className='links'>
                    <NavLink className="link" activeClassName="active_class" exact to="/">Home</NavLink>
                    <NavLink className="link"  activeClassName="active_class" to="/about">About Us</NavLink>
                    <NavLink className="link"  activeClassName="active_class" to="/contact">Contact Us</NavLink>
                </section>
            </div>
            <div className="sub-footer">
                Copyright © {year} Schemes Made Easy
            </div>
        </div>
    </footer>
    <Routes>
        {/* <Route path='/' element={<Homepage/>}/>  */}
        <Route path='/about' element={<About />}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='*' element={<Navigate replace to='/'/>}/>
    </Routes>
    </>
  )
}

export default Footer;