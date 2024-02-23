import React, { useEffect, useState } from 'react';
import "./styles.css"


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { get100Coins } from '../../../functions/get100Coins';

export default function SelectCoins({crypto1,crypto2,handleCoinsChange}) {
    
    const [allCoins,setAllCoins] = useState([])

    const getData = async()=>{
        const myCoins = await get100Coins()
        setAllCoins(myCoins)
    }

    


    useEffect(()=>{
        getData()
    },[])


    return (
    <div className='selectcoins-container' sx={{ minWidth: 120, maxWidth:100 }}>

       <div>
        <p>Crypto 1</p>
       <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={crypto1}
            onChange={(event)=>handleCoinsChange(event)}
        >
        { allCoins && allCoins.map((coin,i)=>
        <MenuItem value={coin.id}>{coin.name}</MenuItem>)
        }
        </Select>
        
        </div> 
        <div>
        <p>Crypto 1</p>
       <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={crypto2}
            onChange={(event)=>handleCoinsChange(event,true)}
        >
        { allCoins && allCoins.map((coin,i)=>
        <MenuItem value={coin.id}>{coin.name}</MenuItem>)
        }
        </Select>
        
        </div> 
       
    </div>
  );
}

/**
 * 
 * <MenuItem value={7}>7 Days</MenuItem>
            <MenuItem value={30}>30 Days</MenuItem>
            <MenuItem value={60}>60 Days</MenuItem>
            <MenuItem value={90}>90 Days</MenuItem>
 */