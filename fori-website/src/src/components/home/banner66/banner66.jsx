
import React from 'react';
import {Paper} from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import {BsCheck2Circle} from "react-icons/bs";
import "./banner66.css"
function Banner66 (){
    const data1=["Founded in 2012","Raise $10M + Dollars","Reach over 4M donwloads","24/7 Support"]
    const useStyles = makeStyles({
        root: {
          border: 0,
          borderRadius: "1rem",
          boxShadow: '0 3px 5px 2px lightgrey',
          padding: '2rem 0 1rem 2rem',
          margin:".5rem",
          width:"25rem",
          height:"37rem",
          backgroundColor:"#f9f9f9",
          
        },
      });
  
      const classes = useStyles();
    return(
        <>
        <div className="b66">
        <Paper className={classes.root}>
                <h1 className='b66_card_heading'>Acheivments</h1>
                <ul className='b66_Card_list'>
                    {data1.map((i)=>{
                    
               return  <div className='b66_card_points'><BsCheck2Circle/> <li className='b66_Card_L'>{i}</li></div>
            })}
                </ul>
                <div style={{width:"100%"}}>
                <img style={{width:"100%"}} src={require("./Group48.png")}/>
                </div>
            </Paper>
            <div className='b66_paraBtn'>
            <p className='b66_para'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                   deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consecteturt
                    ut labore et dolore magna aliqua. </p>
            {/* <button className='dashBoard_link'>Learn More</button> */}
            </div>
        </div>
        </>
    )
}
export default Banner66;