import React from 'react';
import './styles.css'
import TempDrawer from './Drawer';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

export default function Header(params) {

  const navigate = useNavigate()

  const moveToDashBoard = ()=>{
    navigate("/dashboard")
  }
    return(
        <div className='navbar'>
          <h1 className='logo'>CryptoTracker</h1>
          <div className='nav-links'>
            <a href=""><p>Home</p></a>
            <a href=""><p>Compare</p></a>
            <Button name={"Dashboard"} outline={false} onClickFn={moveToDashBoard} />
           
          </div>
          <div className='drawer'>
          <  TempDrawer />
          </div>
        </div>
    )
};
