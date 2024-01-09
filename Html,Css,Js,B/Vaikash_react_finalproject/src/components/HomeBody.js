import Carousel from 'react-bootstrap/Carousel';

function HomeBody() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src='https://wallpapercave.com/wp/xC4oEit.jpg' className='imgcarousel' alt='img2'></img>
        <Carousel.Caption>
          <h3>Swiss Chocolates</h3>
          <p>The Finest Chocolates All the Way from Switzerland</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://wallpapercave.com/wp/FpLDRoH.jpg' className='imgcarousel' alt='img1'></img>
        <Carousel.Caption className='captioncarousel' style={{textAlign: 'start'}}>
          <h3 className='moveleft'>Belgium Chocolates</h3>
          <p className='moveleft'>Get a bite of the best chocolate producers in the world</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.unsplash.com/photo-1565071559227-20ab25b7685e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='imgcarousel' alt='img3'></img>
        <Carousel.Caption>
          <h3 style={{color:'white'}}>Sweet German Chocolates</h3>
          <p style={{color:'darkred'}}>
            Get the sweet premium taste of the German chocolates</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBody;