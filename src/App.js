import React from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home'
import About from './component/About'
import Education from './component/Education'
import Project from './component/Project'
import Contact from './component/Contact'
import './App.css';
import './App1.css';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App;
