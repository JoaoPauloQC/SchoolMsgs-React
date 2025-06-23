import Homeform from "./Homeform"
import Ai from "./AI"
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
                 
                </div>
              
                <Homeform name={props.user.nome} change={change}/>
              </div>
              <Ai ai_active={props.ai_active} aifetched={props.aifetched} user={props.user} setaifetched={props.setaifetched} />
        </div>
    )
}