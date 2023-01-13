import React from "react";
import '../CSS Files/Projects.css'
import SocialMedia from "./SocialMedia";
import {motion} from "framer-motion"
export default function Projects()
{
    return (
        <div className = "projects-page">
            <motion.div initial ={{opacity:0, x:"+100vh"}} animate={{opacity:1, x:0}} transition={{duration:2}}><h1 className="projects-header">PROJECTS</h1></motion.div>
                    <div className="projects-container">
                    <motion.div layout
                                initial={{ opacity: 0, x: '-15vh' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition = {{duration: 2, delay:1, type:"spring"}}>
                    <div class="project"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Zahaan-s-Keylogger-3.0' target="_blank" rel="noreferrer"><img src={require('../Assets/p1.png')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Zahaan-s-Keylogger-3.0' target="_blank" rel="noreferrer">Zahaan's Keylogger</a></h1><p class="project-info">Skills Used: C++, Visual Basic, BATCH</p></div>
                    </motion.div>
                    <motion.div initial = {{opacity:0}} animate={{opacity:1}} transition={{duration:4, delay:1}}>
                    <div class="project"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Network-Packet-Sniffer' target="_blank" rel="noreferrer"><img src={require('../Assets/p2.png')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Network-Packet-Sniffer' target="_blank" rel="noreferrer">Network Packet Sniffer</a></h1><p class="project-info">Skills Used: Python</p></div>
                    <div class="project"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Huffman-Data-Compression' target="_blank" rel="noreferrer"><img src={require('../Assets/p3.png')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://github.com/zahaanshapoorjee/Huffman-Data-Compression' target="_blank" rel="noreferrer">Huffman Data Compression</a></h1><p class="project-info">Skills Used: C</p></div>
                    </motion.div>
                    <motion.div layout
                                initial={{ opacity: 0, x: '+15vh' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition = {{duration: 2, delay:3, type:"spring"}}>
                    <div class="project"><a className="thumbnail-header" href='https://zahaanshapoorjee-chat-app.netlify.app/' target="_blank" rel="noreferrer"><img src={require('../Assets/p4.png')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://zahaanshapoorjee-chat-app.netlify.app/' target="_blank" rel="noreferrer">Online Chatroom App</a></h1><p class="project-info">Skills Used: MERN Stack </p></div>
                    </motion.div>
                    <motion.div layout
                                initial={{ opacity: 0, x: '-15vh' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition = {{duration: 2, delay:3, type:"spring"}}>
                    <div class="project"><a className="thumbnail-header" href='https://zahaanshapoorjee-chat-app.netlify.app/' target="_blank" rel="noreferrer"><img src={require('../Assets/p5.png')} alt="Failed to Load..." className="project-image"/></a><h1 className="thumbnail-header"><a className="thumbnail-header" href='https://zahaan.netlify.app/' target="_blank" rel="noreferrer">Portfolio Website</a></h1><p class="project-info">Skills Used: MERN Stack</p></div>
                    </motion.div>
                    </div>

                    
                    <SocialMedia/>
        </div>
    )
}