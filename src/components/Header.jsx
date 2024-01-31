import React from 'react';
import HeaderOption from "./HeaderOption.jsx";
import logo from "./logo.jpg"
import SearchIcon from '@mui/icons-material/Search';

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
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
     </div>
  )
}

export default Header;