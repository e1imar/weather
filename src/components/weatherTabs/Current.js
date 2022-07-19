import { Button, Grid, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/system";
import {ReactComponent as HumidityIcon} from '../icons/humidity-svgrepo-com(2).svg'
import {ReactComponent as WindIcon} from '../icons/windIcon.svg'

export default function Current ({location, current, deg, changeDeg}) {
  if (!location) return <CircularProgress />
  return <Grid container justifyContent="center">
    <Grid item container direction='column' sm={4} justifyContent="center">
      <Grid item><Typography variant='h5'>{location.name}</Typography></Grid>
      <Grid item><Typography>{current.condition.text}</Typography></Grid>
    </Grid>
      <Grid item container direction='column' xs={6} sm={4}>
        <Grid container item alignItems="flex-start" justifyContent="center">
          <Typography sx={{fontSize: '2rem'}}>{current['temp_' + deg]}</Typography>
          <Button onClick={changeDeg} sx={{minWidth: 25}}>&deg;{deg}</Button>
        </Grid>
        <Grid item><Typography>feels like {current['feelslike_' + deg]}&deg;</Typography></Grid>
      </Grid>
      <Grid item container xs={4} alignItems='center' justifyContent="center">
        <Grid item>
          <Box display='inline' sx={{mx: 1}}><WindIcon/></Box>
          {current.wind_kph}
          km/h</Grid>
        <Grid item>
          <Box display='inline' sx={{mx: 1}}><HumidityIcon width='16' heigth='16'/></Box>
          humidity {current.humidity}%
        </Grid>
      </Grid>
    <Grid item container justifyContent={{xs: 'center'}} xs={4}>updated at {current.last_updated.split(' ')[1]}</Grid>
  </Grid>
}