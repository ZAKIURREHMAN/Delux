import React, { useState } from 'react'
import Toper from './Component/Toper/Toper'
import Navbar from './Component/Navbar/Navbar'
import Loginandicones from './Component/Moonics/Loginandicones'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Component/Backend/Login/Login'
import Home from './Component/Home/Home'
import Aboutrouter from './Component/Aboutrouter/Aboutrouter'
import ServicesRouter from './Component/ServicesRouter/ServicesRouter'
import Contentrouter from './Component/Contentrouter/Contentrouter'
import Register from './Component/Backend/Registration/Register'
import Confermorder from './Component/Conferm/Confermorder'
import Admin from './Component/Admin/Admin'
import Userorder from './Component/Admin/Userorder'
import Abdulshakoor from './Component/Abdulshakoor/Abdulshakoor'
import Message from './Component/message/Message'
function App() {
  const [mode,setmode] = useState('light')
  const [order,setorder] = useState("")
  const [ordercatagory,setordercatagory] = useState("")
  const [Loginuser,setLoginuser] = useState({})
  const [message,setmessage] = useState("")
  const [showmanue,setshowmamue] = useState(false)
  const ShowMessages = (message,type)=>{
  setmessage({
    message : message,
    type : type,
  })
  }
  setTimeout(() => {
    setmessage("")
  }, 9000);
  const OrderHandler = (p,catagory)=>{
    setorder(p)
    setordercatagory(catagory)
  }
  const togglemode = ()=>{
    if(mode === 'light'){
      document.body.style.backgroundColor = 'black'
      ShowMessages("Dark Mode has be enables successfully ","succcessfully")
      setmode('red')
    }
    else{
      document.body.style.backgroundColor = 'white'
      ShowMessages(" Light  Mode has be enables successfully ","succcessfully")
      setmode('light')
    }
  }

  return (
    <>
    <BrowserRouter>
    <Toper mode = {mode} />
    <Navbar mode = {mode} showmanue = {showmanue} ManueActive = {setshowmamue} />
    <Loginandicones togglemode ={togglemode } mode = {mode} />
    <Message message = {message}  />
    {
      Loginuser.email === 'deluxecleaningservices48@gmail.com' && Loginuser.password === 'greenpakistan'?< Abdulshakoor />:""
    }
    
    <Routes>
      < Route path='/' element = {<Home OrderHandler = {OrderHandler} mode = {mode} showmanue = {showmanue}  />} />
      < Route path='/login' element = {<Login  mode = {mode}  SelLoginUserrs = {setLoginuser} ShowMessages = {ShowMessages} showmanue = {showmanue}   />} />
      < Route path='/register' element = {<Register mode = {mode} ShowMessages = {ShowMessages}showmanue = {showmanue}  />} />
      < Route path='/about' element = {<Aboutrouter mode = {mode} showmanue = {showmanue} />} />
      < Route path='/service' element = {<ServicesRouter mode = {mode} showmanue = {showmanue} />} />
      < Route path='/content' element = {<Contentrouter showmanue = {showmanue}/>} />
      < Route path='/order' element = {<Confermorder mode = {mode} order = {order} ordercatagory = {ordercatagory} />} />
      <Route   path='admin' element = {<Admin showmanue = {showmanue}/>}  />
      <Route   path='userorder' element = {<Userorder showmanue = {showmanue}/>}  />
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
