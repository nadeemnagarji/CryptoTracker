import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { coinObject } from '../functions/CoinObject';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List/List';
import Header from '../components/Common/Header';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import ToggleButton from '../components/Coin/PriceType';
import ColorToggleButton from '../components/Coin/PriceType';
import { getTypeChart } from '../functions/getTypeChart';


export default function CoinPage(params) {
    const {id} = useParams()
    const [coin,setCoin] = useState(null)
    const[days ,setDays] = useState(7)
    const [isloading,setisLoading] = useState(true)
    const [chartData,setChartData] = useState()
    const [priceType,setpriceType] = useState("prices")
    const [alignment, setAlignment] = React.useState('prices'); //mui colorToggleButton's inner use state
    // console.log(id);



    const fetchCoins = async(id)=>{
        const coinData = await getCoinData(id)

        if(coinData){
            coinObject(setCoin,coinData)
            setisLoading(false)
        }
        const coinPrices = await getCoinPrices(id,days)
       // console.log(coinPrices);
        settingChartData(setChartData,coinPrices)
    }

    const handleDaysChange = async(event) => {
        setisLoading(true)
        setDays(event.target.value);
        const prices = await getCoinPrices(id,days)
        settingChartData(setChartData,prices)
        setisLoading(false)
        }

    const handleTypeChange = async(event, newAlignment) => {
            setisLoading(true)
            setAlignment(newAlignment);
            //console.log(event.target.value);
            const price = await getTypeChart(id,days,event.target.value)
            setpriceType(event.target.value)
            settingChartData(setChartData,price)
            setisLoading(false)
           // console.log(price);
          };

         // console.log(chartData);
    useEffect(()=>{
       fetchCoins(id)
    },[])

    // console.log(params);
    return(
       <div>
        <Header />
        {isloading ?(
        <Loader />
        ):(
            <>
            <div className='grey-wrapper'>
                <List coin={coin} />
            </div>

            <div className='chart-wraper'>
                <div className='selector-wrapper'>
                    <p>Price change in last</p>
                < SelectDays days={days}  handleDaysChange={handleDaysChange}/>
                </div>

                <div className='price-mk-vol-toggle'>
                    <ColorToggleButton alignment={alignment} handleTypeChange={handleTypeChange}/>
                </div>
           {chartData && <LineChart className="line-chart" 
           chartdata={chartData} priceType={priceType} />}
            </div>
            <CoinInfo heading={coin.name} desc={coin.desc} />
            </>
        )}

       </div>

    )
};
