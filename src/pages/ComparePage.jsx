import React, { useEffect, useState } from 'react';

import Header from '../components/Common/Header';
import SelectCoins from '../components/Compare/SelectCoins';
import SelectDays from '../components/Coin/SelectDays';
import { getCoinData } from '../functions/getCoinData';
import { coinObject } from '../functions/CoinObject';
import List from '../components/Dashboard/List/List';
import { getCoinPrices } from '../functions/getCoinPrices';
import { getTypeChart } from '../functions/getTypeChart';
import CoinInfo from '../components/Coin/CoinInfo';



export default function ComparePage(params) {
    const [crypto1,setCrypto1] = useState("bitcoin")
    const [crypto2,setCrypto2] = useState("ethereum")
    const [days,setDays] = useState(7)
    
    const [crypto1Data,setCrypto1Data]  = useState(null)
    const [crypto2Data,setCrypto2Data]  = useState(null)
    const [priceType,setPriceType] = useState("prices")

    const handleCoinsChange = async(event,isCoinTwo)=>{
        if(isCoinTwo){
            setCrypto2(event.target.value)
            const coinData = await getCoinData(event.target.value)
                coinObject(setCrypto2Data,coinData)
        }else{
            setCrypto1(event.target.value)
            const coinData = await getCoinData(event.target.value)
                coinObject(setCrypto1Data,coinData)
        }
        const prices2 = await getTypeChart(crypto2,days,priceType)
        const prices1 = await getTypeChart(crypto1,days,priceType)
        console.log(prices1,prices2);
    
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

        if(coinData1 && coinData2){
            const prices1 = await getCoinPrices(crypto1,days)
            const prices2 = await getCoinPrices(crypto2,days)
            console.log(prices1);
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
       {crypto1Data && <CoinInfo heading={crypto1Data.id} desc={crypto1Data.desc?crypto1Data.desc:crypto1Data.id}/>}
       {crypto2Data && <CoinInfo heading={crypto2Data.id} desc={crypto2Data.desc?crypto2Data.desc:crypto2Data.id}/>}
        </div>
    )
};
