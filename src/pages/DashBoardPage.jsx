import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import Tabs from '../components/Dashboard/Tabs';
import axios  from 'axios';
import Input from '../components/Dashboard/Search';
import PaginationControlled from '../components/Pagination/Pagination';
import { CircularProgress } from '@mui/material';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BacktoTop';


export default function DashBoardPage(params) {
    const[input,setInput] = useState(null)
    const [coins,setCoins] = useState([])
    
    const [page,setPage] = useState(1)
    const [paginatedCoins,setPaginatedCoins] = useState([])
    const [isloading,setisLoading] = useState(true)

    const handlePageChange =(event,value)=>{
        setPage(value)
        console.log(value)
        const prevIndex = (value -1) * 10;
        // console.log(paginatedCoins);
        // console.log(coins);
        // console.log(prevIndex);
        setPaginatedCoins(coins.slice(prevIndex,prevIndex+10))
       
    }

      //  console.log(paginatedCoins);
    const fetchCoins = async()=>{
        try {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
//console.log(res.data);
            setCoins(res.data)
            setisLoading(false)
            setPaginatedCoins(res.data.slice(0,10))
        } catch (error) {
            
        }
    }

useEffect(()=>{
        fetchCoins()
},[])


const filteredcoins = input &&  coins.filter(coin=>
    coin.name.toLowerCase().includes(input.toLowerCase()) || // bitcoin ethereum ie.e. full name
    coin.symbol.toLowerCase().includes(input.toLowerCase())  // btc  eth i.e. shortname
    )



    return(
        <>
        {
        isloading ? 
            <div>
                <Header />
                <BackToTop />
                <Loader />
            </div>

        :   <div>
            <Header />
            <BackToTop />
            <Input  placeholder={"Search"} search={input} onchange={setInput}/>
            {coins?  <Tabs coins={input?filteredcoins : paginatedCoins } />: <Loader />}
            <PaginationControlled page={page} handlePageChange={handlePageChange}/>
            </div>
        }
        </>
    )
};

/**
 * line number 53  <Tabs coins={input?filteredcoins : paginatedCoins } />
 * the above line means when user clicks on seearch and inputs any search
 * filtercoins  variable which is an array is updated with coins and 
 * that is the sent to Tabs componenet to render
 * 
 * if input is empty then paginatedCoins is used and sent to Tabs
 */