import './App.css';
import React, { useEffect, useState, useMemo, Suspense } from "react";
import WeatherContainer from './components/WeatherContainer'
import Window from './components/animation/Window'
import mock from './mockData.json'
import fetchData from './fetchData';

function App() {
  const [loc, setLoc] = useState('London')

  const data = useMemo(() => fetchData(
    `${process.env.REACT_APP_API_URL}forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${loc}&days=3&aqi=no&alerts=no`
  ), [loc])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => setLoc([position.coords.latitude, position.coords.longitude])
    )
  }, [])

  return <div className="App">
    {/* <Window/> */}
    <WeatherContainer data={data} setCity={setLoc}/>
  </div>
}

export default App;
