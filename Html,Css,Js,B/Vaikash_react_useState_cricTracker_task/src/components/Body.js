import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Body = () => {
    const [showDynamicText, setShowDynamicText] = useState(false);

    const handleClickEvent = () => {
        setShowDynamicText(true);
    };

    return (
        <div>
            <div className='maintitle'>
                <h2>Welcome to CricTracker!</h2>
                <p>
                    Enjoy the latest cricket news and get cricket match updates, team
                    stats, top stories, predictions
                </p>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='bodycard'>
                        <div class='card bg-dark text-white'>
                            {showDynamicText ? (
                                <>
                                    <img
                                        src='https://staticg.sportskeeda.com/editor/2023/11/deba3-17010725759140-1920.jpg?w=840'
                                        class='card-img'
                                        alt='green rcb'
                                    />
                                    <div class='card-img-overlay'>
                                        <div className='cardtext'>
                                            <h5 class='card-title'>'Trade of the Season'</h5>
                                            <p class='card-text'>
                                                Hardik Pandya back to Mumbai Indians by trading Cameron
                                                Green to RCB
                                            </p>
                                            <p class='card-text'>Last updated 5 mins ago</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <img
                                        src='https://resources.pulse.icc-cricket.com/ICC/photo/2021/11/15/13095faa-e46b-48c2-94d7-4030421ad49c/16x9-Aus.png'
                                        class='card-img'
                                        alt='aus team'
                                    />
                                    <div class='card-img-overlay'>
                                        <div className='cardtext'>
                                            <h5 class='card-title'>'Aussies-The World Champions'</h5>
                                            <p class='card-text'>
                                                Australia bags their 6th World Cup by defeating India
                                            </p>
                                            <p class='card-text'>Last updated 3 mins ago</p>

                                            <Button onClick={handleClickEvent}>Show more
                                            </Button>
                                            {/* <button className='button' onClick={handleClickEvent}>
                                            </button> */}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Body;
