import React, { useState } from 'react'
import './Carimages.css'
import CarimagesApi from './CarimagesApi'
function Carimages(props) {
    // const arraylenght = CarimagesApi.length-1;
    const [imagesfinder,setimagsefinder] = useState(CarimagesApi)
    const [loader,setloader] = useState(3)
    const loaderes = imagesfinder.slice(0,loader)
    const Catagoryimages = (parmes)=>{
        const result = CarimagesApi.filter((idata)=>{
            return idata.catagory===parmes 
        })
        setimagsefinder(result)
    }
    const Moreimages = ()=>{
        setloader(loader+3)
    }
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
        <div className="carimagesheading" style={DarkModeHandler}>
        <h1>Our Works</h1>
        </div>
        <div className="mainimagsecontainer" style={DarkModeHandler}>
                <button  onClick={()=>setimagsefinder(CarimagesApi)} >ALL </button>
                <button onClick={()=>Catagoryimages('autodetailing')}>Auto Detailing</button>
                <button   onClick={()=>Catagoryimages('bikewash')}>Bike Detail</button>
                <button   onClick={()=>Catagoryimages('black')}>Black Beauties</button>
                <button   onClick={()=>Catagoryimages('ceramic')}>Ceramic Coating </button>
                <button   onClick={()=>Catagoryimages('carlight')}>Light Fusion</button>
                <button   onClick={()=>Catagoryimages('waxe')}>Waxes Sealants</button>
        </div>
        <div className="all-images"style={DarkModeHandler}>
        {
    loaderes.map((i)=>{
        return( 
            <div className="main-claessa">
                <img src={i.url} alt="" />
            </div>
        )
    })
}
        </div>
        <div className="catagorybtn">
        <button onClick={Moreimages}>More Images</button>
        </div>
    </div >
  )
}

export default Carimages