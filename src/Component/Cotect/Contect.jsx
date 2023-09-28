import React, { useState } from 'react'
import './Contect.css'

function Contect(props) {
  const MakeResponsiveImagesFun = ()=>{
    if(props.showmanue === true)
    return{
     display:'none',
    }
  }
  const MakeResponsiveImages = MakeResponsiveImagesFun()
  return (
    <div>
        <div className="contect-container"style={MakeResponsiveImages} >
            <div className="contect-details">
                <aside><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.112118088938!2d74.26750957477051!3d31.521080447108453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919031cae328c1f%3A0x54044a41d402d79e!2sLiaqat%20Chowk%20Bus%20Stop!5e0!3m2!1sen!2s!4v1693286575364!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></aside>
            </div>
        </div>
    </div>
  )
}

export default Contect
