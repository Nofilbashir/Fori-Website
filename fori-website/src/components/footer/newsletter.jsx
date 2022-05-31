import React, { useState } from "react";
import { usersRecords } from "./users";
function NewsLetter(){
    const [input,setInput]=useState({
        name:"",
        email:""
    });
    const [subscribed, setSubscribed] = useState(false)
    function suscribe(e){

        const inputName=e.target.name;
        const inputValue=e.target.value;
        setInput({...input,[inputName]:inputValue})
        

    }
    const [record,setRecord]=useState();

    const register=(e)=>{
        e.preventDefault();
        setRecord((prev)=>{
            return input
        });
        usersRecords.push(record);
        // alert(`Dear ${input.name} you have suscribed to fori.co. You will get newsletters at this email address ${input.email}`)
        setInput({
            name:"",
            email:""
        });
        if (input.name && input.email) {setSubscribed(true)}
        // console.log(record)
    }
    return(
        <>
        <h4 className="f_feauture_heading">WEEKLY NEWSLETTER</h4>
        <form className="f_form" onSubmit={register}>
            <input type="text" name="name"  id="name"placeholder="Name" className="f_name" value={input.name} onChange={suscribe}/>
            <input type="email" name="email" id="email" placeholder="Your Email" className="f_name" value={input.email} onChange={suscribe} />
            {subscribed? <span style={{fontSize:"1rem", fontWeight:"lighter", textAlign:'center', paddingTop:"1rem"}}>Thankyou for subscribing to the newsletters</span>: null}
            <button type="submit" id="suscribe" className="primary_btn">Subscribe</button>
        </form>
        </>
    )
}
export default NewsLetter;