import Homeform from "./Homeform"
import schoolIcon from './assets/icons8-escola-48.png'
import { useState } from "react"

export default function Home(){
    const [name,setName] = useState("Visitante")

    function newName(newname){
    setName(newname)
  }

    return(
        <div className='content__container'>
              <div className='content wrapper'>
                <div className='content__left'>
                  <h1>Olá, {name}</h1>
                  <div className='content__left__imgcontainer'><img src={schoolIcon}></img></div>
                </div>
              
                <Homeform name={name} new={newName}/>
              </div>
        </div>
    )
}