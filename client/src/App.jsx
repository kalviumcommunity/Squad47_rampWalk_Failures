import React from 'react'
import './App.css'
import Home from './components/Home'
import Create from './components/Create.jsx'
import Update from './components/Update.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
