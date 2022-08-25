import './App.css';
import React from "react";
import WeatherContainer from './components/WeatherContainer'
import Window from './components/animation/Window'

function App() {

  return <div className="App">
    <Window/>
    <WeatherContainer/>
  </div>
}

export default App;
