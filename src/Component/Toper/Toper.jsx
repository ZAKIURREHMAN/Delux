import React from 'react'
import './Toper.css'
function Toper(props) {
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
            <div className="Topper-container" style={DarkModeHandler}>
                <div className="social-icons" style={DarkModeHandler}>
                    <a href="https://www.facebook.com/DeluxeCleaningServicesofficial?mibextid=D4KYlr" ><i class="fa-brands fa-facebook" style={DarkModeHandler}></i></a>
                    <a href="https://wa.me/+92309 9998533"><i class="fa-brands fa-whatsapp" style={DarkModeHandler}></i></a>
                    <a href="https://twitter.com/ZakiBashir2559?t=9LducxTgFKbNa--J-C868g&s=09"><i class="fa-brands fa-x-twitter" style={DarkModeHandler}></i></a>
                <a href="https://instagram.com/sdeluxecleaning?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" ><i class="fa-brands fa-square-instagram" style={DarkModeHandler}></i></a>
                <a href="https://www.youtube.com/@Deluxecardetailing223"><i class="fa-brands fa-youtube" style={DarkModeHandler}></i></a>
                </div>
                <div className="topper-hors" style={DarkModeHandler}>
                <i class="fa-solid fa-phone-volume" ></i>
                    <span>+92309 9998533</span> &nbsp; &nbsp;
                <i class="fa-solid fa-hourglass-start"></i>
                <span> Hours 24/7</span>
                </div>
            </div>
        </div>
    )
}

export default Toper
