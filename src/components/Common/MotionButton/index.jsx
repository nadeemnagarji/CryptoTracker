import React from 'react';
import './styles.css'
import {motion} from "framer-motion"
export default function MotionButton({name,outline,onClickFn}) {
    return(
    <motion.button 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}

    className={outline?"btn-outlined":"btn"} 
    onClick={()=>onClickFn()}>

    {name}

    </motion.button>
    )
};
