import {useRoutes, Navigate} from 'react-router-dom'
import Current from './weatherTabs/Current'
import Hourly from './weatherTabs/Hourly'
import Daily from './weatherTabs/Daily'
import { useState } from 'react'

export default function Routes ({data}) {
  const [deg, setDeg] = useState('c')
  const read = data.read()
  const changeDeg = () => setDeg(prev => prev === 'c' ? 'f' : 'c')
  const combProps = {...read, deg, changeDeg}
  
  return useRoutes([
    {path: '/', element: <Navigate to='/current' replace/>},
    {path: '/current', element: <Current {...combProps}/>},
    {path: '/hourly', element: <Hourly {...combProps}/>},
    {path: '/daily', element: <Daily {...combProps}/>},
  ])
}