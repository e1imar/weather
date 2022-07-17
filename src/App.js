import './App.css';
import React, { useEffect, useState } from "react";
import WeatherContainer from './components/WeatherContainer'
import Window from './components/animation/Window'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {mode: 'dark'}
})

function App() {
  const [coords, setCoords] = useState()
  const [data, setData] = useState()
  const [city, setCity] = useState()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => setCoords([position.coords.latitude, position.coords.longitude])
    )
  }, [])

  useEffect(() => {
    if (!coords) return
    fetch(`${process.env.REACT_APP_API_URL}current.json?key=${process.env.REACT_APP_API_KEY}&q=${coords}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => {throw new Error(err)})
  }, [coords])
  
  useEffect(() => {
    if (!city) return
    fetch(`${process.env.REACT_APP_API_URL}current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => {throw new Error(err)})
  }, [city])

  return <ThemeProvider theme={theme}>
    <div className="App">
      <WeatherContainer data={data} setCity={setCity}/>
      {/* <Window/> */}
      {/* <div>no data</div> */}
      {/* {data ? <Weather data={data}/> : <div></div>} */}
    </div>
  </ThemeProvider>
}

export default App;
