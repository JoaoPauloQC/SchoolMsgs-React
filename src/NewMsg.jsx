import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function NewMsg(props){
    
    const [name,setname] = useState()
    const navigate = useNavigate()

    const data = {"name": name, "prontuario": props.user.prontuario}

    function handlesubmit(event){
        event.preventDefault()

        async function createMsg() {
            try{
                const resposta = await fetch('http://localhost:8080/help', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(data)

                })

                if(resposta.ok) {
                    alert('Enviamos sua mensagem')
                }
                else{
                    alert('Algo aconteceu')
                }

            }   catch(e){
                console.error("Erro:", e)
                alert("Algum erro ocorreu")
            } 
        }

        createMsg()

        
    }
    
    return (
    <div className="formcontainer wrapper">
        <div className="formnew">
            <form action="" onSubmit={handlesubmit}>

                <div className="formnew__text"><p>New msg</p><div className="plusicon">+</div></div>
                <input type="text" onChange={(e) => (setname(e.target.value))} value={name} name="input" />
                <button type="submit" onClick={handlesubmit}>send</button>
            </form>
        </div>


    </div>

    )
}