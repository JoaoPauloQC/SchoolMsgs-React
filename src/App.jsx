import { useState } from 'react'
import Nav from './Nav.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewMsg from './NewMsg.jsx';
import Msgs from './Msgs.jsx';
import SeeDetail from './SeeDetail.jsx';
import Homeform from './Homeform.jsx';
import schoolIcon from './assets/icons8-escola-48.png'
import Home from './Home.jsx';

function App() {
  

  return (
    <Router>
     <Nav/> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/msgs' element={<Msgs />} />
        <Route path='/newmsg' element={<NewMsg />}/>
        <Route path='/viewmsg/:id' element={<SeeDetail />}/>
        {/*<Route path='/NewMsg' element={<NewMsg />}/>*/}
      </Routes>
      
    </Router>
  )
}

export default App
