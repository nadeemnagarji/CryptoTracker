import React from 'react';
import './styles.css'

export default function Button({name,outline,onClickFn}) {
    return(
    <button className={outline?"btn-outlined":"btn"} onClick={()=>onClickFn()} >{name}</button>
    )
};
