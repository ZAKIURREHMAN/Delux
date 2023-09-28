import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Register(props) {
    const [user,setuser] = useState("")
    const ChangeHandler = (e)=>{
        const {name,value} = e.target
        setuser({
            ...user,
            [name]:value
        })
    }
    const ForRegister = ()=>{
        const {name,email,password} = user;
        if(name && email && password){
            axios.post('http://localhost:4000/apirouter',user)
            .then((res)=>props.ShowMessages(res.data.message))
            .catch((error)=>{
                props.ShowMessages(error.response.data.errors[0].msg)
            })
        }
        else{
            props.ShowMessages("Please Full this data")
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
    <div className="Register-container" style={MakeResponsiveImages}>
        <div className="Register-form">
        <h1>Register</h1>
        <input type="name" name='name' value={user.name} placeholder='Enter Your Name' onChange={ChangeHandler}  style={DarkModeHandler}  /> <br />
        <input type="email" name="email"value={user.email} id="" placeholder='Enter Your Email'onChange={ChangeHandler}   style={DarkModeHandler}  /> <br />
        <input type="password" name="password" value={user.password} id="" placeholder='Enter Your Password'onChange={ChangeHandler}   style={DarkModeHandler} /> <br />
        <button onClick={ForRegister}>Register</button> <br />
        For<Link to = '/login'>Login</Link>
        </div>
    </div>
    </>
  )
}

export default Register


