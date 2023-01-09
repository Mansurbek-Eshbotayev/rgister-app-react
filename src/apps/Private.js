import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { AuthContext } from '../context/AuthContext'
import { MeContext } from '../context/MeContext'

export const Private = () => {
  const {token, setToken} = useContext(AuthContext)
  const {me, setMe} = useContext(MeContext)

  return (
    <div>
      <Header/>
      <h1>Private Page</h1>
      
      <div className="container">
      <Routes>
      <Route path='/' element={<h2>Home pravite</h2>}/>
        <Route path='/posts' element={<h2>Posts pravite</h2>}/>
        <Route path='/*' element={<h2>404</h2>}/>
      </Routes>
      </div>
    </div>
    
  )
}
