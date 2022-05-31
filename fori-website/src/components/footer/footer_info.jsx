import React from "react";
import "./footer.css";
import { Link} from 'react-router-dom';
import {MdEmail} from "react-icons/md";
import{ImLocation}from"react-icons/im";
import{BsFillTelephoneFill}from"react-icons/bs";
function Footerinfo (){
    return(
        <div className="f_fori_info">
        <Link to='/'>
        <img src={require("./logo.png")} alt="img" /> </Link>
        <div className="f_text_icon"><BsFillTelephoneFill className="f_info_icon"/><span>+1 914 4165380</span></div>
        <div className="f_text_icon"><MdEmail className="f_info_icon"/><a href="mailto:info@fori.co">info@fori.com</a></div>
        {/* <div className="f_text_icon"><ImLocation className="f_info_icon"/><span className="f_span">543 Center Dr,Palu Alto, 94301, CA, USA</span></div> */}
    </div>
    )
}
export default Footerinfo;