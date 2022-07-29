import {ReactComponent as PrecipIcon} from '../../icons/precip.svg'
import {ReactComponent as Rain} from '../../icons/rain.svg'
import {ReactComponent as Snow} from '../../icons/snow.svg'
import {ReactComponent as HumidityIcon} from '../../icons/humidity-svgrepo-com(2).svg'
import {ReactComponent as WindIcon} from '../../icons/windIcon.svg'
import {ReactComponent as Vision} from '../../icons/vis.svg'
import {ReactComponent as Gauge} from '../../icons/gauge.svg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Grid, Typography, Box } from '@mui/material';
import { useState } from 'react';

export default function Hour ({data, deg}) {
  const {
    humidity,
    wind_kph,
    condition,
    vis_km,
    precip_mm,
    pressure_mb,
    chance_of_rain,
    chance_of_snow,
    time
  } = data
  const [expanded, setExpanded] = useState(false)
  const onAccordionClick = (e, expanded) => setExpanded(expanded)

  const hour = new Date(time).toLocaleString('default', {hour: 'numeric'})

  const svgSize = {width: '14', height: '14'}
  
  const snowOrRain = (() => {
    if (chance_of_rain > chance_of_snow) return <Typography>
      <Rain {...svgSize}/> {chance_of_rain}%
    </Typography>
    if (chance_of_rain < chance_of_snow) return <Typography>
      <Snow {...svgSize}/> {chance_of_snow}%
    </Typography>
  })()

  const shortInfo = <Grid container>
    <Grid item xs textAlign='right'><Typography>{hour}</Typography></Grid>
    <Grid item xs textAlign='center'><Box component='img' src={condition.icon} alt={condition.text} sx={{width: 24, height: 24}}/></Grid>
    <Grid item xs><Typography>{data['temp_' + deg]}&deg;</Typography></Grid>
    <Grid item xs>{snowOrRain}</Grid>
  </Grid>

  const fullInfo = <Grid container alignItems="center" justifyContent="space-evenly">
    <Grid item container><Typography>{hour}</Typography></Grid>
    <Typography variant='h6'>{condition.text}</Typography>
    <Box component='img' src={condition.icon} alt={condition.text} sx={{width: 50, height: 50}}/>
    <Typography variant='h4' sx={{mr: 1}}>{data['temp_' + deg]}&deg;</Typography>
    <Typography>feels like {data['feelslike_' + deg]}</Typography>
    <Grid container  alignItems="center" justifyContent="space-evenly">
      {chance_of_rain > 0 && <Typography>
        <Rain {...svgSize}/> {chance_of_rain}%
      </Typography>}
      {chance_of_snow > 0 && <Typography>
        <Snow {...svgSize}/> {chance_of_snow}%
      </Typography>}
      {precip_mm > 0 && <Typography>
        <PrecipIcon width='15' height='15'/> {precip_mm}mm
      </Typography>}
      <Typography><HumidityIcon {...svgSize}/> humidity {humidity}%</Typography>
    </Grid>
    <Typography><WindIcon {...svgSize}/> {wind_kph}km/h</Typography>
    <Typography><Vision {...svgSize}/> {vis_km}km</Typography>
    <Typography><Gauge fill='currentColor' width='16' height='16'/> {pressure_mb} mbar</Typography>
  </Grid>
  
  return <Box width='1'>
    <Accordion sx={{background: 'transparent'}} onChange={onAccordionClick}>
      <AccordionSummary>
        {expanded ? fullInfo : shortInfo}
      </AccordionSummary>
    </Accordion>
  </Box>
}