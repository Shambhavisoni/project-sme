import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <div className="card-name">
        <h3>{props.name}</h3>   
      </div>
      <div className='content'>
        <h4>{props.content}</h4>
      </div>
      <div className="details">
          {/* <a className="btn" href="#">Check Eligibilty</a> */}
          <a className="btn" href="#">Know More</a>
        </div>
    </div>
  )
}

export default Card
