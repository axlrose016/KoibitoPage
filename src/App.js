import React from 'react';
import './App.css';
import NavBarIndex from './components/Navbar/NavBarIndex';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import HomeIndex from './components/Home/HomeIndex';
import ProjectIndex from './components/Projects/ProjectIndex';

function App() {
  return ( 
    <Router>
      <NavBarIndex/>
      <Routes>
        <Route path="/" exact element={<HomeIndex/>}></Route>
        <Route path="projects" exact element={<ProjectIndex/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
