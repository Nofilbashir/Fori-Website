import React,{useState,useRef} from 'react';
import Slider from "react-slick";
import { debounce } from "lodash";
import "./services.css";
import Co2Box from './servicesCo2analsis/co2Box';
import CalculationBox from './servicesCalcultion/calculationBox';
import Pro from './servicesLastBox/pro';
import {Paper} from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import Footer from "../footer/footer";
function Services(){
    const[show ,setShow]=useState(false);
    const sliderRef = useRef();
    function showMore(){setShow(!show)};
    const useStyles = makeStyles({
        root: {
          backgroundColor: "#f7f7f7",
          border: 0,
          borderRadius: "1rem",
          boxShadow: '0 3px 5px 2px lightgrey',
          color: 'white',
          padding: '2rem 1rem',
        
          width:"100%",
          height:"100%"
          // height:show ? "37rem" : "27rem" 
        },
      });
  
      const classes = useStyles();
    const data1=[
        {img:"Group47.png" ,h:"Backend Development",p:"Fori creates systems where web applications' 'behind-the-scenes' functionality is handled by backend development languages developed by the Fori Team. Our software links the web to a database, handles user connections, and runs the web application"},
        {img:"Group46.png" ,h:"Mobility Solutions",p:"Business mobility solutions will help your business to rapidly enhance management through mobile devices with improved security and data accuracy. It will take your business to a whole new generation of technology."},
        {img:"Group45.png" ,h:"Cloud Services",p:"The transfer of user data from front-end clients (e.g., users' servers, tablets, desktops, laptops—anything on the users' end), across the internet, to the provider's systems, and back is made easier with Fori cloud services."},
        {img:"Group44.png" ,h:"Bluetooth Integration",p:"Fori enables Bluetooth integration, including network stacks, which allows a device to exchange data wirelessly with other Bluetooth devices. Fori develops frameworks that allow users to access Bluetooth features via Bluetooth APIs."},
        {img:"Group43.png" ,h:"CO2 Dash Board",p:"Fori is a leading in the path of sustainable management technologies. We provide a one stop solution for all emissions related data management. Our dashboards help in environment friendly decision making for teams across different industries."}
      ]
      const data=[
          {h:"Happier Customers",img:"Group42.png",p:"Fori has achieved an excellent level of loyalty and satisfaction from our customers who experienced our product and worked with our team. This was made sure by meeting the needs of customers regularly every time all the time."},
          {h:"Faster Growth",img:"Group41.png",p:"Fori offers a variety of services that have aided in our rapid expansion. Our team ensured that our clients' demands were met by offering the greatest possible service, which aided our company's rapid growth."},
          {h:"Connected Workflow",img:"Group40.png",p:"At Fori we understand that connections make a difference. That is why we design systems which connect processes, people, platforms, or all the above, and it’s the act of connection that improves outcomes for the partners who work with us."}
        ]
      const settings = {
        className: "slider variable-width",
        dots: false,
       infinite: true,
    centerMode:false,
    arrows: false,
      slidesToShow: 1,
      speed:300,
      slidesToScroll: 1,
      initialSlide: 1,
      variableWidth: true, 
      responsive: [
        {
          breakpoint: 930,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
     };
     const onWheelSlider = debounce((e, ref) => {
      if (!sliderRef.current) return;
  
      if (e.deltaX > 400) {
        sliderRef.current.slickNext();
      } else if (e.deltaX < -300) {
        sliderRef.current.slickPrev();
      }
    }, 10);
   
    return(
        <>
        <div className="services_box1">
        <center className="services_box1-content">
          <div style={{ display:"flex" , flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <h1>Experience the best<br/> Services</h1>
        <div className="services_box1_C">
        <img className='services_img'src={require("./imgs/Group30.png")} alt="img"/>
        </div>
        </div>
        <p className='services_top_para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fugit ad suscipit laudantium, 
            maxime earum quo tempora expli Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fugit ad suscipit laudantium, 
            maxime earum quo tempora expliLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fugit ad suscipit laudantium, 
            maxime earum quo tempora explieum! Doloremque, perspiciatis in.</p>
        </center>
        <div className='services_cards_box'>
        {data1.map((item,index)=>{
                 return(
                   <div className='services_card' key={index}>
                   <Paper className={classes.root}><div  key={index}>
                     <div className="services_card_wrapper">
                        <h3 className="b5_Card_heading">{item.h}</h3>
                        <div className="services_card-img">
                           <img  src={require("./imgs/"+item.img)} alt="img" />
                        </div>
                    {/* {item.p.length<=200?<p className="b5_Card_para">{item.p}</p>:
                    <><p className="b5_Card_para">{show?item.p:item.p.substring(0, 100)} <button className="b5_Card_showBtn" onClick={showMore}>{show?"....Show less":"...Read More"}</button></p>
                   </>} */}
                   <p className="b5_Card_para">{item.p}</p>
                   </div>
                    </div>
                </Paper>
                </div>
                )
            })}
            </div>
        <div className='services_slider'>
        <div onWheel={onWheelSlider}>
        <Slider {...settings}  ref={sliderRef}>
        {data.map((item,index)=>{
                 return(
                    <div style={{width:"30rem"}} key={index}>
                   <div className="services_caresoul_card" style={{display:"flex"}} key={index}>
                   <div className="services_caresoul_Card_img">
                           <img className="services_caresoul_img" src={require("./imgs/"+item.img)} alt="img" />
                        </div>
                        <div style={{padding:"1rem",width:"15rem"}}>
                        <h3 style={{color:"white"}} className="b5_Card_heading">{item.h}</h3>
                    {item.p.length<=150?<p style={{color:"white"}} className="b5_Card_para">{item.p}</p>:
                    <><p className="b5_Card_para" style={{color:"white"}} >{show?item.p:item.p.substring(0, 150)} <button style={{color:"white"}}  className="b5_Card_showBtn" onClick={showMore}>{show?"Show less":"...Show More"}</button></p>
                   </>}
                   </div>
                    </div>
                </div>)
            })}
        </Slider>
        </div>
        </div>
        <Co2Box />
       <CalculationBox />
       <Pro/>
        </div>
        <Footer/>
        </>
        
    )
  }
  export default Services;