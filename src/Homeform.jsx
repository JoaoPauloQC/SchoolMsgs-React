import { useState } from "react";

export default function Homeform(props) {
    
    

    function handleform(event){
        event.preventDefault()
        console.log(props)
        const nome = document.getElementById('nome').value
        const prontuario = document.getElementById('prontuario').value
        console.log(nome)

        props.change(nome,prontuario)
        
    }

    return (

        <div className="form">
            <form onSubmit={(e) => handleform(e) }>
                <input type="text" id="nome" name="nome" placeholder="Nome" />
                <input type="text" id="prontuario" name="prontuario" placeholder="Prontuario" />

                <button type="submit">Enviar</button>

            </form>
        </div>

    )

}