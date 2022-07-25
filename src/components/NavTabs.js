import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link, useLocation} from 'react-router-dom'

const tabStyle = {minWidth: '4rem', width: '33%', minHeight: 24, height: 24}

export default function NavTabs() {
  const location = useLocation().pathname
  const [value, setValue] = React.useState(location);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="nav tabs" centered sx={{width: '100%', minHeight: 24}}>
      <Tab label="Current" value='/current' component={Link} to='current' sx={tabStyle}/>
      <Tab label="Daily" value='/forecast' component={Link} to='daily' sx={tabStyle}/>
      <Tab label="Hourly" value='/hourly' component={Link} to='hourly' sx={tabStyle}/>
    </Tabs>
  );
}