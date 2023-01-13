import React from "react";
import Typewriter from "typewriter-effect";
import '../CSS Files/homepage.css';
import SocialMedia from "./SocialMedia";
import {motion} from "framer-motion"
export default function Homepage()
{                                             
    return (
        <div className="zahaantypewriter-container">
        <Typewriter id="typewriter" options={
            {
            autoStart: true,
            loop: true,
            }
        }
            onInit={(typewriter)=> 
            {
                typewriter.typeString("Zahaan Shapoorjee").pauseFor(1000).deleteAll().typeString("Developer").pauseFor(1000).deleteAll().typeString('Footballer').pauseFor(1000).deleteAll().start();
            }}/>
       
        <ul id="myInfo">
            <motion.div initial={{opacity:0, x:'-100vh'}}animate={{opacity:1, x:0}}transition = {{duration: 1}}>
                <p class="info">Hi! My name is Zahaan Shapoorjee, and I am an aspiring software developer currently studying at Ashoka University.</p>
            </motion.div>
            <motion.div initial={{opacity:0, x:'-100vh'}}animate={{opacity:1, x:0}}transition = {{duration: 2}}>
            <p class="info">I love playing football, video games, and listening to music.</p>
            </motion.div>
            <motion.div initial={{opacity:0, x:'-100vh'}}animate={{opacity:1, x:0}}transition = {{duration: 3}}>
            <p class="info">I am interested in Cyber Security, Software Development, and Web Development.</p>
            </motion.div>
        </ul>
        
        <SocialMedia/>
    </div>

    )
}