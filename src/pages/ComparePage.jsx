import React, { useEffect, useState } from 'react';

import Header from '../components/Common/Header';
import SelectCoins from '../components/Compare/SelectCoins';
import SelectDays from '../components/Coin/SelectDays';
import { getCoinData } from '../functions/getCoinData';
import { coinObject } from '../functions/CoinObject';
import List from '../components/Dashboard/List/List';



export default function ComparePage(params) {
    const [crypto1,setCrypto1] = useState("bitcoin")
    const [crypto2,setCrypto2] = useState("ethereum")
    const [days,setDays] = useState(7)
    
    const[crypto1Data,setCrypto1Data]  = useState(null)
    const[crypto2Data,setCrypto2Data]  = useState(null)


    const handleCoinsChange = async(event,isCoinTwo)=>{
        if(isCoinTwo){
            setCrypto2(event.target.value)
            const coinData = await getCoinData(event.target.value)
                
            if(coinData){
                coinObject(setCrypto1Data,coinData)
                // setisLoading(false)
                
            }
        }else{
            setCrypto1(event.target.value)
            const coinData = await getCoinData(event.target.value)

            if(coinData){
                coinObject(setCrypto2Data,coinData)
                
                // setisLoading(false)
            }
        }
     
    }



    const handleDaysChange = async(event) => {
        setDays(event.target.value)
        }

    const intialData = async()=>{
        const coinData1 = await getCoinData("bitcoin")
        if(coinData1){
            coinObject(setCrypto1Data,coinData1)
        }
        const coinData2 = await getCoinData("ethereum")
        if(coinData2){
            coinObject(setCrypto2Data,coinData2)
        }


    }



    useEffect(()=>{
            intialData()
    },[])

    return(
        <div>
        <Header />
        <div className='compare-wrapper'>
            <SelectCoins crypto1={crypto1} crypto2={crypto2}
             handleCoinsChange={handleCoinsChange}/>
             <SelectDays days={days} handleDaysChange={handleDaysChange} />
        </div>
        <div className='compare-lists'>
        {crypto1Data && <List coin={crypto1Data} />}
        </div>
        <div className='compare-lists'>
        {crypto2Data && <List coin={crypto2Data} />}
        </div>
        </div>
    )
};
