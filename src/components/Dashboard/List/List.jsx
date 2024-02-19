import React from 'react';
import './styles.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Tooltip } from '@mui/material';
export default function List({coin}) {
    return(
        <tr className='list-row'>
            <Tooltip  title="Logo">
        <td className='image-title td-image'>
                <img className='logo' src={coin.image} alt="" />
        </td>
        </Tooltip>
        <Tooltip title='title'>
        <td>
                <div className='coin-info '>
                    <p className='symbol'>{coin.symbol.toUpperCase()}-USD</p>
                    <p className='name'>{coin.id}</p>
                </div>
        </td>
        </Tooltip>
        <Tooltip title='price change'>
            {coin.price_change_percentage_24h  > 0 ?  

        <td className='chip-flex align-center'>
                <div className='price-chip'>
                    {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <div className='trend-icon'>
                <TrendingUpIcon />
                </div>
        </td> 
        :<td className='chip-flex align-center td-right-align'>
            <div className='price-chip chip-red '>
                {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <div className='trend-icon chip-red'>
            <TrendingDownIcon />
            </div>
        </td>
            }
            </Tooltip>
           
        <td className={coin.price_change_percentage_24h>0 ?"price align-center":"price price-red align-center"}>
                ${coin.current_price.toLocaleString()}
        </td>
            
            
         <td className='flex'>   
         <p className='volume align-center  font-bold'> {coin.total_volume.toLocaleString()}</p>
         </td>
         <td className='flex' >
            <p className='mar-cap  font-bold'>{coin.market_cap.toLocaleString()}</p>
            </td>
        </tr>
    )
};
