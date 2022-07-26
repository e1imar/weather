import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import NavTabs from './NavTabs'
import Search from "./Search";
import Routes from './Routes'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {mode: 'dark'}
})

export default function WeatherContainer ({data, setCity}) {
return <ThemeProvider theme={theme}>
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <Stack
      // direction="column"
      // justifyContent="center"
      // alignItems="center"
      // spacing={0}
      sx={{
        color: '#fff',
        width: 'calc(10rem + 40vw)',
        maxWidth: '100vw',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
      }}>
      <Search setCity={setCity}/>
      <NavTabs/>
      <Routes data={data}/>
    </Stack>
  </Box>
</ThemeProvider>
}