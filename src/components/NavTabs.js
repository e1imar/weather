import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="nav tabs" centered sx={{width: '100%'}}>
      <Tab label="Current" component={Link} to='/'/>
      <Tab label="Hourly" component={Link} to='hourly'/>
      <Tab label="Forecast" component={Link} to='forecast'/>
    </Tabs>
  );
}