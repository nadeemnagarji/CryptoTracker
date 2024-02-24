import React from 'react';
import './styles.css'
import TempDrawer from './Drawer';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(params) {

  const navigate = useNavigate()

  const moveToDashBoard = ()=>{
    navigate("/dashboard")
  }
    return(
        <div className='navbar'>
          <Link to="/"><h1 className='logo'>CryptoTracker</h1> </Link>
          <div className='nav-links'>
            <a href="/"><p>Home</p></a>
            <Link to="/compare"><p>Compare</p></Link>
            <Button name={"Dashboard"} outline={false} onClickFn={moveToDashBoard} />
           
          </div>
          <div className='drawer'>
          <  TempDrawer />
          </div>
        </div>
    )
};
