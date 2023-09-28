import React, { useState } from 'react'
import './Choosecar.css'
import CarfilterApi from './CarfilterApi'
import { Link } from 'react-router-dom'
function Choosecar(props) {
    const [print ,setprint] = useState(0)
    const [secondprint,setsecondprint] = useState(1)
    const [count,setcount] = useState(2)
    const slie = CarfilterApi.slice(0,count)
    const [data,setdata] = useState(slie)
    const Updatecars = (parmas)=>{
        const result = CarfilterApi.filter((i)=>{
            return parmas == i.catagory;
        })
        setdata(result)
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
        <div  >
        <div className="chosecar-heading" style={DarkModeHandler}>
            <h1 style={MakeResponsiveImages}>Choose your Car Type & Package</h1>
        </div>
        <div className="choose-container"style={DarkModeHandler}>
            <div className="chose-car"style={MakeResponsiveImages}>
                <img src="/carfilter/sedan.jpg" onClick={()=>Updatecars("sedan")} className='active'/>
                <h4>SEDAN/mini SUV</h4>
            </div>
            <div className="chose-car"style={MakeResponsiveImages}>
            <img src="/carfilter/luxurysedan.jpg" onClick={()=>Updatecars("luxurysedan")}  />
            <h4>LUXURY  SEDAN</h4>
            </div>
            <div className="chose-car"style={MakeResponsiveImages}>
            <img src="/carfilter/suv.jpg" onClick={()=>Updatecars("suv")}  />
            <h4> SUV</h4>
            </div>
            <div className="chose-car"style={MakeResponsiveImages}>
            <img src="/carfilter/hatchback.jpg" onClick={()=>Updatecars("hatchback")}  />
            <h4>HATCHBACK</h4>
            </div>
        </div>
        <div className="display-car-data" style={DarkModeHandler}>
            <div className="Nomal-pcj" style={MakeResponsiveImages}>
            {
                data.map((i,index)=>{
                    return index === print &&(
                        <div className="main-class">
                            <h2 id='name'>{i.package}</h2> <br />
                            <h3>{i.price}PKR</h3>
                           <h4>{i.data1} </h4>
                           <h4>{i.data2} </h4>
                           <h4>{i.data3} </h4>
                           <h4>{i.data4} </h4>
                           <h4>{i.data5} </h4>
                           <h4>{i.data6} </h4>
                           <h4>{i.data7} </h4>
                           <h4>{i.data8} </h4>
                           <h4>{i.data9} </h4>
                           <h4>{i.data10} </h4>
                           <h4>{i.data11} </h4>
                           <h4>{i.data12} </h4>
                           <Link to = '/order' ><button id='orderbtn' onClick={()=>props.OrderHandler(i.price,i.catagory)}  >BOOK Now</button></Link> <br /> <br />
                        </div>
                    )
                })
            } 
            <hr />
            <hr />
            <hr />
            <hr />
            </div>
            <div className="Golded-pck"style={MakeResponsiveImages}>
            {
                data.map((i,index)=>{
                    return index === secondprint &&(
                        <div className="main-class">
                            
                            <h2 id='name'>{i.package}</h2> <br />
                            <h3>{i.price}PKR</h3>
                           <h4>{i.data1} </h4>
                           <h4>{i.data2} </h4>
                           <h4>{i.data3} </h4>
                           <h4>{i.data4} </h4>
                           <h4>{i.data5} </h4>
                           <h4>{i.data6} </h4>
                           <h4>{i.data7} </h4>
                           <h4>{i.data8} </h4>
                           <h4>{i.data9} </h4>
                           <h4>{i.data10} </h4>
                           <h4>{i.data11} </h4>
                           <h4>{i.data12} </h4>  
                           <h4>{i.data13} </h4> 
                           <h4>{i.data14} </h4> 
                           <h4>{i.data15} </h4> 
                           <h4>{i.data16} </h4> 
                           <Link to='/order' ><button id='orderbtn' onClick={()=>props.OrderHandler(i.price,i.catagory)} >BOOK Now</button></Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Choosecar
