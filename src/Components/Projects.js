import React from "react";
import '../CSS Files/Projects.css'
import SocialMedia from "./SocialMedia";
import {motion} from "framer-motion"
export default function Projects()
{
    return (
        <div className = "projects-page">
            <motion.div initial ={{opacity:0, y:"-100vh"}} animate={{opacity:1, y:0}} transition={{duration:2, type: "spring"}}><h1 className="projects-header">PROJECTS</h1></motion.div>
                    <motion.div initial={{opacity:0, x:"-100vw"}} animate={{opacity:1, x:0}} transition={{duration:2, delay: 1, type:"spring"}}>
                    <div className="projects-container">
                    <div class="project"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Zahaan-s-Keylogger-3.0' target="_blank" rel="noreferrer"><img src={require('../Assets/p1.png')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Zahaan-s-Keylogger-3.0' target="_blank" rel="noreferrer">Zahaan's Keylogger</a></h1><p class="project-info">Skills Used: C++, Visual Basic, BATCH</p></div>
                    <div class="project"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Network-Packet-Sniffer' target="_blank" rel="noreferrer"><img src={require('../Assets/p2.png')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Network-Packet-Sniffer' target="_blank" rel="noreferrer">Network Packet Sniffer</a></h1><p class="project-info">Skills Used: Python</p></div>
                    <div class="project"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Huffman-Data-Compression' target="_blank" rel="noreferrer"><img src={require('../Assets/p3.png')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Huffman-Data-Compression' target="_blank" rel="noreferrer">Huffman Data Compression</a></h1><p class="project-info">Skills Used: C</p></div>
                    <div class="project"><a className="thumbnail-header" href='https://zahaanshapoorjee-chat-app.netlify.app/' target="_blank" rel="noreferrer"><img src={require('../Assets/p4.png')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://zahaanshapoorjee-chat-app.netlify.app/' target="_blank" rel="noreferrer">Online Chatroom App</a></h1><p class="project-info">Skills Used: MERN Stack </p></div>                
                    <div class="project"><a className="thumbnail-header" href='https://ashokapl.in/' target="_blank" rel="noreferrer"><img src={require('../Assets/p6.png')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://zahaan.netlify.app/' target="_blank" rel="noreferrer">Ashoka Premier League Website</a></h1><p class="project-info">Skills Used: MERN Stack, Google API</p></div>
                    <div class="project"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Penta-Cypher-Encryption-Decryption-Program' target="_blank" rel="noreferrer"><img src={require('../Assets/p7.jpg')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://zahaan.netlify.app/' target="_blank" rel="noreferrer">Penta-Cypher Encryption Decryption Program</a></h1><p class="project-info">Skills Used: C++, Cryprography</p></div>
                    </div>    
            </motion.div>            
        <SocialMedia/>
        </div>
    )
}