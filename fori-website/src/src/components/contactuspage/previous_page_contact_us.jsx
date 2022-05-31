import React,{useState} from 'react';
import {BsFillTelephoneFill} from "react-icons/bs";
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
        
        function message(e){
    
            const inputName=e.target.name;
            const inputValue=e.target.value;
            setInput({...input,[inputName]:inputValue})
        }


        // // const [record,setRecord]=useState();
        // const SendMessage=(e)=>{
        //     e.preventDefault();
        //     // setRecord(input);
        //         console.log(input)
        //     // usersRecords.push(record);
        //     setInput({
        //     name:"",
        //     email:"",
        //     subject:"",
        //     message:""
        // })
        // }
        const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        let i=0;
        Object.keys(input).map((obj)=>{
            if(!input[obj]){
               return alert(`you have left ${obj} feild empty`)
              
            }else{
                if(i==3){ emailjs.sendForm('service_ql6p0wf', 'template_08e65lt', form.current, 'VKCZr65xbijix7UHx')
               .then((result) => {
                   
                   setInput({
                     name:"",
                     email:"",
                     subject:"",
                     message:""
                 })
                 return alert("your message has been received")
               }, (error) => {
                   console.log(error.text);
                   return alert("your have put something wrong")
               })}else{
                   i= i+1
                   console.log(i)
               };               
            }
        })
      
               
      };
    return(
        <>
        <div className='contact'>

        <div className="contact_box1">
            <center >
               
            
             <div className="contact_box1_C1" >
            <img className="contact_box1_img" src={require("./banner1.png")} alt="img"/>
           </div>
           <div className='contact_us_heading_box'>
           <h1 className="contact_box1_h">Contact Us</h1>
           <BsFillTelephoneFill className='contact_box1_icon'/>
           </div>
            {/* <p className='contact_text'>Get in Touch</p> */}

            {/* <h3 className="contact_box1_heading">Contact with us</h3> */}
            <p className='contact_para'>Ideas, problems, suggestions? We would love to hear from you.
             Please contact us using the information below or by filling out the following form. A Fori representative
              will get back to you as soon as possible.
              </p>
              <form ref={form} onSubmit={sendEmail} className="contact_box2_form">
             <input type="text" name="name"  id="name"placeholder="Name" className="contact_box2_input" value={input.name} onChange={message} />
            <input type="email" name="email" id="email" placeholder="Your Email" className="contact_box2_input " value={input.email} onChange={message}/>
            <input type="text" name="subject" id="subject" placeholder="Subject" className="contact_box2_input" value={input.subject} onChange={message}/>
            <textarea id="message" name="message" rows="4" cols="12" placeholder="Enter your message here" className="contact_message_box" value={input.message} onChange={message}></textarea>
            <button type="submit" id="suscribe" className="contact_button" value="Send">Send Message</button>
      </form>

            </center>
            
        </div>
       
        </div>
         <Footer/>
        </>
    )
  }
  export default Contact;
//   import React, { useRef } from 'react';
//   import emailjs from '@emailjs/browser';
  
//   export const ContactUs = () => {
//     const form = useRef();
  
//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//     };
  
//     return (
//       <form ref={form} onSubmit={sendEmail}>
//              <input type="text" name="name"  id="name"placeholder="Name" className="contact_box2_input" />
//             <input type="email" name="email" id="email" placeholder="Your Email" className="contact_box2_input " value={input.email} onChange={message} />
//             <input type="text" name="subject" id="subject" placeholder="Subject" className="contact_box2_input" value={input.subject} onChange={message} />
//             <textarea id="message" name="message" rows="4" cols="12" placeholder="Enter your message here" className="contact_message_box" autoComplete='off'></textarea>
//             <button type="submit" id="suscribe" className="contact_button" value="Send">Send Message</button>
//       </form>
//     );
//   };