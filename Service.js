import React from 'react'
import Card from './Card';
function Service() {
  
  return (
    <>
    <div className="card">
    <h1 className="cardH1"> <b>Available</b> <span style={{ color: "yellow", textShadow: "7px 7px 7px black" }}><b>Choices</b></span></h1>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Card
            name=""
            src="https://www.shutterstock.com/image-photo/mississauga-ontario-canada-august-11-260nw-1477264244.jpg"
          />
        </div>
        <div className="col-sm-4">
          <Card
            name="TCS"
            src="https://www.shutterstock.com/image-photo/tata-consultancy-services-office-silicon-260nw-1821203750.jpg"
          />
        </div>
        <div className="col-sm-4">
          <Card
            name="Redix-Web"
            src="https://media.glassdoor.com/l/cc/3a/54/cf/radixweb-s-new-office-ekyarth.jpg"
          />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Card
            name="Tatva-Soft"
            src="https://media.glassdoor.com/l/65/66/57/39/entrance.jpg"

          />
        </div>
        <div className="col-sm-4">
          <Card
            name="ODOO"
            src="data:image/png;base64,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"
          />
        </div>
        <div className="col-sm-4">
          <Card
            name="Trootech"
            src="https://www.trootech.com/backend/uploads/about_us_2_6b206b09f3.jpg"
          />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Card
            name="Seffier Software"
            src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/e9cea-it-companies-in-vizag.jpg?fit=4800%2C3203&ssl=1"

          />
        </div>
        <div className="col-sm-4">
          <Card
            name="Make visions"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYJKV1YDRlSoO0W5m9wSeppevjtPTd1s9YA&usqp=CAU"
          />
        </div>
        <div className="col-sm-4">
          <Card
            name="Trootech"
            src="https://www.trootech.com/backend/uploads/about_us_2_6b206b09f3.jpg"
          />
        </div>
      </div>
    </div>
  </div>
  </>

    );
}

export default Service;