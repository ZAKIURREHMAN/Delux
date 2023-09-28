import React from 'react'
import './Moto.css'
function Moto(props) {
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
    <div style={MakeResponsiveImages}>
      <div className="moto-container" style={DarkModeHandler}>
        <div className="moto-heading"> <br />
        <h2>"Embrace the Elegance of Neatness - Our Moto is 'Keep Your Space Clean'"</h2>
        </div>
        <div className="moto-details">
At the heart of our values lies a steadfast dedication to delivering unparalleled service to our esteemed clients. With a team of adept and seasoned professionals, we take pride in transforming your living and working spaces into pristine havens. Our mission is underscored by an unwavering promise to offer a trustworthy platform and affordable rates for our comprehensive cleaning solutions.

From restoring the vibrancy of your carpets, floors, <br />and walls to a level of radiance that astounds, to initiating a holistic cleanup of your upholstery and furnishings through our meticulous deep-cleaning procedures, we leave no corner untouched. Our repertoire extends even further with our all-encompassing window washing services that ensure clarity shines through, along with our car care expertise that ranges from general maintenance to intricate detailing. <br />

In our pursuit of excellence, we harness the power of cutting-edge tools and innovative products, optimizing our time with you for utmost efficiency and efficacy. <br />

Recognizing our responsibility towards the environment, we prioritize the use of eco-friendly products whenever feasible. This guarantees that your space will be devoid of any lingering harmful substances post-cleanup, aligning with our commitment to sustainability.

The result? A distinguished standing as a paragon of cleaning prowess within the industry. The accolades we've garnered over time are a testament to our genuine dedication to delivering unparalleled quality. Experience the transformation firsthand, as we transcend the ordinary and set new benchmarks for exceptional cleanliness."
        </div>
      </div>
      <div className="icon-container"style={DarkModeHandler}>
        <div className="caricon">
        <img src="/icons/car.png"/> <br />
        <span>Car Services</span>
        </div>
        <div className="carpiticons">
        <img src="/icons/carpit.jpg"  /> <br />
        <span>Curtain Washing </span>
        </div>
        <div className="cartenicont">
        <img src="/icons/curten.jpg"/><br />
        <span>Carpet Cleaning  </span>
        </div>
        <div className="tenki">
        <img src="/icons/denki.png"/><br />
        <span>Water Tank Washing </span>
        </div>
        <div className="house">
        <img src="/icons/house.png"/><br />
        <span> House Cleaning </span>
        </div>
        <div className="sofa">
        <img src="/icons/sofa.png"/><br />
        <span>Sofa Washing  </span>
        </div>
      </div>
    </div>
  )
}

export default Moto
