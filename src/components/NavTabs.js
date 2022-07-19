import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'

const tabStyle = {minWidth: '4rem', width: '33%', minHeight: 24, height: 24}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="nav tabs" centered sx={{width: '100%', minHeight: 24}}>
      <Tab label="Current" component={Link} to='current' sx={tabStyle}/>
      <Tab label="Hourly" component={Link} to='hourly' sx={tabStyle}/>
      <Tab label="Forecast" component={Link} to='forecast' sx={tabStyle}/>
    </Tabs>
  );
}