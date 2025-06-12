import { useState } from "react";

export default function Homeform(props) {
    

    function handleform(event){
        event.preventDefault()
        console.log(props)
        const nome = document.getElementById('nome').value
        console.log(nome)

        props.new(nome)
        
    }

    return (

        <div className="form">
            <form onSubmit={(e) => handleform(e) }>
                <input type="text" id="nome" name="nome" placeholder="Nome" />

                <button type="submit">Enviar</button>

            </form>
        </div>

    )

}