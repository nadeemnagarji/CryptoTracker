import axios from "axios";

export const getCoinData = async (id)=>{
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        console.log(res.data);
        return res.data
    } catch (error) {
        
    }

}



/*
 coinObject(setCoin,res.data)
            setisLoading(false)
`
*/