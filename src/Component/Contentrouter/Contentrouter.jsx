import React from 'react'
import Contect from '../Cotect/Contect'
import Comment from '../Comment/Comment'
import Fotter from '../Fotter/Fotter'

function Contentrouter(props) {
  const MakeResponsiveImagesFun = ()=>{
    if(props.showmanue === true)
    return{
     display:'none',
    }
  }
  const MakeResponsiveImages = MakeResponsiveImagesFun()
  return (
    <div  style={MakeResponsiveImages}>
      <Comment/>
      <Contect/>
      <Fotter/>
    </div>
  )
}

export default Contentrouter
