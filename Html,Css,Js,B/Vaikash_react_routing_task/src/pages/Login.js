import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useRecoilState } from 'recoil';
import { usernameState } from "../states/atom"




const Login = ({ authenticate }) => {

  const [username, setUsername] = useRecoilState(usernameState)

  const navigate = useNavigate();
  const onClick = () => {
    authenticate();
    navigate("/");
  }

  return (
    <div className='box'>
      <Header />
      <Form className='loginform'>
        <h2 className='heading'>LOGIN PAGE</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" value={username} onChange={event => setUsername(event.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" id='loginBtn' onClick={onClick}>
          Login
        </Button>
      </Form>

      <Footer />

    </div>
  )
}

export default Login