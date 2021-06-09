import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

export const Video = () => {
    return (
        <div className='port-wrapper text-center'>
            <div className='jumbo row'>
                <Jumbotron className='jumbo-wrapper'>
                    <video width="100%" height="100%" controls autoplay muted>
                        <source src="./img/RPReplay_Final1620275652.mov" type="video/mov"/>
                    </video>
                </Jumbotron>
            </div>
        </div>
        
    )
    
}