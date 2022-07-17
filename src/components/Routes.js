import {useRoutes, Navigate} from 'react-router-dom'
import Current from './weatherTabs/Current'
import Hourly from './weatherTabs/Hourly'
import Forecast from './weatherTabs/Forecast'

export default function Routes () {
  return useRoutes([
    {path: '/', element: <Navigate to='/current' replace/>},
    {path: '/current', element: <Current/>},
    {path: '/hourly', element: <Hourly/>},
    {path: '/forecast', element: <Forecast/>},
  ])
}