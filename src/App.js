import React from 'react';
import './App.css';
import Homepage from './Components/homepage';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from 'react-mdl';
export default class App extends React.Component
{
  render(){
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element = {<Homepage/>}/>
          <Route path='/skills' element = {<Skills/>}/>
          <Route path='/projects' element = {<Projects/>}/>
          <Route path='/contactme' element = {<ContactMe/>}/>
        </Routes>  
      </Router>
    )
  }
}