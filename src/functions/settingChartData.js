import { convertDate } from "./convertDate"




export const settingChartData = (setChartData,prices)=>{
    setChartData({
        labels: prices.map(price=> convertDate(price[0])),
        datasets: [{
            data:prices.map(price=>price[1]),
            borderColor: 'rgb(75, 192, 192)',
            borderWidth:2,
            fill:true,
            backgroundColor:"rgba(58,128,233,0.1)",
            tension:0.25, // makes the graph line smooth
            pointRadius :0
        }]
    })
}