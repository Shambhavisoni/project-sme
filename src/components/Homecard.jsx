import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Homecard = ({key, name,scheme, img}) => {
  const [bool,setbool]= useState(false);
  let navigate= useNavigate();
  const update = (name) => {
    setbool(true);
    navigate('/scheme', { state: { name1: name } });
  }
  return (
    <>
    <div className='card-homecard'>
        <p className='topic-homecard'>{name}</p>
        <img  className='img-homecard' src={img} alt="category"/>
        <div className='scheme-homecard'>
            <p className='p-homecard'>{scheme}</p>
            <p className='sub-homecard'>+ schemes</p >
        </div>
        <button  className='more-homecard' onClick={()=>update({name})}>See more</button> 
    </div>
    </>
  )
}
export default Homecard