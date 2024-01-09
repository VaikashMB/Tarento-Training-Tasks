import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom"
import { useRecoilValue} from 'recoil';
import {usernameState} from "../states/atom"




function Header() {

  const username = useRecoilValue(usernameState)

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
      <Navbar.Brand href="#home">
        <img className='logo' src='https://i.pinimg.com/originals/8a/e8/be/8ae8be74fa23c435846ae8bc8d708426.png'></img>
      </Navbar.Brand>
        <Navbar.Brand href="#home">Travel Right</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='navLink'>Home</NavLink>
            <NavLink to="/About" className='navLink'>About</NavLink>
            <NavLink to="/Features" className='navLink'>Features</NavLink>
            <NavLink to="/Profile" className='navLink'>Profile</NavLink>
            <NavLink to="/Contact" className='navLink'>Contact</NavLink>  
            <NavLink to="/Login" className='navLink'>Login</NavLink>
            <p id='welcome'> Welcome {username} </p>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;