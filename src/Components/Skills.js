import React from 'react'
import SocialMedia from './SocialMedia';
import '../CSS Files/Skills.css';
import {motion} from "framer-motion"
export default function SkillList()
{
       return (
        <div className='skills-page-container'>
        <motion.div initial ={{opacity:0, y:"-100vh"}} animate={{opacity:1, y:0}} transition={{duration:2, type: 'spring'}}><h1 className='skills-header'>SKILLS</h1></motion.div>
        <motion.div 
        initial={{ opacity: 0, x: '-100vh' }}
        animate={{ opacity: 1, x: 0 }}
        transition = {{duration: 2, type: 'spring', delay:1}}>
               <div className='skills-grid'>
                     <div className="skillListItems"><i className="devicon-c-plain" id='skill-icon'></i><p className='skill-text'> C</p></div>
                     <div className="skillListItems"><i className="devicon-cplusplus-plain" id='skill-icon'></i><p className='skill-text'>C++</p></div>
                     <div className="skillListItems"><i className="devicon-java-plain" id='skill-icon'></i><p className='skill-text'>Java</p></div>
                     <div className="skillListItems"><i className="devicon-python-plain" id='skill-icon'></i><p className='skill-text'>Python</p></div>
                     <div className="skillListItems"><i className="devicon-html5-plain" id='skill-icon'></i><p className='skill-text'>HTML</p></div>
                     <div className="skillListItems"><i className="devicon-css3-plain" id='skill-icon'></i><p className='skill-text'>CSS</p></div>
                     <div className="skillListItems"><i className="devicon-javascript-plain" id='skill-icon'></i><p className='skill-text'>JavaScript</p></div>
                     <div className="skillListItems"><i className="devicon-react-plain" id='skill-icon'></i><p className='skill-text'>React.js</p></div>
                     <div className="skillListItems"><i className="devicon-express-original" id='skill-icon'></i><p className='skill-text'>Express.js</p></div>
                     <div className="skillListItems"><i className="devicon-nodejs-plain" id='skill-icon'></i><p className='skill-text'>Node.js</p></div>
                     <div className="skillListItems"><i className="devicon-mongodb-plain" id='skill-icon'></i><p className='skill-text'>MongoDB</p></div>
                     <div className="skillListItems"><i className="devicon-github-original" id='skill-icon'></i><p className='skill-text'>GitHub</p></div>
         </div>
         </motion.div>
         <SocialMedia/>
    </div>
    
    )
}