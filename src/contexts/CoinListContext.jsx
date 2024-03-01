import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCoinData } from '../functions/getCoinData'
import { coinObject } from '../functions/CoinObject';

const CoinListContext = createContext()

export const ConListContextProvider = ({children})=>{
    const [coins,setCoins] = useState([])
    const [coinsdata,setCoinsData] = useState([])

// console.log(coinsdata);
// console.log(coins);

//  useEffect(()=>{
//     localStorage.setItem("wishListCoins",JSON.stringify(coinsdata))
//  },[coins])

    return( 
        <CoinListContext.Provider value={{coins,setCoins,coinsdata,setCoinsData}}>
        {children}
    </CoinListContext.Provider>
    )
  
}

export const useCoinList = ()=>{
        return useContext(CoinListContext)
}
