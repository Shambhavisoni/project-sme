import React from 'react'
const Homecard = ({key, name,scheme, img}) => {
  return (
    <div className='card-homecard' id ={key}>
        <p className='topic-homecard'>{name}</p>
        <img  className='img-homecard' src={img} alt="category"/>
        <div className='scheme-homecard'>
            <p className='p-homecard'>{scheme}</p>
            <p className='sub-homecard'>+ schemes</p >
        </div>
        <p className='more-homecard'>See more</p>    
    </div>
  )
}

export default Homecard