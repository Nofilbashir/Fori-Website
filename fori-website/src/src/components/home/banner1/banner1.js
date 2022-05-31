import React from "react";
import "./banner1.css";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
function Banner1() {
  return (
    <>
      <div className="container1">
        <div className="container1-background">
          <div className="container1-box1">
            <h1 className="container1-box1-heading">
              Where data and
              <br /> creativity come <br />
              together!
            </h1>
            <div className="container1-box1-Social-icons">
              <a href="https://www.linkedin.com/company/foriinc" target="blank"><TiSocialLinkedinCircular className="c1-icon" /></a>
              <a href="https://twitter.com/foriinc2" target="_blank"><TiSocialTwitterCircular className="c1-icon" /></a>
              <a href="https://www.instagram.com/fori_inc/" target="blank"> <TiSocialInstagramCircular className="c1-icon" /></a>
              <a href="https://www.facebook.com/foriinc" target="blank"><TiSocialFacebookCircular className="c1-icon" /></a>
              
            </div>
          </div>

          <div className="container1-box1-img">
            <img src={require("./Group34.png")} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner1;
