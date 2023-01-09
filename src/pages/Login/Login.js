import React, { useContext, useRef } from 'react'
import { Input } from '../../components/Input/Input'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { MeContext } from '../../context/MeContext'
import { Link, useNavigate } from 'react-router-dom'
// import { MeContext } from '../../context/meContext'

export const Login = () => {

  const {token, setToken} = useContext(AuthContext)
  const {me, setMe} = useContext(MeContext)
  const navigate = useNavigate()


  const Email = useRef()
  const Password = useRef()
 
  const hendlFormSubmit = (evt) =>{
    evt.preventDefault()

    axios.post("http://localhost:8080/login",{
        email: Email.current.value,
        password: Password.current.value,
    }).then(res => {
      if(res.status === 200){
        setToken(res.data.accessToken)
        setMe(res.data.user)
        navigate("/")
      }
      console.log(res);
    })
    .catch(err =>  console.log(err))
  }

  return (
    <form onSubmit={hendlFormSubmit} className='w-50 m-5 p-5 shadow mx-auto'>
      <h2 className='text-center mb-5'>Register</h2>
      <p className='text-center'>sizda accaunt yo'qmi ? <Link to="/register">Sign Up</Link></p>
  <div>
  <Input ref={Email} type="email" placeholder="Email" />
  <Input ref={Password} type="password" placeholder="Password" />
  <button type="submit" className="btn btn-primary">Submit</button>
</div>

</form>
  )
}
