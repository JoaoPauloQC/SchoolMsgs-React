import Homeform from "./Homeform"
import schoolIcon from './assets/icons8-escola-48.png'
import { useState } from "react"
import App from "./App"
export default function Home(props){
    console.log(props)

    function change(n,p){
      props.changeuser(n,p)
    }
  

    return(
        <div className='content__container'>
              <div className='content wrapper'>
                <div className='content__left'>
                  <h1>Olá, {props.user.nome}</h1>
                  <div className='content__left__imgcontainer'><img src={schoolIcon}></img></div>
                </div>
              
                <Homeform name={props.user.nome} change={change}/>
              </div>
        </div>
    )
}