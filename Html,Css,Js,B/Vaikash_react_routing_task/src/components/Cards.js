import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
    return (
        <div className='row-one'>
            <h1>Best Places to Visit</h1>
            <div className='row'>
                <div className='col-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D" />
                        <Card.Body>
                            <Card.Title>Vietnam</Card.Title>
                            <Card.Text>
                                2 Days / 3 Nights
                                <p>$2300</p>
                            </Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1585086813715-f468e3fc6d20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww" />
                        <Card.Body>
                            <Card.Title>Thailand</Card.Title>
                            <Card.Text>
                                4 Days / 5 Nights
                                <p>$4500</p>
                            </Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1614088459293-5669fadc3448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww" />
                        <Card.Body>
                            <Card.Title>Switzerland</Card.Title>
                            <Card.Text>
                                6 Days / 7 Nights
                                <p>$8250</p>
                            </Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1592345279419-959d784e8aad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww" />
                        <Card.Body>
                            <Card.Title>Paris</Card.Title>
                            <Card.Text>
                                3 Days / 4 Nights
                                <p>$6300</p>
                            </Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww" />
                        <Card.Body>
                            <Card.Title>Hong Kong</Card.Title>
                            <Card.Text>
                                9 Days / 10 Nights
                                <p>$13000</p>
                            </Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1551524164-7d2f9ff12c70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D" />
                        <Card.Body>
                            <Card.Title>Malaysia</Card.Title>
                            <Card.Text>
                                3 Days / 3 Nights
                                <p>$5300</p>
                            </Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>





    );
}

export default Cards;