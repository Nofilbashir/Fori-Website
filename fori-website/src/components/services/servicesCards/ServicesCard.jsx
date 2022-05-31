import React, { useState,useRef } from "react";
import data from "./card-data"
import {Paper} from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import "./servicesCard.css"

function ServicesCard(){

    const[show ,setShow]=useState(false);
    
    const sliderRef = useRef();

    const useStyles = makeStyles({
      root: {
        background: "#C4C4C41A",

        border: 0,
        borderRadius: "1rem",
        boxShadow: '0 3px 5px 2px lightgrey',
        color: 'white',
        padding: '2rem 1rem',
        height:show ? "37rem" : "28rem" 
      },
    });

    const classes = useStyles();
    
    function showMore(){setShow(!show)}

   
    return(
      {data.map((item,index)=>{
          return(
            <div style={{ width: "25rem" ,height:"30rem" }}>
              <Paper className={classes.root}><div  key={index}>
                  <h3 className="b5_Card_heading">{item.h1}</h3>
                  <div className="b5_Card_img">
                      <img  src={require("./iconsimg/"+item.img)} alt="img" />
                  </div>
              {item.p1.length<=200?<p className="b5_Card_para">{item.p1}</p>:
              <><p className="b5_Card_para">{show?item.p1:item.p1.substring(0, 200)} <button className="b5_Card_showBtn" onClick={showMore}>{show?"....Show less":"...Read More"}</button></p>
              </>}
              </div>
          </Paper>
          </div>)
      })}
    )
}
export default ServicesCard;