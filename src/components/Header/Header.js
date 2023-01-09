import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { MeContext } from '../../context/MeContext'

export const Header = () => {
  const {token, setToken} = useContext(AuthContext)
  const {me, setMe} = useContext(MeContext)
  return (
    <header className="  bg-light p-4 ">
    <div className="container d-flex justify-content-between">
    <nav className="  bg-light d-flex align-items-center">
    <Link className='text-decoration-none text-dark me-3' to="/">Home</Link>
    <Link className='text-decoration-none text-dark' to="/posts">Posts</Link>
    </nav>
    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {me.firstname.charAt(0) + me.lastname.charAt(0)}
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {/* <li><Link className="dropdown-item" to="#">Action</Link></li> */}
    <li><button className='dropdown-item' onClick={() => {setToken(""); setMe("") }}>Log Out</button></li>
    </ul>
    </div>
    
    </div>
    </header>
    )
  }
  