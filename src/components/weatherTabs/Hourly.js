import Hour from './Hour'

export default function Hourly ({forecast, deg}) {

  const currentDate = new Date()
  
  const hours = forecast.forecastday.slice(0, 4).map(day => <div key={day.date}>
  <span>{new Date(day.date).toLocaleString('default', {weekday: 'long'})}</span>
  {day.hour.map(hour => currentDate < new Date(hour.time) && <Hour key={hour.time} data={hour} deg={deg}/>)}
  </div>)

  return hours
}