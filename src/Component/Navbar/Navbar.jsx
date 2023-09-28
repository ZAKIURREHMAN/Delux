import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar(props) {
    const DarkModeHandlerFun = ()=>{
        if(props.mode === 'red'){
            return{
                backgroundColor:'black',
                color:'#DAD4B5'
            }
        }
    }
    const ManoueHandler = ()=>{
       if(props.showmanue == false){
        props. ManueActive(true)
       }
       else{
        props. ManueActive(false)
       }
    }
    
    const DarkModeHandler = DarkModeHandlerFun()
  return (
    <div>
        <div className="navbar-container" style={DarkModeHandler}>
            <div className="logo"  >
                <img src="/logo/logo.webp" alt="" style={DarkModeHandler} />
            </div>
            <div className="NavbarData"  style={DarkModeHandler}>
                    <input type="checkbox" name="" id="checkbox" />
                    <label htmlFor="checkbox"><i class="fa-sharp fa-solid fa-bars" id='bar' onClick={ManoueHandler} ></i></label>
                <ul>
                    <Link to='/' className='first'  style={DarkModeHandler}><li><a>HOME</a></li></Link>
                    <Link to = '/about' className='first'  style={DarkModeHandler}><li><a>ABOUT</a></li></Link>
                    <Link to = '/service' className='first'  style={DarkModeHandler}><li><a>SERVICES</a></li></Link>
                    <Link to = '/content' className='first'  style={DarkModeHandler}><li><a>CONTENT US</a></li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
