// React Import
import React from 'react'
// Router Import
import { Routes,Route } from 'react-router-dom'
// Pages Import

import Home from './pages/Home'
import Profil from './pages/Profil'
import About from './pages/About'
import Page404 from './pages/404'
import Post from './pages/Post'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'

//Component Import
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AddPostAdmin from './pages/AddPostAdmin'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profil' element={<Profil/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/addpost' element={<AddPostAdmin/>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App