import React from "react";
import Footer from "../footer/footer";
import Banner7 from '../home/banner7/banner7';
import { PartnersTeam } from "../home/banner6/banner6";
import "./partner.css"

function Partners() {
    return (
        <>
            <div className="partner">
                <div className="partner__container-banner">
                <div style={{display:"flex" , flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <h1 className="main_heading">Building the Future we<br/> want to Work in</h1>
                <div className="partner_box1">
                    <img className="partner_box1_img" src={require("./banner2.png")} alt="img" />
                </div>
                </div>

                <p className="b6_para partner_team_box-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className="partner_new_img">
                    <h1 className="main_heading1">Fully committed to being <br></br> fully remote</h1>
                    <p className="b6_para partner_team_box-p1    "> Fori has been remote-first since day one. We’re proving to the world that remote work is the future, not a fad.</p>
                <div className="partner_box2">
                    <img className="partner_box2_img" src={require("./Group9.png")} alt="img" />
                </div>
                
                </div>
                <div className="b6_info partner_team_box">
                    <PartnersTeam className="b6_info partner_team_box"/>
                </div>
                <Banner7 />


            </div>
            <Footer />
        </>
    )
}
export default Partners;