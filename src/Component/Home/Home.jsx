import React from 'react'
import Frondimg from '../Frondimg/Frondimg'
import Choosecar from '../Chose/Choosecar'
import Fotter from '../Fotter/Fotter'
import Services from '../Services/Services'
import Contect from '../Cotect/Contect'
import Comment from '../Comment/Comment'

function Home(props) {
  return (
    <div>
      <Frondimg showmanue = {props.showmanue} />
      <Services mode = {props.mode}   showmanue = {props.showmanue} />
      <Choosecar OrderHandler = {props.OrderHandler} mode = {props.mode} showmanue = {props.showmanue}  />
      <Comment showmanue = {props.showmanue}  />
      <Contect showmanue = {props.showmanue}/>
      <Fotter mode = {props.mode} showmanue = {props.showmanue} />
    </div>
  )
}

export default Home
