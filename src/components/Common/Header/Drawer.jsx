import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
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
            <a href=""><p>Home</p></a>
            <a href=""><p>Compare</p></a>
            <a href=""><p>Dashboard</p></a>
            </div>
          </SwipeableDrawer>
    </div>
  );
}