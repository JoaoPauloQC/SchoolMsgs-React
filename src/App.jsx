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
function App() {
  const [logged , setlogged] = useState(false)
  const [user, setUser] = useState({"nome":"Visitante", "prontuario": "0"}) 
  
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
                console.log(JSON.stringify(userdata))
            } 

        }
        login()
    
    
  }


  return (
    <Router>
     <Nav/> 
      <Routes>
        <Route path='/' element={<Home user={user} changeuser={changeuser} />}/>
        <Route path='/msgs' element={<Msgs />} />
        <Route path='/newmsg' element={<NewMsg user={user} />}/>
        <Route path='/viewmsg/:id' element={<SeeDetail />}/>
        {/*<Route path='/NewMsg' element={<NewMsg />}/>*/}
      </Routes>
      
    </Router>
  )
}

export default App
