import React from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import { Registr } from '../pages/Registr/Registr'

export const Public = () => {
  return (
    <div>
      <header className="  bg-light p-4">
        <div className="container">
        <nav className="  bg-light d-flex align-items-center justify-content-between">
        <Link className='text-decoration-none text-dark' to="/">Home</Link>
        <div className=''>
        <Link to="/login" className='btn btn-success me-3'>Sign In</Link>
        <Link to="/register" className='btn btn-dark'>Sign Up</Link>
      </div>
      </nav>
        </div>
      </header>


      <div className="container">
      <Routes>
        <Route path='/' element={<h2>Home Public</h2>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registr/>}/>
        <Route path='/*' element={<Navigate to="/login" replace={true} />} />
      </Routes>
      </div>
      
    </div>
  )
}
