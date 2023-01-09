import React, { useContext, useRef } from 'react'
import { Input } from '../../components/Input/Input'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { MeContext } from '../../context/MeContext'
import { Link, Navigate, useNavigate } from 'react-router-dom'
// import { MeContext } from '../../context/meContext'

export const Registr = () => {

  const {token, setToken} = useContext(AuthContext)
  const {me, setMe} = useContext(MeContext)
  const navigate = useNavigate()


  const fristName = useRef()
  const LastName = useRef()
  const Email = useRef()
  const Password = useRef()
 
  const hendlFormSubmit = (evt) =>{
    evt.preventDefault()

    axios.post("http://localhost:8080/register",{
        email: Email.current.value,
        password: Password.current.value,
        firstname: fristName.current.value,
        lastname: LastName.current.value,
    }).then(res => {
      if(res.status === 201){
        setToken(res.data.accessToken)
        setMe(res.data.user)
        navigate("/")
      }
    })
    .catch(err =>  console.log(err))
  }

  return (
    <form onSubmit={hendlFormSubmit} className='w-50 m-5 p-5 shadow mx-auto'>
      <h2 className='text-center mb-5'>Register</h2>
      <p className='text-center'>sizda accaunt bormi ? <Link to="/login">Sign In</Link></p>
  <div>
  <Input ref={fristName} type="text" placeholder="First name"  />
  <Input ref={LastName} type="text" placeholder="Last name"  />
  <Input ref={Email} type="email" placeholder="Email" />
  <Input ref={Password} type="password" placeholder="Password" />
  <button type="submit" className="btn btn-primary">Submit</button>
</div>

</form>
  )
}
