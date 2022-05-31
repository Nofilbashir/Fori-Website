import React from 'react';
import "./cal_box3.css";
import Linegraph from '../linechart/linegraph';
import Piechart from '../piechart/piechart';
// import {data}from "../piechart/piechart.jsx";


function Cal_box3() {
  const dataline = [
    {name: 'Year 1',Carbon_Emissions_Saved: 0.0292},
    {name: 'Year 2',Carbon_Emissions_Saved: 0.1501}, 
    {name: 'Year 3',Carbon_Emissions_Saved: 0.5209},
    {name: 'Year 4',Carbon_Emissions_Saved: 1.6092},
    {name: 'Year 5',Carbon_Emissions_Saved: 4.7916}
  ];
  const data = [
    { name: `Passenger Cars contribution %`, value: 41,color:"#e12121"},
    { name: "Comercial Cars contribution %", value:12,color:"#ee5543"},
    { name: 'Trucks and Heavy vehicles contribution %', value: 25,color:"#f87b66"},
    { name: 'Aviation contribution %', value: 8,color:"#ff9d8a"},
    { name: 'Shipping & Rail contribution %', value: 14,color:"#ffbeb0"},
    
  ];

  return (
   <div className="cal_b3">
    <div className="b3_b1">
      <div className="b3_b1_imgs">
        <img src={require("../box2/images/dieselpercentage.png")} alt="img"/>
        <img src={require("../box2/images/petrolpercentage.png")} alt="img"/>
        <img src={require("../box2/images/hybridpercentage.png")} alt="img"/>
      </div>
      <div className="b3_b1_text">
        <p>Lets apply the equation for Norway,where<span style={{color:'#2a0052'}}> Diesel vehicles are 44%</span>,<span style={{color:'#59003f'}}> Petrol vehicles are 33%</span> & <span style={{color:'#950025'}}> and Hybrid vehicles are 9%</span>.<br/><span className='b3_equation'>6.75 [ (0.179) D +(0.156) P + (0.108) H ]</span></p>
      </div>
    </div>
    <div className="b3_b3">
      <h1>Norway can save 4.8 Tons of <CO/> in5 years</h1>
      <div className="b3_b3_imges">
  
          <div className="b3_lineGraph"><Linegraph data={dataline}/></div>
      </div>
    </div>
    <div className="b3_b2">
      {/* <h4>Largest contributors to the world' <CO/> emission</h4> */}
      {/* <div className="b3_b2_img">
        <img src={require('../box2/images/map.png')} alt="img"/>
      </div> */}
    </div>
    <div className="b3_b4">
        <h1>Each shared EV reduce 15 private cars. In 2020 <a href='https://www.fueleconomy.gov/' target="_blank" rel="noopener noreferrer">Private cars contributed 41%</a> to the Transport sector <CO/></h1>
         <div className="b3_b4_img">
          <>
         <Piechart data={data} legend={false} styless={{width:"50%",height:230}} innerRadius={50} outerRadius={80} cornerRadius={4}/>
        <ul className='b3_b4_ul'>
        {data.map((obj,index)=>{
          const color=obj.color;
          return(
         
            <li key={index} className={ `piechartdescription_bullet ${index}`} style={{listStyle :`disc inside linear-gradient(${color}, ${color})`}}>
              {obj.name}
            </li>
          
          )
        })}
        </ul>
        </>
      </div>
    </div>
    </div>
  )
}
function CO (){
   return <span className='CO2'>CO<sub className='CO2'>2</sub></span>
}

export default Cal_box3;