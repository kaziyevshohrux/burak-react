import React from 'react';

import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';


function App() {
  return (
    <Container sx={ {background :"orange"}}>
      <Stack>
        <Box sx={{my:4}}>
          <Typography variant='h4' component={"h4"}>
             Create React app 

          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent="5">
            <Button variant='contained'> click me</Button>
          </RippleBadge>
          
        </Box>
       

      </Stack>
    </Container>

    
)}
export default App;
