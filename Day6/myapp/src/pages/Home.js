import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'center',
  height:10,
  color: theme.palette.text.secondary,
}));

function Home()
{
    return(
        <>
    <Box sx={{ flexGrow: 1}}>
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Item sx={{backgroundColor:'yellow'}}>Hello</Item>
      </Grid>
      <Grid item xs={3}>
      <Item sx={{backgroundColor:'violet'}}>HI</Item>
      </Grid>
      <Grid item xs={3}>
      <Item sx={{backgroundColor:'pink'}}>WELCOME</Item>
      </Grid>
      <Grid item xs={3}>
      <Item sx={{backgroundColor:'orange'}}>GOOD EVENING</Item>
      </Grid>
    </Grid>
  </Box>
        </>
    )
}
export default Home;