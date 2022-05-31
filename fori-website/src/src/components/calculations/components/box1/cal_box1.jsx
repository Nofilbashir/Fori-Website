import React from 'react';

import "./cal_box1.css";

const Cal_box1 = () => {

  return (
    <div className="calculations_box1">
       <center>
        <h1 className="cal_box1_l_header">Impact of Electric Cars</h1>
        <p className="cla_box1_l_para">
        Burning single litre of petrol & diesel produces 2.3035
        Kg and 2.6391 Kg <CO/> respectively <a href="https://www.carbonindependent.org/files/conversion-factors.pdf"target="_blank" rel="noreferrer">[1]</a>  <a href="https://comcar.co.uk/emissions/co2litre/?fueltype=diesel#:~:text=Diesel%20produces%202.6391%20kgs%20of%20CO2%20per%20litre%20burnt"target="_blank"  rel="noreferrer">[2]</a> .
        Vehicle sharing is an innovative solution for this
        problem as “one shared vehicle removes up to 9
        private vehicles from the road” <a href="https://www.mdpi.com/2071-1050/13/13/7384/htm"target="_blank" rel="noreferrer">[3]</a>   and another study
        shows,
        “one shared vehicle takes up to 15 private
        vehicles from the road, eventually reduces fuel usage
        and traffic congestion” <a href="https://www.euractiv.com/section/future-of-mobility/opinion/does-car-sharing-really-reduce-car-use"target="_blank" rel="noreferrer">[4]</a>.
        </p>
        </center>
        </div>
   
  )
}
function CO (){
   return <span className='CO2'>CO<sub className='CO2'>2</sub></span>
}


export default Cal_box1;

