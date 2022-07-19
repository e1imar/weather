import * as React from 'react';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import throttle from 'lodash/throttle';

export default function Search({setCity}) {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  
  const getCities = React.useMemo(
    () =>
      throttle((city, callback) => {
          fetch(`${process.env.REACT_APP_API_URL}search.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`)
          .then(res => res.json())
          .then(callback)
      }, 200),
    [],
  );

  useEffect(() => {
    let active = true;

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    getCities(inputValue, results => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, getCities]);

  return (
    <Autocomplete
      freeSolo
      sx={{ width: 1, input: {textAlign: "center", textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}, "& label": {right: 0, textAlign: "center"}}}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.name
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);

        let city
        if (typeof newValue === 'string') {city = newValue}
        if (newValue && typeof newValue === 'object') {city = `${newValue.lat},${newValue.lon}`}
        setCity(city)
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Enter your location" fullWidth variant="standard" />
      )}
      renderOption={(props, option) => <li {...props}>
        <Typography variant="body2" color="text.secondary" sx={{flexGrow: 1, textAlign: "center"}}>
          {option.name} ({option.region})
        </Typography>
      </li>}
    />
  );
}