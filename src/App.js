import React from "react";
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
// import About from './component/About/About';
import Project from './component/Project/Project';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home />}></Route>
        {/* <Route exact path="/about" element={<About/>}></Route> */}
        <Route exact path="/project" element={<Project/>}></Route>
        <Route exact path="/blog" element={<Blog/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;