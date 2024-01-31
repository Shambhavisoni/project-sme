import React from 'react';
import "./HeaderOption.css"

function HeaderOption(props) {
  return (
    <div className="headerOption">
      <h3 className="headerOption__title">{props.title}</h3>
    </div>
  )
}

export default HeaderOption;
