import { useState } from 'react'
import Nav from './Nav.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewMsg from './NewMsg.jsx';
import Msgs from './Msgs.jsx';
import SeeDetail from './SeeDetail.jsx';
import Homeform from './Homeform.jsx';
import schoolIcon from './assets/icons8-escola-48.png'
import Home from './Home.jsx';
import { useParams } from 'react-router-dom';
import Ai from './AI.jsx';
function App() {
  const [logged , setlogged] = useState(false)
  const [user, setUser] = useState({"nome":"Visitante", "prontuario": "0"}) 
  const [ai_active, setAI_active] = useState(false)
  const[aifetched,setaifetched] = useState(false)
 
  function reset(){
    console.log("reset")
    setAI_active(false)
    console.log("active:" + ai_active)
    setaifetched(false)
  }

  function changeuser(usernome,userprontuario){
    async function login() {
            const userdata = {"nome": usernome, "prontuario": userprontuario}
            console.log(userdata)
            try{
                const resposta = await fetch('http://localhost:8080/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(userdata)
                    
                })

                if(resposta.ok) {
                    alert('Logado')
                    setUser(userdata)
                    setlogged(true)
                }
                else{
                    alert('Algo aconteceu')
                }

            }   catch(e){
                console.error("Erro:", e)
                alert("Algum erro ocorreu")
                setAI_active(true)
                setaifetched(true)
                console.log(JSON.stringify(userdata))
            } 

        }
        login()
    
    
  }


  return (
    <Router>
     <Nav reset={reset}/> 
      <Routes>
        <Route path='/' element={<Home user={user} aifetched={aifetched} setAI_active = {setAI_active} setaifetched={setaifetched} ai_active={ai_active} changeuser={changeuser} />}/>
        <Route path='/msgs' element={<Msgs />} />
        <Route path='/newmsg' element={<NewMsg user={user} />}/>
        <Route path='/viewmsg/:id' element={<SeeDetail />}/>
        
        {/*<Route path='/NewMsg' element={<NewMsg />}/>*/}
      </Routes>
      
    </Router>
  )
}

export default App
