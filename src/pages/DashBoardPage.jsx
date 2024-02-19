import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import Tabs from '../components/Dashboard/Tabs';
import axios  from 'axios';
export default function DashBoardPage(params) {

    const [coins ,setCoins] = useState([])

    const fetchCoins = async()=>{
        try {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
            console.log(res.data);
            setCoins(res.data)
        } catch (error) {
            
        }
    }

useEffect(()=>{
        fetchCoins()
},[])

    return(
        <div>
            <Header />
            <Tabs coins= {coins} />
        </div>
    )
};
