import { useState } from 'react'
import Nav from './Nav.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewMsg from './NewMsg.jsx';
import Msgs from './Msgs.jsx';
import SeeDetail from './SeeDetail.jsx';
function App() {
  const [name,setName] = useState("Visitante")

  return (
    <Router>
     <Nav/> 
      <div className='content'>
        <h1>Olá {name}</h1>
      </div>
      
      <Routes>
        <Route path='/msgs' element={<Msgs />} />
        <Route path='/newmsg' element={<NewMsg />}/>
        <Route path='/viewmsg/:id' element={<SeeDetail />}/>
        {/*<Route path='/NewMsg' element={<NewMsg />}/>*/}
      </Routes>
      
    </Router>
  )
}

export default App
