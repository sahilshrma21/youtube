import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Watch from './pages/Watch'

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/Search' element ={<Search/>} />
      <Route path='/Watch/:id' element={<Watch />} />
      </Routes>
      </BrowserRouter>
      
      
  )
}

export default App
