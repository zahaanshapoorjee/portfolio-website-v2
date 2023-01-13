import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../CSS Files/Header.css';
import {motion} from "framer-motion"
require('typeface-rock-salt')
export default function Header() {
  const styles = {
  brand:{
          color:'white',
          textDecoration:"none",
          position:"absolute",
          left:"1em",
          fontSize:"1em"
        },
  navigation:{
          color:"white",
          display:"flex",
          flexDirection:"row",
          textDecoration:"none"
        }};
  return (
    <motion.div initial={{opacity:0, y:"-100vh"}} animate={{opacity:1,y:0}} transition={{duration:2.5}}>
      <Navbar bg = 'dark' variant='dark' className='navbar'>
        <Navbar.Brand className='brand' style={styles.brand} href='\'>Zahaan Shapoorjee</Navbar.Brand>
        <Container>
        <Nav className='navigation' >
          <Nav.Link style={styles.navigation} href='\skills'>Skills</Nav.Link>
          <Nav.Link style={styles.navigation} href='\projects'>Projects</Nav.Link>
          <Nav.Link style={styles.navigation} href='\contactme'>Contact Me</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </motion.div>
      )
  }