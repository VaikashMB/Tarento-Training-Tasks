import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { addressState, dobState, emailState, passwordState, phoneState, usernameState } from "../states/atom"

function Login({ authenticate }) {

  const [username, setUsername] = useRecoilState(usernameState)
  const [email, setEmail] = useRecoilState(emailState)
  const [phone, setPhone] = useRecoilState(phoneState)
  const [dob, setDob] = useRecoilState(dobState)
  const [address, setAddress] = useRecoilState(addressState)
  const [password, setPassword] = useRecoilState(passwordState)

  const navigate = useNavigate();
  const onClick = () => {
    authenticate();
    navigate("/");
  }

  return (

    <div className='formmain'>
      <div>
        <Form className='formlog'>
          <h1>Login Form</h1>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="username" value={username} onChange={event => setUsername(event.target.value)} />
          </Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <br />
          <Form.Label>Phone :</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone Number" value={phone} onChange={event => setPhone(event.target.value)}/>
          <Form.Label>DOB :</Form.Label>
          <Form.Control type="text" placeholder="Enter Date of Birth" value={dob} onChange={event => setDob(event.target.value)}/>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" value={address} onChange={event => setAddress(event.target.value)}/>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
          </Form.Group>
          <div className='buttons'>
            <Button variant="primary" onClick={onClick}>
              Login
            </Button>
          </div>
        </Form>
      </div>
      <div>
        <img className='formimg img-fluid' src='https://images.unsplash.com/photo-1587132164684-cfd0b8214d8e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='imgform'></img>

      </div>

    </div>

  );
}

export default Login;