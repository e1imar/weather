import {useRoutes, Navigate} from 'react-router-dom'
import Current from './weatherTabs/Current'
import Hourly from './weatherTabs/Hourly'
import Daily from './weatherTabs/Daily'
import { useEffect, useState } from 'react'
import { Alert } from '@mui/material'

export default function RoutesContainer ({data}) {
  const fetchedData = data.read()

  return fetchedData.error ? <Alert severity="warning">{fetchedData.error.message}</Alert> : <Routes data={fetchedData}/>
}

function Routes ({data}) {
  const [deg, setDeg] = useState('c')
  const changeDeg = () => setDeg(prev => prev === 'c' ? 'f' : 'c')
  const combProps = {deg, changeDeg, ...data}

  useEffect(() => {
    const {condition, is_day} = data.current
    const event = new CustomEvent('changeWeather', {detail: {cond: condition.code, is_day}})
    document.dispatchEvent(event)
  }, [data])

  const routes = useRoutes([
    {path: '/', element: <Navigate to='/current' replace/>},
    {path: '/current', element: <Current {...combProps}/>},
    {path: '/hourly', element: <Hourly {...combProps}/>},
    {path: '/daily', element: <Daily {...combProps}/>},
  ])

  return routes
}