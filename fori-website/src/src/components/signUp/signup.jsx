import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {Paper ,Box, Grow} from '@material-ui/core'
import {userName,userAdd} from "../../redux/actions/index"
import "./signup.css";
import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import {BiShowAlt,BiHide} from "react-icons/bi";
import {useNavigate} from "react-router";


function SignUp(){
  const history=useNavigate();
    const[userData,setUserData]=useState({
      name:"",
      
        password:"",
          email:"",
        passwordrepeat:""
    })
    const [alreadyEmail, setAlreadyEmail] = useState('false')
    const[showpswrd,setShowpswrd]=useState(false);
    const Uname=useSelector((state)=>state.userName)
    const useradd=useSelector((state)=>state.userAdd)
    const dispatch=useDispatch();
    const [validate,setValidate]=useState({
      name:false,
      email:false,
      password:false, 
      passwordrepeat:false
    })
    function userInfo(e){
    
      const inputName=e.target.name;
      const inputValue=e.target.value;
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (inputName=="email"&&!pattern.test(inputValue)) {
        setValidate((prev)=>{
          return {...prev,email:true}
        })
      }else if(inputName=="email"&&pattern.test(inputValue)){
        setValidate((prev)=>{
          return {...prev,email:false}
        })
      };
      setUserData({...userData,[inputName]:inputValue})
 
      if (inputName=="name"&&inputValue.length < 4) {
        console.log("length",inputValue.length)
        // console.log(userData)
        setValidate((prev)=>{
          return {...prev,name:true}
        })
      }else if(inputName=="name"&&inputValue.length >= 4){
        // alert("exceeded 5")
        setValidate((prev)=>{
          return {...prev,name:false}
        })
      }
      const paswrd = new RegExp("[A-Z a-z 0-9 \@ \_]{8}");
      if (inputName=="password"&& !paswrd.test(inputValue)) {
        console.log(inputValue)
        console.log("hell not passed",paswrd.test(inputValue))
        setValidate((prev)=>{
          return {...prev,password:true}
        })
      }else if(inputName=="password"&& paswrd.test(inputValue)){
        // console.log("passed",inputValue)
        setValidate((prev)=>{
          return {...prev,password:false}
        })
      }
  }
    const userdata=(e)=>{
      e.preventDefault();
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      const paswrd = new RegExp("[A-Z a-z 0-9 \@ \_]{8}");
      if(userData.name.length>=5 &&pattern.test(userData.email)&&userData.password===userData.passwordrepeat&&  paswrd.test(userData.password) ){
        setValidate((prev)=>{
          return {...prev, name:false,
            email:false,
            password:false,
            passwordrepeat:false}
        })
        try{
              axios({
              method:"POST",
              url: "http://localhost:2000/api/manualsignup",
              data:{Userinfo:userData}
            }).then(response=>{
              dispatch(userName(response.data.name))
              dispatch(userAdd(response.data.useradd))
              setUserData({     
              name:"",
              email:"",
              password:"",
              passwordrepeat:"",
          })
          // console.log(response.data.name)
          if(response.data.name==='you already'){
            setAlreadyEmail(false)
            // alert('Email Already Registerd')
          }else{
               history("/", { replace: true })
          }
         })}
          catch(e){console.log(e)}
          }else{
              Object.entries(userData).map((key)=>{
                if(key[1]!==""){
                  setValidate((prev)=>{
                    return {...prev,[key[0]]:false}
                  })
     
                }else{
                  console.log(validate)
                  setValidate((prev)=>{
                    return {...prev,[key[0]]:true}
                  })
                  
                }
              }) 
              if (!pattern.test(userData.email)) {
            
                setValidate((prev)=>{
                  return {...prev,email:true}
                }) }else{
                  setValidate((prev)=>{
                    return {...prev,email:false}
                  })
                }
                if (userData.name.length<=4) {
            
                  setValidate((prev)=>{
                    return {...prev,name:true}
                  }) }else{
                    setValidate((prev)=>{
                      return {...prev,name:false}
                    })
                  }
              if(userData.password!==userData.passwordrepeat|| !paswrd.test(userData.password)){
                // alert("Password did not matched,plz retry")
                setValidate({...validate,passwordrepeat:true})
              }else{
                console.log("password matched")
                setValidate({...validate,passwordrepeat:false,password:false})
              }    }}
  
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

return(
  <div className="signup_page">
  <Paper elevation={3} style={{padding:'2rem'}}>
     <div className="signup_form">
        
 
        {/* <img className="Form_img" src={require("./calculatorimg.png")} alt="img" /> */}
    <form className="signup_container">
         <GoogleLogin
    clientId="211263177462-dm010o7pbnn403isskqrqvomsc8f9cos.apps.googleusercontent.com"
    buttonText="Signup with google"
    onSuccess={responseSucessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  />
       <div className="OR_div"><hr className="OR_hr"/><span>OR</span><hr className="OR_hr"/></div>

      {/* <label htmlFor="name" className="form-Labels">Name</label> */}
      <input type="text" placeholder="Enter Name" name="name" required className="signup_input_box" value={userData.name}onChange={userInfo}/>
      {validate.name?<p style={{color:"red",fontSize:"0.7rem"}}>"Atleast 4 Character Name is required"</p>:null}

      {/* <label htmlFor="email" className="form-Labels">Email</label> */}
      <input type="text" placeholder="Enter Email" name="email" required className="signup_input_box"value={userData.email} onChange={userInfo} autoComplete="on"/>
      {validate.email?<p style={{color:"red",fontSize:"0.7rem"}} >"Valid email(example@abc.com) is required"</p>:null}
      {alreadyEmail?null:<p style={{color:"red",fontSize:"0.7rem"}} >"Already Registered. Please Login"</p>}

      {/* <label htmlFor="psw" className="form-Labels">Password</label> */}
      <div className="password_box" >
      <input type={showpswrd?"text":"password"} placeholder="Enter Password" name="password"  className="signup_input_box password-input"value={userData.password}onChange={userInfo}/>
      <button type="button" onClick={()=>setShowpswrd(!showpswrd)} style={{borderRadius:"0rem .5rem .5rem 0rem",border:"none",padding:"0.5rem"}}>{!showpswrd?<BiShowAlt/>:<BiHide/>}</button>
      </div>
      {validate.password?<p style={{color:"red",fontSize:"0.7rem"}}>Password should be 8 digit long</p>:null}

      {/* <label htmlFor="psw-repeat" className="form-Labels">Confirm Password</label> */}
      <div className="password_box" >
      <input type={showpswrd?"text":"password"} placeholder="Confirm password" name="passwordrepeat" required className="signup_input_box password-input" value={userData.passwordrepeat}onChange={userInfo}/>
      <button type="button" onClick={()=>setShowpswrd(!showpswrd)} style={{borderRadius:"0rem .5rem .5rem 0rem",border:"none",padding:"0.5rem"}}>{!showpswrd?<BiShowAlt/>:<BiHide/>}</button>
      </div>
      {validate.passwordrepeat?<p style={{color:"red",fontSize:"0.7rem"}}>"Password didn't Matched"</p>:null}
        <br></br>
      <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

      <div className="signup_button">

        <button type="submit" className="signup_btn" onClick={userdata}>Sign Up</button>
      </div>
    </form>
 
  </div> 

</Paper>
</div>
)
}
export default SignUp;