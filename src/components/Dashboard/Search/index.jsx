import React, { useState } from 'react';
import './styles.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
export default function Input({placeholder,onchange,search}) {
    



    return(
    <div className='search-flex'>
        <SearchRoundedIcon />
        <input type="text" placeholder={placeholder} 
        onChange={(e)=>onchange(e.target.value)}     value={search}/>
    
    </div>
    )
};
