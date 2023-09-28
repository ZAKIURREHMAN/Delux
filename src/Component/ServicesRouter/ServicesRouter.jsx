import React from 'react'
import About from '../About/About'
import Moto from '../Moto/Moto'
import Carimages from '../Carbeforeafter/Carimages'
import Contect from '../Cotect/Contect'

function ServicesRouter(props) {
  return (
    <div>
      <Moto mode = {props.mode} showmanue = {props.showmanue}/>
      <Carimages  mode = {props.mode} showmanue = {props.showmanue}/>
      <About  mode = {props.mode} showmanue = {props.showmanue}/>
      <Contect/>
    </div>
  )
}

export default ServicesRouter
