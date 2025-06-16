import { GoogleGenAI } from "@google/genai";
import { useEffect } from "react";
import { useState } from "react";

const ai = new GoogleGenAI({ apiKey: "AIzaSyARvRcP6bNEWli5YRZLNKPXb-OagJsqEbU" });
    
export default function Ai(props){
    
    const[text,setText] = useState('')

    const ai_active = props.ai_active 
    console.log("Ativo? " + ai_active)
    
    useEffect(() => {
    if (ai_active && props.aifetched){

        async function main() {
            
            props.setaifetched(false)
            console.log("Fetch " + props.aifetched)
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: `Não consigo logar`,
                config: {
                    systemInstruction: "Você esta dentro de um site que possui dois inputs , nome e prontuário, ajude as pessoas que não estão conseguindo logar sabendo que: o nome deve estar no sistema para efetuar o login, o prontuário deve conter 'sp' terá 9 caracteres, não faça perguntas, e não utilize *" 
                }
                
            });
            
            console.log(response.text);
            console.log("Fetch " + props.aifetched) 
            setText(response.text)
            
            }
            
        
        main();
    }
    },[ props.aifetched])

    return(

        <div className={`Ai ${props.ai_active? "active" : "inactive"} wrapper`}>
            <div className="Ai__box">
                <div className="Ai__text">
                    <p>{text}</p>
                </div>
                <div className="Ai__box__logo">
                    Powered by GEMINI
                </div>

            </div>
        
        
        
        
        </div>


    )
}