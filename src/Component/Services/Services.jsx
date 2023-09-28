import React from 'react'
import './Services.css'
function Services(props) {
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
    <div>
      <div className="services-container" style={DarkModeHandler}>
        <div className="imgplustext" style={MakeResponsiveImages}>
            <img src="/services/commercial.jpg" alt="" /> <br />
            <h3> Commercial Services </h3>
            <h5>Commercial Cleaning Services include office cleaning, building cleaning, pool cleaning, instrument cleaning </h5>
        </div>
        <div className="imgplustext"style={MakeResponsiveImages}>
            <img src="/services/appertment.webp" alt="" />
            <h3>Apartment Cleaning</h3>
            <h5>Book your appointment for apartment cleaning including floor cleaning, terrace cleaning, windows cleaning.</h5>
        </div>
        <div className="imgplustext"style={MakeResponsiveImages}>
            <img src="/services/Homeservices.jpg" alt="" />
            <br/>
            <h3> Home Services </h3>
            <h5>Home cleaning, window washing, curtain washing, kitchen washing, mattress cleaning, floor cleaning, carpet cleaning.</h5>
        </div>
        <div className="imgplustext"style={MakeResponsiveImages}>
            <img src="/services/office.jpg" alt="" /><br/>
            <h3> Office Servicess </h3>
            <h5>We provide deep office cleaning services, floor cleaning, furniture cleaning, front washing, parking cleaning.</h5>
        </div>
        <div className="imgplustext"style={MakeResponsiveImages}>
            <img src="/services/special.jpg" alt="" /><br/>
            <h3> Special Service </h3>
            <h5>Our special services include car general and detailing services, fumigation services, water tank washing, sofa washing.</h5>
        </div>
        <div className="imgplustext" style={MakeResponsiveImages}>
            <img src="/services/carwash.jpg" alt="" /><br/>
            <h3> Car Wash at Your Loction </h3>
            <h5> exterior cleaning, interior vacuuming, window cleaning, tire shine. Our expert team restores your vehicle's sparkle, leaving it spotless and refreshed. Experience the ultimate car care today."</h5>
        </div>
      </div>
      <div className="processingheading"style={MakeResponsiveImages}>
        <h1>Our Cleaning Process</h1>
      </div>


      <div className="cleaning-process"style={DarkModeHandler}>
        <div className="proces-icons">
        <i class="fa-solid fa-phone" style={MakeResponsiveImages}></i>
        <h3 style={MakeResponsiveImages} >Give us a Call</h3>
        <h4 style={MakeResponsiveImages} >Call us for booking by choosing service and provide your location and schedule time for cleaning. </h4>
        </div>
        <div className="proces-icons"style={MakeResponsiveImages}>
        <i class="fa-regular fa-calendar-days"></i>
        <h3>Schedule it</h3>
        <h4> Schedule a time with us for cleaning as per your convenience.</h4>
        </div>
        <div className="proces-icons"style={MakeResponsiveImages}>
        <i class="fa-solid fa-broom"></i>
        <h3>The Cleaning</h3>
        <h4> Our team will reach at your provided location on schedule time for cleaning.</h4>
        </div>
        <div className="proces-icons"style={MakeResponsiveImages}>
        <i class="fa-solid fa-comments-dollar"></i>
        <h3>Easy Payment</h3>
        <h4>You can pay after your work will finish, by hand or through online transaction. </h4>
        </div>
      </div>
    </div>
  )
}

export default Services
