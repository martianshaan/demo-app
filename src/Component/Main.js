import React from 'react'
import {Toolbar,Box,Typography} from '@mui/material';
function Main() {
  return (
    <div>
          <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 , background: 'rgba(245,245,255,255)',height:'100vh'}}
      >
        <Toolbar />
        <Typography paragraph>
          Play Songs
        </Typography>
        <Typography paragraph>
          Consequat 
        </Typography>
      </Box>
    </div>
  )
}

export default  Main;
