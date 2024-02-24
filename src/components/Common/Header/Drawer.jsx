import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function TempDrawer() {
const [open,setOpen] = React.useState(false)


  return (
    <div>
          <Button onClick={()=>setOpen(true)}><MenuIcon /></Button>
          <SwipeableDrawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
            onOpen={() => setOpen(true)} 
            >
          <div className='drawer-links'>
            <Link to="/"><p>Home</p></Link>
            <Link to="/compare"><p>Compare</p></Link>
            <Link to="/dashboard"><p>Dashboard</p></Link>
            </div>
          </SwipeableDrawer>
    </div>
  );
}