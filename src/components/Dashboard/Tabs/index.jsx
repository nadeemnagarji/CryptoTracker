import  React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./styles.css"
import Grid from '../Grid/Grid';
import List from '../List/List';


export default function Tabs({coins}) {
  const [value, setValue] = React.useState('List');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


 


  return (
    <div sx={{ width: '100%', typography: 'body1' }}>
      
      <TabContext value={value}>
       
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" />
            <Tab label="List" value="List" />
          </TabList>

        <TabPanel value="grid">
        <div className='grid-flex'>
        {coins &&
        coins.map((coin,i)=><Grid coin={coin} />)}
        </div>
        </TabPanel>
        <TabPanel value="List">
        <table className='list-flex'>
        {coins &&
        coins.map((coin,i)=><List coin={coin} />)}
        </table>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  );
}