import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom"
import Modalbox from '../components/Modalbox'
import { usernameState} from "../states/atom"
import { useRecoilValue} from 'recoil';



function Header() {

    const username = useRecoilValue(usernameState)

    return (
        <div>
            <Navbar expand="lg" className="navcolor fixed-top">
                <Container>
                    <Navbar>
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                    src="https://cdn.sanity.io/images/kts928pd/production/39227d41a0e9847702621cf81fde2887dbbc3d0d-731x731.png"
                                    width="70"
                                    height="70"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className='navLink' >Home</NavLink>
                            <NavLink to="/shop" className='navLink'>Shop</NavLink>
                            <NavLink to="/about" className='navLink'>About Us</NavLink>
                            <NavLink to="/contact" className='navLink'>Contact Us</NavLink>
                            <NavLink to="/account" className='navLink'>Account</NavLink>
                            <NavLink to="/login" className='navLink'>Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='navtext'>
                            Signed in as: <a href='user'>{username}</a>
                        </Navbar.Text>
                        <Modalbox />
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
}

export default Header;