import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import About from './Pages/About/About'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App