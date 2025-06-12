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
        <div className="msgs__container">
            <div className="wrapper">
                <ul>
                    {msgs.map( msg =>(
                        <div className="msgs__msg" key={msg.id} id={`msg ${msg.id}`}>
                            <li value={msg.id}>{msg.name}</li>
                            <button onClick={() => handlebutton(msg)} className="lightbluebtn">View Details</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>

    )



}