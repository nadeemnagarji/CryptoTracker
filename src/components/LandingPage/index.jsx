import React from 'react';
import  './styles.css'
import Button from '../Common/Button';


export default function MainComponent(params) {
    return(
        <div className='main'>
            <div className='left'>
                <h1>Track Crypto Real Time.</h1>
                <p>Track craypto through a public api in Real
                    time. Visit the dashboard to do so!
                </p>
                <div>
                    <Button name={"Dashboard"} />
                    <Button name={"Share"} outline={"true"} />
                </div>
            </div>
            <div className='right'></div>
        </div>
    )
};
