import { useState , useEffect, useRef } from "react"
import { useLocation, useParams } from "react-router-dom"

export default function SeeDetail(){
    
    const [msg_,setmsg_] = useState({})
    let wasfetched = useRef(false)
    const { id } = useParams()
    const iddecoded = decodeURI(id)
    console.log(iddecoded)
    useEffect(()=>{
            async function fetchMsgs(){
                try{
                    const resposta = await fetch('http://localhost:8080/help')
    
                    const msgsjson = await resposta.json()
                    console.log(msgsjson[0].id)
                    msgsjson.map(msg => {
                        console.log(msg.id)
                        if(msg.id == iddecoded){

                            setmsg_(msg)
                            
                        }
                        
                        
                    })
                    

                    
                }
                catch(e){
                    console.log(e.message)
                }
                console.log(wasfetched.current)
                if(!wasfetched.current){
                    if(!msg_.id){
                        alert('encontrei')
                    }
                    wasfetched.current = true
                }
            }
    
            fetchMsgs()
    
        },[])

    return (
        <div className="details wrapper">
            <div className="details__container">
                <div className="details__card">
                    <div className="details__text">
                        <p>{msg_.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}