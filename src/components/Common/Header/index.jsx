import React from 'react';
import './styles.css'
import TempDrawer from './Drawer';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { usetheme } from '../../../ThemeContext/ThemeContext';

export default function Header(params) {
  const {toggleTheme} = usetheme()

  const navigate = useNavigate()

  const moveToDashBoard = ()=>{
    navigate("/dashboard")
  }
    return(
        <div className='navbar'>
          <Link to="/"><h1 className='logo'>CryptoTracker</h1> </Link>
          <div className='nav-links'>
            <Button name={"Switch Theme"} outline={true} onClickFn={toggleTheme} />
            <Link to="/"><p>Home</p></Link>
            <Link to="/wishlist"><p>Wishlist</p></Link>
            <Link to="/compare"><p>Compare</p></Link>
            <Button name={"Dashboard"} outline={false} onClickFn={moveToDashBoard} />
          </div>
          <div className='drawer'>
        
          <  TempDrawer />
          </div>
        </div>
    )
};
