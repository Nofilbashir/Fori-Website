import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {Paper ,Box, Grow} from '@material-ui/core'
import {userName,userAdd} from "../../redux/actions/index"
import "./Login.css";
import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import {BiShowAlt,BiHide} from "react-icons/bi";
import {useNavigate} from "react-router";


function Login(){
const history=useNavigate();
    const[showpswrd,setShowpswrd]=useState(false);
    const[matched, setMatched]=useState(false);
        const dispatch=useDispatch();

    const[userData,setUserData]=useState({
        email:"",
        password:"",
    })


    function userInfo(e){
    
      const inputName=e.target.name;
      const inputValue=e.target.value;
      setUserData({...userData,[inputName]:inputValue})
      console.log(userData)
  }


  const responseSucessGoogle = (response) => {
      try{
      // console.log(response);
      axios({
        method:"POST",
        url: "http://localhost:2000/api/goooglelogin",
        data:{Userinfo:response.profileObj}
      }).then(response=>{
        dispatch(userName(response.data.name))
        dispatch(userAdd(response.data.useradd))
        // setUseradd(response.data.useradd)
        // setUname(response.data.name)
        console.log(response)
         history("/", { replace: true });
    
      })
    }
    catch(e){console.log(e)}
    }
    const responseErrorGoogle = (response) => {
      console.log(response);
    }

    const userdata=(e)=>{
        e.preventDefault()
        console.log(userData)
        try{
              axios({
              method:"POST",
              url: "http://localhost:2000/login",
              data:userData,
            }).then(response=>{
                console.log("response:", response.data.status, "userData:" ,userData)
                if (response.data.status==="success"){
              dispatch(userName(response.data.data.name))
              dispatch(userAdd(response.data.useradd))
              setUserData({     
              email:"",
              password:"",
          })    
                history("/", { replace: true })
                setMatched(false)
            }else{
              setMatched(true)
          }
         })}
          catch(e){console.log(e)}
    }

















    return(
    <div className="signin_page">
    <Paper elevation={3} style={{padding:'2rem'}}>
    <div className="signin_form">

    <form className="signin_container">

             <GoogleLogin
    clientId="211263177462-dm010o7pbnn403isskqrqvomsc8f9cos.apps.googleusercontent.com"
    buttonText="SignIn with google"
    onSuccess={responseSucessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
            />
            
       <div className="Sign_IN_OR_div"><hr className="Sign_IN_OR_hr"/><span>OR</span><hr className="Sign_IN_OR_hr"/></div>

      <input type="text" placeholder="Enter Email" name="email" required className="signin_input_box"value={userData.email} onChange={userInfo} autoComplete="on"/>
        <div className="signup_large_box">
      <div className="Signin_password_box" >
      <input type={showpswrd?"text":"password"} placeholder="Enter Password" name="password"  className="signin_input_box password-input"value={userData.password}onChange={userInfo}/>
      <button type="button" onClick={()=>setShowpswrd(!showpswrd)} style={{borderRadius:"0rem .5rem .5rem 0rem",border:"none",padding:"0.5rem"}}>{!showpswrd?<BiShowAlt/>:<BiHide/>}</button>

      </div>
          <div>{matched?<p  style={{color:"red",fontSize:"0.7rem", paddingTop:"1rem" , paddingBottom:"0rem"}}>Email or Password is incorrect</p>: null}</div>
      </div>



      <div className="signin_button">
          <br></br>
        <button type="submit" className="signin_btn" onClick={userdata}>Sign in</button>
      </div>
    </form>
 
  </div> 

</Paper>
</div>

    )
}

export default Login;