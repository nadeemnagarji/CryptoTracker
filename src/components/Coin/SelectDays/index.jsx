import React from 'react';
import "./styles.css"


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDays({days,handleDaysChange,label}) {


  

  return (
    <div  className='select-days' sx={{ minWidth: 120, maxWidth:100 }}>

        <p>{label}</p>
        <Select 
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={days}
            onChange={handleDaysChange}
        >
            <MenuItem value={7}>7 Days</MenuItem>
            <MenuItem value={30}>30 Days</MenuItem>
            <MenuItem value={60}>60 Days</MenuItem>
            <MenuItem value={90}>90 Days</MenuItem>
        
        </Select>
    </div>
  );
}
