import React from 'react';
import "./Header.css";
import HeaderOption from "./HeaderOption.js";
import logo from "./logo.jpg"

function Header() {
  return (
    <div className="header">
            <div className="header__left">
              <img src={logo} alt=""/>
              <HeaderOption title="Home" />
              <HeaderOption title="About Us"/>
              <HeaderOption title="Contact Us" />
              <HeaderOption title="Filter" />
            </div>
            <div className="header__right">        
                <div className="header__search"> 
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
     </div>
  )
}

export default Header;