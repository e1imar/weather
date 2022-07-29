import Day from './Day'

export default function Daily ({forecast, deg}) {

  const [today, ...rest] = forecast.forecastday

  const dayList = rest.map(day => <Day  key={day.date_epoch} day={day} deg={deg}/>)
  return dayList
}