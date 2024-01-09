
import React from 'react';
import Card from 'react-bootstrap/Card';
import Modalbuy from "./Modalbuy"



const ProductCard = () => {


    return (
        <div className='row' style={{ margin: '100px 0 0 60px' }} >
            <div className='col-lg-3 col-sm-6'>
                <Card style={{ width: '18rem' }} className='product-card'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1618320362989-d8a9eb2a1e52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" className="product-image" />
                    <Card.Body>
                        <Card.Title>Hazelnut Chocobars</Card.Title>
                        <Card.Text>
                            $76.00
                        </Card.Text>
                        <Modalbuy/>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-sm-6'>
                <Card style={{ width: '18rem' }} className='product-card'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="product-image" />
                    <Card.Body>
                        <Card.Title>Milk Chocolate</Card.Title>
                        <Card.Text>
                            $35.00
                        </Card.Text>
                        <Modalbuy/>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-sm-6'>
                <Card style={{ width: '18rem' }} className='product-card'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img3" className="product-image" />
                    <Card.Body>
                        <Card.Title>Dark Chocolate Muffle</Card.Title>
                        <Card.Text>
                            $41.00
                        </Card.Text>
                        <Modalbuy/>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-sm-6'>
                <Card style={{ width: '18rem' }} className='product-card'>
                    <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1673138930008-64cdecb37a95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img4" className="product-image" />
                    <Card.Body>
                        <Card.Title>Ruby Chocolates</Card.Title>
                        <Card.Text>
                            $18.00
                        </Card.Text>
                        <Modalbuy/>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-sm-6 col-bot'>
                <Card style={{ width: '18rem' }} className='product-card'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img5" className="product-image" />
                    <Card.Body>
                        <Card.Title>Heart Dark Chocolates</Card.Title>
                        <Card.Text>
                            $49.99
                        </Card.Text>
                        <Modalbuy/>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-sm-6 col-bot'>
                <Card style={{ width: '18rem' }} className='product-card'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1553452118-621e1f860f43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img6" className="product-image" />
                    <Card.Body>
                        <Card.Title>Milk Chocolate Muffles</Card.Title>
                        <Card.Text>
                            $29.00
                        </Card.Text>
                        <Modalbuy/>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-sm-6 col-bot'>
                <Card style={{ width: '18rem' }} className='product-card'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1545015451-f05567aa6bcc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img7" className="product-image" />
                    <Card.Body>
                        <Card.Title>Choco Eggs</Card.Title>
                        <Card.Text>
                            $31.00
                        </Card.Text>
                        <Modalbuy/>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-sm-6 col-bot'>
                <Card style={{ width: '18rem' }} className='product-card'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img8" className="product-image" />
                    <Card.Body>
                        <Card.Title>Chocotruffle jar</Card.Title>
                        <Card.Text>
                            $22.00
                        </Card.Text>
                        <Modalbuy/>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};










export default ProductCard;
