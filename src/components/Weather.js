import React from "react";
import Box from '@mui/material/Box';

export default function Weather ({data}) {
  return <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh">
    <Box sx={{
      width: 300,
      height: 300,
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      }
    }}/>
  </Box>
}