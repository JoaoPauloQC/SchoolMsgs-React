import { Navigate, useNavigate } from "react-router-dom"


export default function Msg({msg}){
    const navigate = useNavigate()
    
    function handlebutton (msg){
        navigate(`/viewmsg/${encodeURIComponent(msg.id)}`)
    }

    return(
    
        <div className="msgs__msg" key={msg.id} id={`msg ${msg.id}`}>
            <li value={msg.id}>{msg.name}</li>
            <button onClick={() => handlebutton(msg)} className="lightbluebtn">View Details</button>
         </div>
    )

}