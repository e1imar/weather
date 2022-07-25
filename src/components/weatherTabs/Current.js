import { Button, Grid, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/system";
import {ReactComponent as HumidityIcon} from '../../icons/humidity-svgrepo-com(2).svg'
import {ReactComponent as WindIcon} from '../../icons/windIcon.svg'

export default function Current ({location, current, deg, changeDeg}) {
  if (!location) return <CircularProgress />
  return <Grid container justifyContent="center"  sx={{my: 1}}>
    <Grid item container direction='column' sm={4} justifyContent="center">
      <Typography variant='h5'>{location.name}</Typography>
      <Typography>{current.condition.text}</Typography>
    </Grid>
    <Grid item container direction='column' xs={6} sm={4}>
      <Grid container item alignItems="flex-start" justifyContent="center">
        <Typography sx={{fontSize: '2rem'}}>{current['temp_' + deg]}</Typography>
        <Button onClick={changeDeg} sx={{minWidth: 25}}>&deg;{deg}</Button>
      </Grid>
      <Typography>feels like {current['feelslike_' + deg]}&deg;</Typography>
    </Grid>
    <Grid item container xs={6}  sm={4} alignItems='center' justifyContent="center" direction='column'>
      <Box>
        <WindIcon/> {current.wind_kph}km/h
      </Box>
      <Box>
        <HumidityIcon width='16' height='16'/> humidity {current.humidity}%
      </Box>
    </Grid>
    <Box>updated at {current.last_updated.split(' ')[1]}</Box>
  </Grid>
}