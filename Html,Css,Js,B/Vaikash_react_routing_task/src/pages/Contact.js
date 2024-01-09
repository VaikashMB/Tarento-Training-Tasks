import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className='contact'>
        <h2>Contact Us</h2>
        <p>Thank you for choosing Travel Right for your travel needs! We are committed to providing exceptional service and ensuring your trip is a memorable experience. If you have any questions, concerns, or need assistance, please don't hesitate to contact us.</p>
        <h2>Customer Support</h2>
        <p>For general inquiries, booking assistance, or support, our dedicated customer support team is available 24/7.</p>
        <p>Email: support@travelright.com</p>
        <p>Phone: +1-123-456-7890</p>
        <h2>Emergency Assistance</h2>
        <p>If you require urgent assistance during non-business hours, please contact our emergency hotline:</p>
        <p>Emergency Hotline: +1-555-123-4567</p>
        <h2>Connect With Us</h2>
        <p>Stay connected with us on social media for updates, travel tips, and special offers.</p>
        <h2>Feedback</h2>
        <p>We value your feedback! If you have any comments or suggestions to help us improve our services, please email us at feedback@travelright.com.Thank you for choosing Travel Right. We look forward to assisting you with your travel plans!</p>


      </div>
      <Footer />
    </div>
  )
}

export default Contact