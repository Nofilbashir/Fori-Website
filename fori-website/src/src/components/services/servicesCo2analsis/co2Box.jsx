import React from "react";
import "./Co2Box.css";

import { NavLink} from 'react-router-dom';
function Co2Box(){
    return(
        <div className="co2Box">
           
        <div className="b3">
          
                <h1 style={{color:"#707070",fontWeight:"bold"}}>CO2 Analysis</h1>
                <p className="b3_box1_para">Fori is a leading in the path of sustainable management technologies. We provide a one stop solution for all emissions related data management. Our dashboards help in environment friendly decision making for teams across different industries. Our dashboards provide strategic insights into the emissions of an entity which help in meeting regulatory and moral standards.</p>
                  <NavLink className="dashBoard_link" to='/dashboard'>View Dashboard</NavLink>
        </div>

        <div className="co2Box_body_img">
                <img src={require("../imgs/Group26.png")} alt="img" />
            </div>
        </div>
    )
}
export default Co2Box;