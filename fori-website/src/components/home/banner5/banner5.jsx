import React, { useState,useRef } from "react";
import Slider from "react-slick";
import { debounce } from "lodash";
import data from "./card-data"
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@mui/styles';
import "./banner5.css";





function Banner5(){

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
        height:show ? "37rem" : "28rem" ,


      },
      customBorderRadius: {
        borderRadius: 25
      },

    });

    const classes = useStyles();
    
    function showMore(){setShow(!show)}

    const onWheelSlider = debounce((e, ref) => {
      if (!  sliderRef.current) return;
  
      if (e.deltaX > 400) {
        sliderRef.current.slickNext();
      } else if (e.deltaX < -300) {
        sliderRef.current.slickPrev();
      }
    }, 10);

    const settings = {
        className: "slider variable-width",
        dots: false,
       infinite: true,
    // centerMode: true,
      slidesToShow: 1,
      arrows:false,
      speed:300,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay:true,
      autoplaySpeed:1500,
      responsive: [
        {
          breakpoint: 930,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            dots: false
          }
        },
        {
          breakpoint: 613,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false,
          }
        },
        {
          breakpoint: 340,
          settings: {
            slidesToShow: 0,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ]
     };
    return(
        <div style={{ backgroundColor: "#F9F9F9"}}>
         <div className="banner5">
                <h1 className="b5_heading">Our Expertise</h1>

                <p className="b5_para">We accelerate startups by rapid designing, development & deployment
                  of end-end technologies for impact focused startups. Fori also provides digital transformations
                  and creates sustainable, smarter, and safer communities. If you are looking for a fully outsourced team,
                  Fori has you covered
                </p>
                <div onWheel={onWheelSlider}>
                <Slider {...settings}  ref={sliderRef}>

                 {data.map((item,index)=>{
                 return(
                    <div style={{ width: "25rem" ,height:"30rem" }} key={index}>
                   <Paper className={classes.root}><div  key={index}>
                        <h3 className="b5_Card_heading">{item.h1}</h3>
                        <div className="b5_Card_img">
                           <img  src={require("./iconsimg/"+item.img1)} alt="img" />
                        </div>
                    {item.p1.length<=200?<p className="b5_Card_para">{item.p1}</p>:
                    <><p className="b5_Card_para">{show?item.p1:item.p1.substring(0, 200)} <button className="b5_Card_showBtn" onClick={showMore}>{show?"....Show less":"...Read More"}</button></p>
                   </>}
                    </div>
                </Paper>
                </div>)
            })}
                </Slider>
                </div>
          </div>

        </div>
    )
}
export default Banner5;