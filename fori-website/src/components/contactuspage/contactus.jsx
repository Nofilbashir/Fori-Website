import React,{useState} from 'react';
import "./contactus.css";
import Footer from '../footer/footer';
  import { useRef } from 'react';
  import emailjs from '@emailjs/browser';

  function Contact(){
        const [input,setInput]=useState({
            name:"",
            email:"",
            subject:"",
            message:""
        });
        const [received, setReceived]=useState(false)
        
        function message(e){
    
            const inputName=e.target.name;
            const inputValue=e.target.value;
            setInput({...input,[inputName]:inputValue})
        }


        const form = useRef();
        const sendEmail = (e) => {
        e.preventDefault();
        if(input.name && input.email && input.subject && input.message){
            emailjs.sendForm('service_ql6p0wf', 'template_08e65lt', form.current, 'VKCZr65xbijix7UHx')
                   
            setInput({
                name:"",
                email:"",
                subject:"",
                message:""})
            
            setReceived(true)
        }
        }

    return(
        <>
        <div className='contact'>
        
        <div className="contact_box1">
        <center className="contact_box1-content">
        <div className='contact_us_heading_box'>
           <h1 className="contact_box1_h">Contact Us</h1>
           
           
            
               
            
             <div className="contact_box1_C1" >
            <img className="contact_box1_img" src={require("./banner1.png")} alt="img"/>
           </div>
           </div>
           
            
            <p className='contact_para'>Ideas, problems, suggestions? We would love to hear from you.
             Please contact us using the information below or by filling out the following form. A Fori representative
              will get back to you as soon as possible.
              </p>
              </center>
              <center>
              <h1 className='contact_get'>Get in Touch</h1>
              <form ref={form} onSubmit={sendEmail} className="contact_box2_form">
             <input type="text" name="name"  id="name"placeholder="Name" className="contact_box2_input" value={input.name} onChange={message} />
            <input type="email" name="email" id="email" placeholder="Your Email" className="contact_box2_input " value={input.email} onChange={message}/>
            <input type="text" name="subject" id="subject" placeholder="Subject" className="contact_box2_input" value={input.subject} onChange={message}/>
            <textarea id="message" name="message" rows="3" cols="12" placeholder="Enter your message here" className="contact_message_box" value={input.message} onChange={message}></textarea>
            {received? <span style={{fontSize:"1rem", fontWeight:"lighter", textAlign:'center', paddingTop:"1rem"}}>Your message is received! </span>: null}

            <button type="submit" id="suscribe" className="contact_button primary_btn" value="Send">Send Message</button>
      </form>
      </center>

            
            
        </div>
       
        </div>
         <Footer/>
        </>
    )
  }
  export default Contact;