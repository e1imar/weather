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
  <Stack minHeight='100vh'>
    <Stack sx={{m: 1, textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>
      <Search setCity={setCity}/>
      <NavTabs/>
    </Stack>
    <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
      {/*make loading state */}
      <Stack sx={{
        color: '#fff',
        width: 'calc(10rem + 40vw)',
        maxWidth: '100vw',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
      }}>
        <Routes data={data}/>
      </Stack>
    </Box>
  </Stack>
</ThemeProvider>
}