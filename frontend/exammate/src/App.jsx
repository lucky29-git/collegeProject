import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Dashboard from './pages/Dashboard.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='dashboard' element = {<Suspense fallback={"Loading..."} ><Dashboard/></Suspense>} />
      <Route path='signin' element = {<Suspense fallback={"Loading..."} ><Signin/></Suspense>} />
      <Route path='signup' element = {<Suspense fallback={"Loading..."} ><Signup/></Suspense>} />
    </Routes>
    </BrowserRouter>

    
  )
}

export default App
