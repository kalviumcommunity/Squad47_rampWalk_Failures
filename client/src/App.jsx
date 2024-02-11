import React from 'react'
import './App.css'
import Home from './components/Home'
import Create from './components/Create.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
