import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Routes,useParams,NavLink} from 'react-router-dom';
import "./header.css"
import Home from "../home/home";
import Dashboard from '../dashBoard/Dashboard';
import Calculations from"../calculations/calculation";
import SignUp from '../signUp/signup';
import Login from '../Login/Logins'
import Partners from '../partnerpage/partner';
import Contact from '../contactuspage/contactus';
import Services from '../services/services';
import Expertise from '../expertise/expertise';
import Products from '../products/products';
import ScrollToTop from '../scroll';
import {useSelector, useDispatch} from "react-redux";
import {userAdd} from "../../redux/actions/index"


function Header(){

  const[click,setClick]=useState("true")
  const[ mob_nav_class, setmob_nav_class] = useState('on_closed');

  const Uname=useSelector((state)=>state.userName)
  const useradd=useSelector((state)=>state.userAdd)
  const dispatch=useDispatch();


  const handleClick=()=>{
    
   setClick(!click)
   if(mob_nav_class==="on_closed"){
   setmob_nav_class("mob_links")
  }
   else if(mob_nav_class==="mob_links"){
     setmob_nav_class("on_closed")
   }
   return 0
  }

    return(
      <Router>
        <ScrollToTop />
   

      <div className="NavBar" >
      
      <img className="icon" src={require("./logo.png")} alt="icon"/>

      <div className="lap_links">
      <NavLink  to='/' className="lap_a" >Home</NavLink>
      {/* <NavLink className="lap_a" to='/product'>Product</NavLink> */}
      <NavLink className="lap_a" to='/team'>Partners</NavLink>
      <NavLink className="lap_a" to='/services'>Services</NavLink>
      <NavLink className="lap_a" to='/Contact'>Contact </NavLink>
      </div>

      <div className={mob_nav_class}>
      <NavLink  to='/' className="mob_a" onClick={handleClick}>Home</NavLink>
      {/* <NavLink className="mob_a" to='/product'onClick={handleClick}>Product</NavLink> */}
      <NavLink className="mob_a" to='/team'onClick={handleClick}>Partners</NavLink>
      <NavLink className="mob_a" to='/services'onClick={handleClick}>Services</NavLink>
      <NavLink className="mob_a" to='/Contact'onClick={handleClick}>Contact </NavLink>
      </div>
      <div className='SignUP-SignIN'>
      <NavLink  to='/signup' className="signUp_link" onClick={()=>{dispatch(userAdd(false))}} >{useradd?<span className='login-logout'>Logout</span>:<span className='login-logout'>SignUp</span>}</NavLink>
      {/* <NavLink  to='/login' className="signUp_link" >{useradd?<span className='User_Avatar'>{Uname.toUpperCase().slice(0,1)}</span>:<span className='login-logout'>Log In</span>}</NavLink> */}
      {/* ====== just uncomment to see login button and remove the line below it */}
      {/* {useradd?<span className='User_Avatar'>{Uname.toUpperCase().slice(0,1)}</span>:<NavLink  to='/login' className="signUp_link" ><span className='login-logout'>LogIn</span></NavLink> } */}
      {useradd?<span className='User_Avatar'>{Uname.toUpperCase().slice(0,1)}</span>:null }
        </div>
     
      </div>
     
    
      <div className="navbar_responsive_btn" onClick={handleClick} >{click?<div className='three_lines'><hr/><hr/><hr/></div>:<div className='cross_lines'><hr className='cross_1'/><hr className='cross_2'/></div>}</div>






      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Products />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/team" element={<Partners />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/calculator" element={<Calculations />}></Route>
      <Route path="/expertise" element={<Expertise />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/:value" element={<AnyPage />}></Route>
      </Routes>
     </Router>
    )
}
 

  function AnyPage(){
    const { value} = useParams();
    return (
      <>
      <h1>Page Not Found</h1>
      <h1>your typed :"{value}" </h1>
      </>
    )
  }
  export default Header;
  