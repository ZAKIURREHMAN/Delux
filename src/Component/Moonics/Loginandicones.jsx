import React from 'react'
import './Loginandicones.css'
import { Link } from 'react-router-dom'
function Loginandicones(props) {
  const DarkModeHandlerFun = ()=>{
    if(props.mode === 'red'){
        return{
            backgroundColor:'black',
            color:'#DAD4B5'
        }
    }
}
const DarkModeHandler = DarkModeHandlerFun()
  return (
<>
      <div className="mainlgoninandiconcontainer" style={DarkModeHandler}>
        <Link to='/login' id='logins' >        <div className="login-icon">
        <i class="fa-solid fa-right-to-bracket"></i>
        <span  >Login</span>
        </div></Link>
        <div className="darkmode-icon">
            {
              props.mode === 'red'?<i class="fa-regular fa-sun" onClick={props.togglemode }></i>:<i class="fa-solid fa-moon" id='moon'onClick={props.togglemode }></i>
            }
        
        </div>
      </div>
</>

  )
}

export default Loginandicones
