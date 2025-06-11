import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Msgs(){
    const [msgs,setmsgs] = useState([])
    const navigate = useNavigate()
    function handlebutton (msg){
        navigate(`/viewmsg/${encodeURIComponent(msg.id)}`)
    }

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
        <div>
        <ul>
            {msgs.map( msg =>(
                <div className="msg" key={msg.id} id={`msg ${msg.id}`}>
                    <li value={msg.id}>{msg.name}</li>
                    <button onClick={() => handlebutton(msg)}>View Details</button>
                </div>
            ))}
        </ul>
        </div>

    )



}