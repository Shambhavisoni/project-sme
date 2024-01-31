import React from 'react'
import Navbar from './Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import About from '../pages/About';
import Contact from '../../pages/Contact';
const Header = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Homepage/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='*' element={<Navigate replace to='/'/>}/>
    </Routes>
    </>
  )
}

export default Header