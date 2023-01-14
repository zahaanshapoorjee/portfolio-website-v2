import React, {useRef, useState} from "react";
import '../CSS Files/ContactMe.css';
import SocialMedia from "./SocialMedia";
import {motion} from "framer-motion"
import axios from "axios";
export default function Contact()
{
    const form = useRef();
    const[info, setInfo] = useState({name:'', email:'', message:''})

    const sendEmail=(e)=>
    {
        e.preventDefault();
        axios.post("https://z69.onrender.com/emails", info).then((response)=>{
            console.log(response)
          })
        alert('Message Sent Successfully!');
        setInfo({name:'', email:'', message:''});
        form.current.reset();
    }

    const handleNameChange = (e) =>
    {
        e.persist();
        setInfo((info)=>({
        ...info, name:e.target.value}));
    }
    const handleEmailChange = (e) =>
    {
        e.persist();
        setInfo((info)=>({
        ...info, email:e.target.value}));
    }
    const handleMessageChange = (e) =>
    {
        e.persist();
        setInfo((info)=>({
        ...info, message:e.target.value}));
    }

    return (
        <div className="contactme-page-container">
            <motion.div initial ={{opacity:0, y:"-100vh"}} animate={{opacity:1, y:0}} transition={{duration:2, type: "spring"}}><h1 className="contactme-header">CONTACT ME</h1></motion.div>
            <motion.div 
        initial={{opacity:0, x:"-100vw"}} animate={{opacity:1, x:0}} transition={{duration:2, delay: 1, type:"spring"}}>
            <div className="contact-form">
            <form ref={form} onSubmit={sendEmail} className='contactme-form'>
                 <label>Name</label>
                    <input type="text" name="user_name" className='username-input' value={info.name} onChange={handleNameChange} /><br></br>
                 <label>Email</label>
                    <input type="email" name="user_email" className='emailid-input' value={info.email} onChange={handleEmailChange} /><br></br>
                 <label>Message</label>
                    <textarea name="message" className='message-input' value={info.message} onChange={handleMessageChange}/>
                 <input type="submit" value="Send" className='contactme-form-submit-button'/>               
                </form>
            </div>
            </motion.div>
            <SocialMedia/>
        </div>
    )
}