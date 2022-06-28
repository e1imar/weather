import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [coords, setCoords] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => setCoords([position.coords.latitude, position.coords.longitude])
    )
  }, [])

  useEffect(() => {
    if (!coords) return
    const fetchData = async () => await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${coords[0]}&lon=${coords[1]}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => {throw new Error(err)})
    fetchData()
  }, [coords])

  return (
    <div className="App">
    </div>
  );
}

export default App;
