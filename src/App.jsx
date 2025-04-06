import React from 'react'
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import Search from '@/pages/search/index'
import Auth from '@/pages/auth/index'
import Signup from '@/pages/signup/index'

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/search/*" element={<Search />} />
     <Route path="/auth" element={<Auth />} />
     <Route path="/signup" element={<Signup />} />
     
   </Routes>
   </BrowserRouter>
  )
}

export default App
