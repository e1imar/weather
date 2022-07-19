import {useRoutes, Navigate} from 'react-router-dom'
import Current from './weatherTabs/Current'
import Hourly from './weatherTabs/Hourly'
import Forecast from './weatherTabs/Forecast'
import { useState } from 'react'

export default function Routes ({data}) {
  const [deg, setDeg] = useState('c')
  const changeDeg = () => setDeg(prev => prev === 'c' ? 'f' : 'c')
  const combProps = {...data, deg, changeDeg}
  return useRoutes([
    {path: '/', element: <Navigate to='/current' replace/>},
    {path: '/current', element: <Current {...combProps}/>},
    {path: '/hourly', element: <Hourly {...combProps}/>},
    {path: '/forecast', element: <Forecast {...combProps}/>},
  ])
}