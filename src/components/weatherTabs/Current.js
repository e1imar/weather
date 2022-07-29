import { Button, Grid, Typography, Box } from "@mui/material";
import {ReactComponent as HumidityIcon} from '../../icons/humidity-svgrepo-com(2).svg'
import {ReactComponent as WindIcon} from '../../icons/windIcon.svg'
import {ReactComponent as Gauge} from '../../icons/gauge.svg'

export default function Current ({location, current, deg, changeDeg}) {
  return <Grid container justifyContent="space-evenly" alignItems='center'  sx={{my: 1, textAlign: 'center'}}>
    <Grid container item justifyContent="center" sm><Typography variant='h4'>{location.name}</Typography></Grid>
    <Grid item container direction='column' xs alignItems='center'>
      <Box component='img' src={current.condition.icon} alt={current.condition.text} sx={{width: 50, height: 50}}/>
      <Typography>{current.condition.text}</Typography>
    </Grid>
    <Grid item container direction='column' xs>
      <Grid container item alignItems="flex-start" justifyContent="center">
        <Typography sx={{fontSize: '2rem'}}>{current['temp_' + deg]}</Typography>
        <Button onClick={changeDeg} sx={{minWidth: 25}}>&deg;{deg}</Button>
      </Grid>
      <Typography>feels like {current['feelslike_' + deg]}</Typography>
    </Grid>
    <Grid container justifyContent="space-evenly" sx={{my: 2}}>
      <Grid item sm>
        <Typography>
          <WindIcon/> {current.wind_kph}km/h
        </Typography>
      </Grid>
      <Grid item sm>
        <Typography sx={{mx: 1}}>
          <HumidityIcon width='16' height='16'/> humidity {current.humidity}%
        </Typography>
      </Grid>
      <Grid item sm>
        <Typography>
          <Gauge fill='currentColor' width='16' height='16'/> {current.pressure_mb} mbar
        </Typography>
      </Grid>
    </Grid>
    <Typography sx={{position: 'fixed', bottom: 0, my: 2}}>updated at {current.last_updated.split(' ')[1]}</Typography>
  </Grid>
}