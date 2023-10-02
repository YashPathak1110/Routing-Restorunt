import React from 'react'
function Cards(props) {

    return (
        <>
        <div style={{border:"2px solid black",width:"280px", height: "290px",marginTop: "20%", boxShadow: "10px 15px 15px black"}} className="card2"> 
        <h1>{props.name}</h1>
        <img src={props.src} height={200} width={200}/> 

    </div>
    </>
        )
}

export default Cards;