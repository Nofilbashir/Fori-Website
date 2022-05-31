import React from "react";
import { NavLink} from 'react-router-dom';
import "./calculationBox.css";
function CalculationBox(){
    return(
        <>
        <div className="calculationBox">
            <div className="banner_img">
            <img src={require("../imgs/Group27.png")} alt="img" />
            </div>
            <div className="b_box2">
            
                <h1 style={{color:'#707070', fontWeight:"bold" }}>Calculate Impact of Electric Cars</h1>

                <p className="b_box2_p">The Fori team of sustainability specialists carried out a comprehensive study to come up with an easy and accessible technology assessment concept to measure the impacts of EV sharing. Our tech is accessible to anyone who wants to contribute towards the reduction of there carbon footprint. Our tech is based on a comprehensive set of indicators. These measurements of EV impacts decision making both a personal and policy levels. </p>
                      <NavLink className="dashBoard_link primary_btn" to='/calculator'>View Calculator</NavLink>
            </div>
           </div>

        </>
    )
}
export default CalculationBox;