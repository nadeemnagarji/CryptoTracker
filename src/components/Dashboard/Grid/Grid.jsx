import React from 'react';
import './styles.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function Grid({coin}) {
    
    return(
        <div className={`grid-container ${
            coin.price_change_percentage_24h <0 && "grid-container-red"
        }`}>
            <div className='image-title'>
                <img className='logo' src={coin.image} alt="" />
                <div className='coin-info'>
                    <p className='symbol'>{coin.symbol.toUpperCase()}-USD</p>
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