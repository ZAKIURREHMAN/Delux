import React from 'react'
import './Fotter.css'
function Fotter(props) {
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
        <div className="Fotter-heading" style={DarkModeHandler}>
           <h1> Content Us</h1>
        </div>
        <div className="fotter-container"style={DarkModeHandler}>
            <div className="link-social" >
                <p>We are best cleaning services provider in Lahore having more than 10 years+ experience in this field. We offer carpet cleaning, curtain cleaning, sofa washing, deep cleaning, car general and detailing services in most reasonable prices.You can content this  <h5 style={DarkModeHandler}>E-mail:: deluxecleaningservices48@gmail.com</h5></p>
            
            </div>
            <div className="numbers">
            <a href="https://www.facebook.com/DeluxeCleaningServicesofficial?mibextid=D4KYlr"><i class="fa-brands fa-facebook" style={DarkModeHandler}></i></a>
                    <a href="https://wa.me/+92309 9998533"><i class="fa-brands fa-whatsapp" style={DarkModeHandler}></i></a>
                    <a href="https://twitter.com/ZakiBashir2559?t=9LducxTgFKbNa--J-C868g&s=09"><i class="fa-brands fa-x-twitter" style={DarkModeHandler}></i></a>
                <a href="https://instagram.com/sdeluxecleaning?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"> <i class="fa-brands fa-square-instagram" style={DarkModeHandler}></i></a>
                <a href="https://www.youtube.com/@Deluxecardetailing223"><i class="fa-brands fa-youtube" style={DarkModeHandler}></i></a>
            </div>

        </div>
        <div className="developer">
            <h4>Developed by <i class="fa-solid fa-heart"></i> Zaki Ur Rehman:  Content 03037055259</h4>
        </div>
    </div>
  )
}

export default Fotter
