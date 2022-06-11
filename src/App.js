import React from 'react';
import { useEffect ,useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import GuideItem from './components/GuideItem';
import GuideView from './components/GuideView';
import Home from './components/home';
import './App.css';

function App() {
 return (
    <div className='App'>
      <head>
        <link rel="stylesheet" href="./components/style.css" />
        <title>DIY Tutorial App</title>
      </head>
      <header className='App-header'>
        <Navbar className='navbar' />
      </header>
      <br/>
      <div>
        {/*
        <Router>
          <Route path='/' element={<Home />} />
          <Route path='/CreateGuide' element={<CreateGuide />} />
          <Route path='/VeiwGuide' element={<VeiwGuide />} />
          <Route path='/EditGuide' element={<EditGuide />} />
        </Router>
 */}
      </div>
    </div>
  );
}

export default App;
