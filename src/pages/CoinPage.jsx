import React from 'react';
import { useParams } from 'react-router-dom';

export default function CoinPage(params) {
    const param = useParams()
    console.log(param);
    return(
        <div>
            {param.id}
        </div>
    )
};
