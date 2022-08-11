import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Users from './pages/Users/Users'
import UserDetalis from "./pages/UserDetalis/UserDetalis"

const App = () => {
  return (
     <BrowserRouter>
        <Routes>
           <Route path='/' element={ <Users/>} />
           <Route path='/detalis/:id' element={ <UserDetalis/>} />
        </Routes>
        
     </BrowserRouter>
  )
}

export default App