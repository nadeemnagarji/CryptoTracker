import React, { useState } from 'react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import "./styles.css"

export default function BackToTop(params) {
 
    
    window.onscroll = function() {scrollFunction()};
    let mybutton = document.getElementById("myBtn");
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    return(
        <div className='backtotop-container'>
            <button onClick={topFunction} id="myBtn" ><ArrowUpwardRoundedIcon /></button>
        </div>
    )
};
