import axios from "axios";

export const getTypeChart =async(name,days,type)=>{
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        // console.log(res.data);
        return res.data[type]
    } catch (error) {
        console.log(error.message);
    }
}