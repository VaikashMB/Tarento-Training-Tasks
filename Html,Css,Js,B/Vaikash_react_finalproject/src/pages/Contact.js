import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className='contact'>

      <div className='contactpage'>

        <h2>Get in Touch</h2>

        <p>We love to hear from our chocolate enthusiasts! Whether you have questions about our delectable treats, need assistance with an order, or just want to share your love for chocolate, we're here for you.</p>

        <h3>Customer Support</h3>
        <p>Phone: <a >1-800-545 686</a><br />
          Email: <a href="mailto:support@chocolate.com">support@chocolate.com</a></p>

        <p>Our customer support team is available Monday through Friday, 9:00 AM to 6:00 PM (EST) to assist you with any inquiries or concerns.</p>

        <h3>Visit Us</h3>
        <p>Come experience the sweetness firsthand by visiting our chocolate boutique. We're located at:</p>

        123 Cocoa Avenue<br />
        Sweetville, CH 54321<br />
        United States

        <h3>Social Media</h3>
        <p>Connect with us on social media for the latest updates, promotions, and mouthwatering chocolate content.</p>
        <ul>
          <li>Facebook: <a href="https://www.facebook.com/chocolicious" target="_blank">Chocolicious FB</a></li>
          <li>Instagram: <a href="https://www.instagram.com/chocogram" target="_blank">ChocoGram</a></li>
          <li>Twitter: <a href="https://twitter.com/tweetchoco" target="_blank">TweetChoco</a></li>
        </ul>

        <h3>Wholesale Inquiries</h3>
        <p>For wholesale orders or business collaborations, please email us at <a href="mailto:wholesale@chocolate.com">wholesale@chocolate.com</a>. We'd love to discuss how we can sweeten your offerings!</p>


        <h3>Feedback Form</h3>
        <p>We value your feedback! Use the form below to share your thoughts, suggestions, or anything else you'd like us to know. We appreciate your input!</p>
      </div>
      <div className='contactimg'>
        <img src='https://images.unsplash.com/photo-1587486937407-34f64d78e270?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='contimg'></img>
      </div>

      </div>







      <Footer />
    </div>
  )
}

export default Contact