import './App.css';
import React, { useEffect, useState } from "react";
import WeatherContainer from './components/WeatherContainer'
import Window from './components/animation/Window'

function App() {
  const [coords, setCoords] = useState()
  const [data, setData] = useState()
  const [city, setCity] = useState()

  const fetchWeather = loc => {
    fetch(`${process.env.REACT_APP_API_URL}forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${loc}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => {throw new Error(err)})
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => setCoords([position.coords.latitude, position.coords.longitude])
    )
  }, [])

  useEffect(() => {
    if (!coords) return
    fetchWeather(coords)
  }, [coords])
  
  useEffect(() => {
    if (!city) return
    fetchWeather(city)
  }, [city])

  return <div className="App">
    <WeatherContainer data={data} setCity={setCity}/>
    {/* <Window/> */}
    {/* <div>no data</div> */}
    {/* {data ? <Weather data={data}/> : <div></div>} */}
  </div>
}

export default App;
