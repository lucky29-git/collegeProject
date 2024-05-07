import React from 'react';
import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'


export default function Dashboard() {
  return (
    <div>
      <div className="container ">
        <Navbar />
        <MainPage />
      </div>
    </div>
  );
}
