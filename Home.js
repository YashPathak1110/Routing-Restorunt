import React from 'react'
import Navbar from './Navbar';
import About from './About';
import Container from './Container';
import Service from './Service';
import Contact from './Contact';
function Home() {
  return (
    <>
  
      <Navbar/>
      <Container/>
      <About/>
      <Service/>
      <Contact/>
    </>
  )
}

export default Home