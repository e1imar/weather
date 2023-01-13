import React, {Suspense, useMemo, useState, useEffect} from "react";
import fetchData from '../fetchData';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import NavTabs from './NavTabs'
import Search from "./Search";
import Routes from './Routes'
import { createTheme, ThemeProvider } from '@mui/material';
import ErrorBoundary from '../ErrorBoundary'
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';

const theme = createTheme({
  palette: {mode: 'dark'}
})

export default function WeatherContainer () {
const [loc, setLoc] = useState('kzn')

const data = useMemo(() => fetchData(
  // `${process.env.REACT_APP_API_URL}forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${loc}&days=3&aqi=no&alerts=no`
  `/.netlify/functions/weatherAPI?q=${loc}`
), [loc])

useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    position => setLoc([position.coords.latitude, position.coords.longitude])
  )
}, [])

return <ThemeProvider theme={theme}>
  <Stack minHeight='100vh'>
    <Stack sx={{m: 1, textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>
      <Search setCity={setLoc}/>
      <NavTabs/>
    </Stack>
    <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1} zIndex={1}>
      <Stack sx={{
        color: '#fff',
        width: 'calc(10rem + 40vw)',
        maxWidth: '100vw',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
      }}>
        <ErrorBoundary fallback={<Alert severity="error">Can't get weather data</Alert>}>
          <Suspense fallback={<LinearProgress/>}>
            <Routes data={data}/>
          </Suspense>
        </ErrorBoundary>
      </Stack>
    </Box>
  </Stack>
</ThemeProvider>
}