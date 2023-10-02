import React from 'react'
import img from "./sandwich.png.png";
import img1 from "../logosandwich.jpeg";
function Container() {
  return (
    <>
    <div className="div1">
        <div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
          <img src={img} width={550} height={500} style={{marginTop: "20%",marginLeft: "8%"}} className='img'></img>
            </div>
          <div className='col-sm-6'>
            <h1 className='h1'>..<span style={{color: "yellow", fontSize: "90px", fontFamily: "MV Boli"}}>S</span>and<span style={{color: "red", fontFamily: "MV Boli"}}>W</span>ich<span style={{color: "yellow", fontSize: "80px", fontFamily: "MV Boli"}}>W</span>ala..</h1>
            <img src={img1} width={310} height={300} style={{marginLeft: "30%", marginTop: "2%",borderRadius: "300px"}} className='img2'></img>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Container