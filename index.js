import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Componant/Home";
import About from "./Componant/About";
import Service from "./Componant/Service";
import Contact from "./Componant/Contact";
import "./index.css";
ReactDOM.render(
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);
