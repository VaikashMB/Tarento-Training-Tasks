import React from 'react'
import { useNavigate } from 'react-router-dom'


const Body = () => {
  const navigate = useNavigate()
  return (
    <div className='bodyContainer'>
        <div className='contents'>
        <h1 className='h1Body'>Experience The Best Adventures</h1>
        <h3 className='h3Body'>Discover new places with us</h3>    
        </div>
        <div>
            <button onClick={() => navigate("Features")} className='button'>Explore Now</button>
        </div>

    </div>
  )
}

export default Body