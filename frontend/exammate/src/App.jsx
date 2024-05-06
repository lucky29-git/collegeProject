import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

function App() {

  return (
    <div className='container'>
      <Navbar />
      <MainPage />
    </div>
  )
}

export default App
