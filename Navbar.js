import React from 'react'
import img from "../sandwich.png";
function Navbar() {
  return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light nav">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <div>
      <img src={img} width={85} height={80} ></img>
      </div>
    
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{color: "white", marginLeft: 75, marginTop: "9%", fontSize: "23px", fontFamily: "Fixedsys"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About" style={{color: "white", marginLeft: 45,marginTop: "9%", fontSize: "23px", fontFamily: "Fixedsys"}}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/Service" style={{color: "white", marginLeft: 45,marginTop: "9%", fontSize: "23px", fontFamily: "Fixedsys"}}>Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/" style={{color: "white", marginLeft: 45, fontSize: "23px",marginTop: "10.5%", fontFamily: "Fixedsys"}}>Menu</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white", marginLeft: 45,marginTop: "9%", fontSize: "23px", fontFamily: "Fixedsys"}}>
            Pages
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Booking</a></li>
            <li><a className="dropdown-item" href="#">Our Team</a></li>
            <li><a className="dropdown-item" href="#">Testimonial</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{color: "white", marginLeft: 45, marginTop: "9.5%",fontSize: "23px", fontFamily: "Fixedsys"}}>Contact</a>
        </li>
       </ul>
       <button type="button" class="btn btn-dark" style={{marginRight: "5%", width: "150px", height: "50px",fontSize: "22px", fontFamily: "System",boxShadow: "5px 5px 5px white"}}><b>Learn More</b></button>

      </div>
  </div>
</nav>
        </>
  )
}

export default Navbar