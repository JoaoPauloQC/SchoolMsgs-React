import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Msg from "./Msg";


export default function Msgs(){
    const [msgs,setmsgs] = useState([])
    
    

    useEffect(()=>{
        async function fetchMsgs(){
            try{
                const resposta = await fetch('http://localhost:8080/help')

                const msgsjson = await resposta.json()
                setmsgs(msgsjson)
            }
            catch(e){
                console.log(e.message)
            }
        }

        fetchMsgs()

    },[])

    return(
        <div className="msgs__container">
            <div className="wrapper">
                <ul>
                    {msgs.map( msg =>(
                        <Msg msg={msg}/>
                    ))}
                </ul>
            </div>
        </div>

    )



}