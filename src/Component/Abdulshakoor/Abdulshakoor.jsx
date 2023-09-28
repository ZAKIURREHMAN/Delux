import React from 'react'
import { Link } from 'react-router-dom'
function Abdulshakoor() {
  return (
    <div>
   <div className="main-admincontaine" style={{textAlign:'center',}} >
   <h1> Well Come Admin</h1>
   What data you want to see! <br />
  <Link to='/admin' > <button style={{cursor:'pointer'}} >Register Users !</button> </Link>
   
   <br />
   <Link to = '/userorder'> <button style={{cursor:'pointer'}} >Orders!</button></Link>
  
   </div>
    </div>
  )
}

export default Abdulshakoor
