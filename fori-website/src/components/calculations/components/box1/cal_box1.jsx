import React from 'react';

import "./cal_box1.css";

const Cal_box1 = () => {

  return (
    <div className="calculations_box1">
       <center>
        <h1 className="cal_box1_l_header">Impact of Electric Cars</h1>
        <p className="cla_box1_l_para">
        Burning single litre of petrol & diesel produces  <a href="https://www.carbonindependent.org/files/conversion-factors.pdf"target="_blank" rel="noopener noreferrer">2.3035
        Kg <CO/></a> and <a href="https://comcar.co.uk/emissions/co2litre/?fueltype=diesel#:~:text=Diesel%20produces%202.6391%20kgs%20of%20CO2%20per%20litre%20burnt"target="_blank"  rel="noopener noreferrer">2.6391 Kg <CO/></a> respectively.
        Vehicle sharing is an innovative solution for this
        problem as <a href="https://www.mdpi.com/2071-1050/13/13/7384/htm"target="_blank" rel="noopener noreferrer">“one shared vehicle removes up to 9
        private vehicles from the road”</a>  and another study
        shows,
       <a href="https://www.euractiv.com/section/future-of-mobility/opinion/does-car-sharing-really-reduce-car-use"target="_blank" rel="noopener noreferrer">“one shared vehicle takes up to 15 private
        vehicles from the road, eventually reduces fuel usage
        and traffic congestion”</a>.
        </p>
        </center>
        </div>
   
  )
}
function CO (){
   return <span className='CO2'>CO<sub className='CO2'>2</sub></span>
}


export default Cal_box1;

