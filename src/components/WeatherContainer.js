import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import NavTabs from './NavTabs'
import Search from "./Search";
import Routes from './Routes'

export default function WeatherContainer ({data, setCity}) {

  return <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={0} 
    sx={{width: 'calc(10rem + 40vw)', maxWidth: '100vw'}}>
      <Search setCity={setCity}/>
      <NavTabs/>
      <Routes/>
    </Stack>
  </Box>
}