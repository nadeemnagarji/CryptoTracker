import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import Tabs from '../components/Dashboard/Tabs';
import axios  from 'axios';
import Input from '../components/Dashboard/Search';


export default function DashBoardPage(params) {
    const[input,setInput] = useState(null)
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

const filteredcoins = coins.filter(coin=>
    coin.name.toLowerCase().includes(input.toLowerCase()) || // bitcoin ethereum ie.e. full name
    coin.symbol.toLowerCase().includes(input.toLowerCase())  // btc  eth i.e. shortname
    )



    return(
        <div>
            <Header />
            <Input  placeholder={"Search"} search={input} onchange={setInput}/>
            <Tabs coins={filteredcoins} />
        </div>
    )
};
