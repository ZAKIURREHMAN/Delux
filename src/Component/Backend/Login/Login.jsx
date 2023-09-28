import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Login(props) {
  const [user,setuser] = useState("")
  const ChangeHandler = (e)=>{
    const {name,value} = e.target
    setuser({
      ...user,
      [name]:value
    })
  }
  const LoginHandler = ()=>{
    const {email,password} = user
    if(email && password){
      axios.post('http://localhost:4000/apilogin',user)
      .then((res)=>{
        // console.log(res.data.message)
        props.ShowMessages(res.data.message)
        props.SelLoginUserrs(res.data.user)
      })
      .catch((err)=>props.ShowMessages(err))
    }
    else{
      props.ShowMessages("Full This Data")
    }
  }
  const DarkModeHandlerFun = ()=>{
    if(props.mode === 'red'){
        return{
            backgroundColor:'black',
            color:'#DAD4B5'
        }
    }
}
const MakeResponsiveImagesFun = ()=>{
  if(props.showmanue === true)
  return{
   display:'none',
  }
}
const MakeResponsiveImages = MakeResponsiveImagesFun()
const DarkModeHandler = DarkModeHandlerFun()
  return (
    <>
    <div className="login-container"style={MakeResponsiveImages}>
      <div className="Login-Form">
        <h1 >Login</h1>
        <input type="email" name="email" value={user.email} id="" placeholder='Enter Your Email' onChange={ChangeHandler}  style={DarkModeHandler} /> <br />
        <input type="password" name="password" value={user.password} id="" placeholder='Enter Your Password'  onChange={ChangeHandler}  style={DarkModeHandler}  /> <br />
        <button onClick={LoginHandler} >Login</button> <br />
        For<Link to = '/register'>Register</Link>
      </div>
    </div>
    </>
  )
}

export default Login