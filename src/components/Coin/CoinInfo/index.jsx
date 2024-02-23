import React from 'react';
import "./styles.css"
import { useState } from 'react';



export default function CoinInfo({heading,desc}) {

    const shortDesc =` ${desc.slice(0,200)}<span class="read-more"> ReadMore</span>`
    const longDesc = `${desc} <span class="read-more"> Read Less</span>  `

    const [toggle,setToggle] = useState(false)


    return(
        <div className='grey-wrapper'>
            <h2 className='coin-info-heading'>{heading}</h2>
        {desc.length>200  ?   <p className='coin-info-desc'
            onClick={()=>setToggle(!toggle)}
            dangerouslySetInnerHTML={{__html:toggle? shortDesc:longDesc}} />
         : <p dangerouslySetInnerHTML={{__html:desc}} />    
        }
        </div>
    )
};
