import React, { useEffect, useState } from 'react'
import './Frondimg.css'
import ImagesApi from './ImagesApi'
import 'animate.css';
function Frondimg(props) {
  const [slider,setslider] = useState(0)
  const Lengtharry = ImagesApi.length-1;
  const Previousbutton = ()=>{
    setslider(slider === 0?Lengtharry:slider-1)
  }
  const Nextbutton = ()=>{
    slider === Lengtharry?setslider(0):setslider(slider+1)
  }
  useEffect(()=>{
    const sliderrunder = setInterval(() => {
      Nextbutton()
    }, 12000);
    return()=>{
      clearInterval(sliderrunder)
    }
  })
  const MakeResponsiveImagesFun = ()=>{
    if(props.showmanue === true)
    return{
     display:'none',
    }
  }
  const MakeResponsiveImages = MakeResponsiveImagesFun()
  return (
    <div>
        <div className="Frondimg-container" >
            <div className="Left-button">
            <i class="fa-regular fa-circle-left " onClick={Previousbutton}></i>
            </div>
            <div className="center-images" style={MakeResponsiveImages} >
              {
                ImagesApi.map((img,index)=>{
                  return index === slider &&(
                    <div className="main-print">
                      <img className="animate__animated animate__flip" src={img.url} alt="" />
                    </div>
                  )
                })
              }
            </div>
            <div className="right-button" style={MakeResponsiveImages}>
            <i class="fa-regular fa-circle-right" onClick={Nextbutton}></i>
            </div>
        </div>
        <div className="headingcontainer" style={MakeResponsiveImages}>
          <h2>Expert Professional Cleaning Services:</h2>
          <div className="details">
            <p>Delivering a comprehensive range of cleaning solutions to your doorstep in Lahore. Our proficient team, boasting over a decade of hands-on experience, ensures top-notch service quality.</p>
          </div>
          <div className="callbtn">
          <a href="tel:+923099998533"><button  id='btn'>Call Now</button></a>
          </div>
        </div>
    </div>
  )
}

export default Frondimg
