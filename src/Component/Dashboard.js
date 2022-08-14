import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar  from './Sidebar';
import Topbar from './Topbar';
import "./sidebar.css";
import Main from './Main';
import Footer from './Music Components/Footer';


const drawerWidth = 240;

export default function Dashboard() {
  return (
    <Box>
    <Box sx={{ display: 'flex', height:'100vh' }}>
      <CssBaseline/>
      <Topbar/>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Sidebar/>
      </Drawer>
      <Box sx={{width: `calc(100% - ${drawerWidth}px)`}} >
      <Main/>
      
      </Box>
      </Box>
      <Box sx={{height:'100vh-90px',width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` ,bgcolor:'white'}}>
      <Footer/>
      </Box>
      </Box>
  )
}

