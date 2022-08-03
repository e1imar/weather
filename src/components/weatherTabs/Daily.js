import Day from './Day'

export default function Daily ({forecast, deg}) {
  const dayList = forecast.forecastday.slice(1).map(day => <Day  key={day.date_epoch} day={day} deg={deg}/>)
  
  return dayList
}