import React from 'react';
import './styles.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../functions/convertNumber';
import { Link } from 'react-router-dom';
export default function List({coin}) {
    return(
        <Link to={`/coin/${coin.id}`} >
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
                <div className='price-chip font-less'>
                    +{coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <div className='trend-icon'>
                <TrendingUpIcon />
                </div>
        </td> 
        :<td className='chip-flex align-center td-right-align'>
            <div className='price-chip chip-red font-less'>
                {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <div className='trend-icon red '>
            <TrendingDownIcon />
            </div>
        </td>
            }
            </Tooltip>

            <Tooltip title="current price">

           
        <td className={coin.price_change_percentage_24h>0 ?"price align-center font-less":"price price-red align-center font-less"}>
                ${coin.current_price.toLocaleString()}
        </td>
            
        </Tooltip>
        <Tooltip title="volume">
         <td className='flex'>   
         <p className='volume align-center  font-bold'> {coin.total_volume.toLocaleString()}</p>
         </td>
         </Tooltip>
         <Tooltip title="market cap" >
         <td className='flex desktop-td-mkcp' >
            <p className='mar-cap  font-bold font-less'>{coin.market_cap.toLocaleString()}</p>
            </td>
            </Tooltip>

            <Tooltip title="market cap" >
         <td className='flex mobile-td-mkcp align-right' >
            <p className='mar-cap  font-bold font-less'>{convertNumbers(coin.market_cap)}</p>
            </td>
            </Tooltip>
        </tr>
        </Link>
    )
};
