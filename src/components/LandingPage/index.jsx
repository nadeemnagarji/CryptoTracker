import React from 'react';
import  './styles.css'
import Button from '../Common/Button';
import Phone from '../../assets/phone.png'
import gradient from '../../assets/gradient.png'

import {motion} from "framer-motion"
import MotionButton from '../Common/MotionButton';
export default function MainComponent(params) {
    return(
        <div className='main'>
            <div className='left'>
                <div className='main-title' >
                <motion.h1 
                initial={{opacity:0,translateY:50}}
                animate={{opacity:1,translateY:0}}
                transition={{duration:0.5}}
                >
                Track Crypto</motion.h1> 
                <motion.h1
                initial={{opacity:0,translateY:50}}
                animate={{opacity:1,translateY:0}}
                transition={{duration:0.5,delay:0.5}}
                > Real Time.</motion.h1>

</div>
                <motion.p 
                initial={{opacity:0,translateY:50}}
                animate={{opacity:1,translateY:0}}
                transition={{duration:0.5,delay:1}}
                >Track craypto through a public api in Real
                    time. Visit the dashboard to do so!
                </motion.p>
                <motion.div
                initial={{opacity:0,translateX:50}}
                animate={{opacity:1,translateX:0}}
                transition={{duration:0.5,delay:1.5}}  className='main-btn'>
                    <MotionButton name={"Dashboard"}
                   
                    />
                    <MotionButton name={"Share"} outline={"true"} />
                </motion.div>
            </div>
            <div className='right' >
                
                <motion.img className='p1'
                initial={{y:-10}}
                animate={{y:10}}
                transition={{
                    type:"smooth",
                    repeatType:"mirror",
                    duration:2,
                    repeat:Infinity
                }}
                 src={Phone} alt="" />
                <img className='g1' src={gradient}  alt="" />
            </div>
            <div className='right'></div>
        </div>
    )
};
