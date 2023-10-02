import React from 'react'
import img from "../foodisepark.jpeg";
import img1 from "../foodies.jpg";
function About() {
  return (
    <>
  
    <div className="about">
    <h1 style={{ textAlign: "center", color: "yellow", fontFamily: "Fixedsys", fontSize: "60px", textShadow: "3px 4px 4px white" }}> <span style={{ color: "black",fontSize: "75px" }}><b>A</b></span>bout </h1>
    <div className="container-fluide">
      <div className="row">
        <div className="col-sm-6">
        <img src={img} className='img3'></img>
        </div>
        <div className="col-sm-6">

          <h2 className="h2">Foodies Park is very Fentastic <br></br> Food zone for Bhavnagar Public...</h2>
          <p style={{ color: "white" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg><span style={{ marginLeft: "3%" }}>Foodies Park is Devloped in very Large Part.</span></p>

          <p style={{ color: "white" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg><span style={{ marginLeft: "3%" }}>In Our Foodies Park very different verity Available in Food Zonel.</span></p>

          <p style={{ color: "white" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg><span style={{ marginLeft: "3%" }}>Bhavnagar foodies park are very wonderfull place for couple also. <br></br>In foodies park delicius food store are in working flow. So many people <br/>are attrect to foodies park.. </span></p>

          <p style={{ color: "white", marginTop: "5%", fontSize: "20px" }}>This site for specially SandWichWala , beacouse his food and delicious SandWich very wonderfull, not costly and Really very better service are provide from SandWichWala.</p>
          <img src={img1} style={{ width: "550px", height: "230px", marginLeft: "3%", marginTop: "7%", boxShadow: "6px 7px 7px white" }} className='foodies'></img>
        </div>
      </div>
    </div>
  </div>
  </>
    )
}

export default About