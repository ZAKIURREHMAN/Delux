import React, { useState } from 'react'
import './Confermorder.css'
import axios from 'axios'
function Confermorder(props) {
  const [orderuser,setorderuser] = useState("")
  const [carname,setcarname] = useState(props.ordercatagory)
  // console.log("My name is zaki ur rhemna",carname)
  const OrderHandler = (e)=>{
    const {name,value} = e.target
    setorderuser({
      ...orderuser,
      [name]:value,
    })
  }
  const SubmitOrder = ()=>{
    const {name,email,number,model,message,address} = orderuser;
    if(name && email && number && model && message && address){
      axios.post('http://localhost:4000/apiorder',orderuser)
      .then((res)=>console.log(res))
    }
    else{
      console.log("Full This Data")
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
const DarkModeHandler = DarkModeHandlerFun()
  return (
    <div>
        <div className="order-container" style={DarkModeHandler}>
            <div className="order-catagory">
            <i class="fa-solid fa-car"></i>
            <h3>{props.ordercatagory}</h3>
            {/* {console.log("my name is zaki ur rehman",value=``)} */}
            </div>
            <div className="nameinputs">
               <h2>Form</h2>
                <input type="text" style={DarkModeHandler} name="name" placeholder='Enter Your Full Name'  onChange={OrderHandler}   value={orderuser.name} /> <br />
                <input type="email" style={DarkModeHandler} name="email" placeholder='Enter Your Full E-mail'  onChange={OrderHandler}   value={orderuser.email}/> <br />
                <input type="number" style={DarkModeHandler} name="number" placeholder='Enter Your Number'  onChange={OrderHandler}   value={orderuser.number}/> <br />
            </div>
            <div className="price-order">
            <i class="fa-solid fa-money-check-dollar"></i>
            <h3 name='price' value={orderuser.price}  onChange={OrderHandler} >{props.order}</h3>
            </div>
        </div>
        <div className="second-container">
          <div className="carnumbers">
            <input type="text" placeholder='Vehicle  model' name='model'  style={DarkModeHandler}    onChange={OrderHandler}   value={orderuser.model} />
          </div>
          <div className="message">
            <textarea name="message" value={orderuser.message}   style={DarkModeHandler}   onChange={OrderHandler}   id="" placeholder="Any Message"  ></textarea>
          </div>
          <div className="fully-address">
            <input type="text"  id="" placeholder='Address'  style={DarkModeHandler}   name='address' value={orderuser.address} onChange={OrderHandler} />
          </div>
        </div>
          <div className="submitbttn">
          <button onClick={SubmitOrder} >Submit</button>
          </div>
    </div>
  )
}

export default Confermorder
