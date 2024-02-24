import React from 'react';
import {Chart as ChartJS} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { convertNumbers } from '../../../functions/convertNumber';



export default function LineChart({chartdata,priceType,multiAxis}) {

  
      //console.log(chartdata);
      
    const    options= {
          responsive: true,
          plugins: {
            legend: {
                display: multiAxis ?true :false,
            },
          },
          interaction:{
            modes:"index",
            intersect:false,
          },
          scales:{
            crypto1:{
              type:"linear",
              display: true,
              position:"left",
                ticks:{
                    callback:function(value,index,ticks){
                        if(priceType=="prices") return "$" + value.toLocaleString()
                        else{
                            return "$" + convertNumbers(value)
                        }
                    }
                }
            },
            crypto2:{
              type:"linear",
              display: true,
              position:"right",
              ticks:{
                  callback:function(value,index,ticks){
                      if(priceType=="prices") return "$" + value.toLocaleString()
                      else{
                          return "$" + convertNumbers(value)
                      }
                  }
              }
          }
          }
    }
      


    return <Line data={chartdata} options={options} />
};
