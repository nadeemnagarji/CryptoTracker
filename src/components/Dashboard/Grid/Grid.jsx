import React, { useEffect, useState } from 'react';
import './styles.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Link, useNavigate } from 'react-router-dom';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { useCoinList } from '../../../contexts/CoinListContext';



export default function Grid({coin}) {
    const [add,setAdd] = useState(false)
    const {coins,setCoins,setCoinsData,coinsdata} = useCoinList()
    const navigate = useNavigate()
    const [localPresent,setLocalPresent] = useState(false)

       // console.log(coin.id);
    const handleAdd = async(e)=>{
        e.stopPropagation();
        //console.log(coins);
        //console.log(coinsdata);
        if(add){
            
            setCoins((prevCoins) => prevCoins.filter((id) => id !== coin.id));
            setCoinsData((prevcoins)=> prevcoins.filter((item)=> item.id !== coin.id))
           // console.log("added");
        }else{
            setCoins((prevCoins)=> [...prevCoins,coin.id])
            const newcoinsdata = [...coinsdata,coin]

            setCoinsData(newcoinsdata)

        }

        setAdd((prevAdd) => !prevAdd);
    }
    // console.log(add);
    const moveToCoinPage = ()=>{
        navigate(`/coin/${coin.id}`)
    }



useEffect(()=>{
//as soon as the component loads we check if this coin is present in wishlist if yes then we 
// mark it as added (setAdd(true)) so that user can see a filled star and when he clicks on that star 
// else condition of handleadd function runs and eventually remove that coin from the wishlist


    setAdd(coins.includes(coin.id));
},[coins,coin.id])

    return(
       
        <div onClick={moveToCoinPage} className={`grid-container ${
            coin.price_change_percentage_24h <0 && "grid-container-red"
        }`}>
            <div className='image-title'>
                <img className='logo' src={coin.image} alt="" />
                <div className='coin-info'>
                    <p className='symbol'>{coin.symbol.toUpperCase()}-USD 
                    {add ===true?  <span onClick={(e)=>handleAdd(e)} ><StarIcon/></span> 
                    :<span onClick={(e)=>handleAdd(e)}><StarOutlineIcon /></span>} </p> 
                    
                    <p className='name'>{coin.id}</p>
                </div>
            </div>

            {coin.price_change_percentage_24h  > 0 ?      
             <div className='chip-flex'>
                <div className='price-chip'>
                    {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <div className='trend-icon'>
                <TrendingUpIcon />
                </div>
            </div> 
            :<div className='chip-flex'>
            <div className='price-chip chip-red'>
                {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <div className='trend-icon chip-red'>
            <TrendingDownIcon />
            </div>
            </div>
            }
           
            <div className={coin.price_change_percentage_24h>0 ?"price":"price price-red"}>
                ${coin.current_price.toLocaleString()}
            </div>
            
            
            <p className='volume'><span>Total Volume:</span> {coin.total_volume.toLocaleString()}</p>
            <p className='mar-cap'><span>Market Cap : $</span>{coin.market_cap.toLocaleString()}</p>
        </div>

    )
};


/**
 * 
 * image url = coin.image
 * main-title = coin.symbol
 * full-title = coin.id
 * price_change = coin.price_change_percentage_24h
 * current-price = coin.current_price
 * total volume =coin.total_volume
 * market-cap = coin.market_cap
 * 
 *
 */