import React, { useContext } from 'react';
import { useState } from 'react';
import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'
import HeroSection from '../components/HeroSection';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import RenderPaper from '../components/Render';
export default function Dashboard() {
  const [ papers, setPapers] = useState([])
  // const obj = useContext(PaperContext)
  return (
    <div>
      <div className="container ">
        <Navbar />
        {/* <MainPage /> */}
        <HeroSection/>
        {/* {papers.map(function(papers){
          return <RenderPaper title={title} files={files} />
        })} */}
        <RenderPaper />
      </div>
    </div>
  );
}
