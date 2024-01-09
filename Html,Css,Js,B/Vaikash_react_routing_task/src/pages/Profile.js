import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRecoilValue} from 'recoil';
import {usernameState} from "../states/atom"



const Profile = () => {

  const username = useRecoilValue(usernameState)

  return (
    <div>
      <Header />
      <div className='profilebox'>
        <div className='details'>
          <h2 className='title'>User Profile</h2>
          <h3 className='title'>Personal Information:</h3>
          <ul className='listdecor'>
            <li>Name: {username} </li>
            <li>Email: ********@gmail.com</li>
            <li>Phone Number: **********</li>
            <li>Date of Birth: dd/mm/yyyy</li>
            <li>Address: M K Homes 507 4th Cross</li>
          </ul>
          <h3 className='title'>Booking History:</h3>
          <ul className='listdecor'>
            <li>Switzerland - 01/01/2023 - bookingId = #008935741156</li>
            <li>Thailand - 08/02/2023 - bookingId = #00893365241985</li>
          </ul>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Profile