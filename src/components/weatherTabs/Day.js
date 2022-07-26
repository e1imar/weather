import {ReactComponent as PrecipIcon} from '../../icons/precip.svg'
import {ReactComponent as Rain} from '../../icons/rain.svg'
import {ReactComponent as Snow} from '../../icons/snow.svg'
import {ReactComponent as HumidityIcon} from '../../icons/humidity-svgrepo-com(2).svg'
import {ReactComponent as WindIcon} from '../../icons/windIcon.svg'
import {ReactComponent as Sunrise} from '../../icons/sunrise.svg'
import {ReactComponent as Sunset} from '../../icons/sunset.svg'
import {ReactComponent as Vision} from '../../icons/vis.svg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Grid, Typography, Box } from '@mui/material';
import { useState } from 'react';


export default function Day ({day, deg}) {
  const [expanded, setExpanded] = useState(false)
  const onAccordionClick = (e, expanded) => setExpanded(expanded)

  const date = new Date(day.date)
  const dayMonth = date.toLocaleString("default", { month: "long", day: 'numeric' })
  const monthWeekDay = date.toLocaleString("default", { month: "long", weekday: 'long', day: 'numeric' })
  const dayInfo = day.day
  const {
    maxwind_kph,
    avghumidity,
    condition,
    avgvis_km,
    totalprecip_mm,
    daily_chance_of_rain,
    daily_chance_of_snow
  } = dayInfo

  const svgSize = {width: '14', height: '14'}
  
  const snowOrRain = (() => {
    if (daily_chance_of_rain > daily_chance_of_snow) return <Typography>
      <Rain {...svgSize}/> {daily_chance_of_rain}%
    </Typography>
    if (daily_chance_of_rain < daily_chance_of_snow) return <Typography>
      <Snow {...svgSize}/> {daily_chance_of_snow}%
    </Typography>
  })()

  const shortInfo = <Grid container alignItems="center">
    <Grid item xs textAlign='center'><Typography>{dayMonth}</Typography></Grid>
    <Grid item xs textAlign='center'><Box component='img' src={condition.icon} alt={condition.text} sx={{width: 24, height: 24}}/></Grid>
    <Grid item xs><Typography>{dayInfo['avgtemp_' + deg]}&deg;</Typography></Grid>
    <Grid item xs><Typography variant='body2'>{dayInfo['mintemp_' + deg]}&deg; night</Typography></Grid>
    <Grid item xs>{snowOrRain}</Grid>
  </Grid>

  const fullInfo = <Grid container alignItems="center" justifyContent="space-evenly">
    <Grid item container><Typography>{monthWeekDay}</Typography></Grid>
    <Typography variant='h6'>{condition.text}</Typography>
    <Box component='img' src={condition.icon} alt={condition.text} sx={{width: 50, height: 50}}/>
    <Grid container item alignItems="center" justifyContent="space-evenly" xs='auto'>
      <Typography variant='h4' sx={{mr: 1}}>{dayInfo['avgtemp_' + deg]}&deg;</Typography>
      <Box>
        <Typography>H {dayInfo['maxtemp_' + deg]}&deg;</Typography>
        <Typography>L {dayInfo['mintemp_' + deg]}&deg;</Typography>
      </Box>
    </Grid>
    <Box>
      <Typography><Sunrise {...svgSize}/> {day.astro.sunrise}</Typography>
      <Typography><Sunset {...svgSize}/> {day.astro.sunset}</Typography>
    </Box>
    <Grid container  alignItems="center" justifyContent="space-evenly">
      {daily_chance_of_rain > 0 && <Typography>
        <Rain {...svgSize}/> {daily_chance_of_rain}%
      </Typography>}
      {daily_chance_of_snow > 0 && <Typography>
        <Snow {...svgSize}/> {daily_chance_of_snow}%
      </Typography>}
      {totalprecip_mm > 0 && <Typography>
        <PrecipIcon width='15' height='15'/> {totalprecip_mm}mm
      </Typography>}
      <Typography><HumidityIcon {...svgSize}/> humidity {avghumidity}%</Typography>
    </Grid>
    <Typography><WindIcon {...svgSize}/> {maxwind_kph}km/h</Typography>
    <Typography><Vision {...svgSize}/> {avgvis_km}km</Typography>
  </Grid>
  
  return <Box width='1'>
    <Accordion sx={{background: 'transparent'}} onChange={onAccordionClick}>
      <AccordionSummary>
        {expanded ? fullInfo : shortInfo}
      </AccordionSummary>
    </Accordion>
  </Box>
}