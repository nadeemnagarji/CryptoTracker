import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import { coinObject } from '../functions/CoinObject';
import Loader from '../components/Common/Loader';
import Input from '../components/Dashboard/Search';
import BackToTop from '../components/Common/BacktoTop';
import { useCoinList } from '../contexts/CoinListContext';
import { getCoinData } from '../functions/getCoinData';
import Tabs from '../components/Dashboard/Tabs';
function WishListPage() {
    const[input,setInput] = useState(null)
    const {coinsdata,setCoinsData} = useCoinList()
   // console.log(coinsdata);
    const filteredcoins = input &&  coinsdata.filter(coin=>
        coin.name.toLowerCase().includes(input.toLowerCase()) || // bitcoin ethereum ie.e. full name
        coin.symbol.toLowerCase().includes(input.toLowerCase())  // btc  eth i.e. shortname
        )

  return (
    <>
      <div>
            <Header />
            <BackToTop />
            <Input  placeholder={"Search"} search={input} onchange={setInput}/>
            {coinsdata?  <Tabs  coins={input?filteredcoins : coinsdata } />: <Loader />}
            </div>
        
        </>
  )
}

export default WishListPage