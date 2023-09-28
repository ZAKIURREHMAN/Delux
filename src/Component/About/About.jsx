import React from 'react'
import './About.css'
function About(props) {
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
    <div  style={MakeResponsiveImages}>
        <div className="aboutheading" style={DarkModeHandler}>
            <h1>Why Choosing Us</h1>
        </div>
      <div className="mainabout-container"style={DarkModeHandler}>
        <div className="choosingdata">
            <img src="/abouticon/community.png" alt="" /> <br />
            <h3>Commitment to work</h3>
            <h4>Commitment is our first priority, our team give their full dedication to their work and always be on time for their work.</h4>
        </div>
        <div className="choosingdata">
            <img src="/abouticon/customer.png" alt="" /> <br />
            <h3>Customer convenience</h3>
            <h4>Customer convenience is our first priority, we make sure every time customer are satisfied with our work. </h4>
        </div>
        <div className="choosingdata">
            <img src="/abouticon/friend.png" alt="" /> <br />
            <h3>Eco-friendly Products</h3>
            <h4>We make sure that chemicals being used while cleaning should be environment friendly. </h4>
        </div>
        <div className="choosingdata">
            <img src="/abouticon/price.png" alt="" /> <br />
            <h3>Reasonable Prices</h3>
            <h4> We offer most reasonable prices for different cleaning services as compared to the market also we can not compromise on the quality of our work</h4>
        </div>
        <div className="choosingdata">
            <img src="/abouticon/staff.png" alt="" /> <br />
            <h3>Professional & expert staff</h3>
            <h4>We have most experienced & professional staff for cleaning services and in our customer care team. </h4>
        </div>
        <div className="choosingdata">
            <img src="/abouticon/troble.png" alt="" /> <br />
            <h3>Trustable services</h3>
            <h4> We have 10 years plus experience in this field, we hire staff after complete verification .</h4>
        </div>
      </div>
    </div>
  )
}

export default About
