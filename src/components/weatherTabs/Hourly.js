import Hour from './Hour'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box } from '@mui/material';

export default function Hourly ({forecast, deg}) {
  const currentDate = new Date()

  const [firstD, secD, thirdD] = forecast.forecastday
  const days = [firstD.hour.filter(hour => currentDate < new Date(hour.time)), secD.hour, thirdD.hour]

  const daysAccord = days.map((day, i) => <Accordion
  TransitionProps={{ unmountOnExit: true }}
  defaultExpanded={i === 0}
  key={day[i].time_epoch}
  sx={{background: 'transparent'}}>
    <AccordionSummary>{new Date(day[i].time).toLocaleString('default', {weekday: 'long'})}</AccordionSummary>
    <AccordionDetails>{day.map(hour => <Hour key={hour.time} data={hour} deg={deg}/>)}</AccordionDetails>
  </Accordion>)
  
  return <Box width='1'>{daysAccord}</Box>
}