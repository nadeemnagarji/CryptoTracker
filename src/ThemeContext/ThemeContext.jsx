import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const Theme = {
    Light:"light",
    Dark:"dark"
}


const ThemeContext = createContext()


export const ThemeProvider = ({children})=>{

    const [theme,setTheme] = useState(Theme.Dark)

    const toggleTheme = ()=>{
       const newTheme = theme===Theme.Dark? Theme.Light:Theme.Dark
        setTheme(newTheme)
        document.body.setAttribute("theme",newTheme)
        localStorage.setItem("theme",newTheme)
    }

    // useEffect(()=>{
    //     document.body.setAttribute("theme",theme)
    //     localStorage.setItem("theme",theme)
    // },[theme])

    useEffect(()=>{
        //console.log("hi",localStorage.getItem("theme"));

       // console.log(typeof(localStorage.getItem("theme")));
        if(localStorage.getItem("theme")){
           
           // console.log("hi inside");
            const currTheme = localStorage.getItem("theme")
            setTheme(currTheme)
            document.body.setAttribute("theme",currTheme)
        }
    })
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const usetheme = ()=>{
    return useContext(ThemeContext)
}

export default ThemeContext