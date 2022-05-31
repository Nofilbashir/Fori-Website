import React from "react";
import "./pro.css";
function Pro(){
    return(
        <>
        <div className="ProC">
            <div className="proImg">
            <img src={require("../imgs/Group20.png")} alt="img" />
            </div>
            <div className="pro_box2">
                <h1 style={{color:'white', fontWeight:"bold" }}>Professional who works to help with your business.</h1>
                <p className="pro_box2_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
            </div>
           </div>

        </>
    )
}
export default Pro;