import React from 'react'
import Header from '../components/Header'
import { addressState, dobState, emailState, passwordState, phoneState, usernameState } from "../states/atom"
import { useRecoilValue } from 'recoil';
import Footer from '../components/Footer';

const Account = () => {

  const username = useRecoilValue(usernameState)
  const email = useRecoilValue(emailState)
  const phone = useRecoilValue(phoneState)
  const dob = useRecoilValue(dobState)
  const address = useRecoilValue(addressState)
  const password = useRecoilValue(passwordState)


  return (
    <div>
      <Header />
      <div className='details'>

        <ul className='listdecor'>
          <br />
          <br />
          <br />
          <br />
          <h2>User Details</h2>
          <li><strong>Name:</strong> {username}  </li>
          <li><strong>Email:</strong> {email} </li>
          <li><strong>Phone:</strong> {phone} </li>
          <li><strong>Dob:</strong>{dob} </li>
          <li><strong>Address:</strong> {address} </li>
          <li><strong>Password:</strong> {password} </li>
        </ul>
      </div>
      <Footer/>

    </div >
  )
}

export default Account