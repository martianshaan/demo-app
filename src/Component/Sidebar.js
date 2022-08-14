import { Box, flexbox } from '@mui/system'
import React from 'react'
import {List, Divider,ListItemButton,ListItemIcon ,ListItemText ,Toolbar, Typography  }from '@mui/material';
import ListItem, { listItemClasses } from "@mui/material/ListItem";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./sidebar.css";
import swarlogo from '../Images/swarlogo.png';

const Pages =['Home', 'Your Library'];

function Sidebar() {
  return (
    <div className='sidebar'>
      <Toolbar sx={{height :'5vh', display: flexbox}}>
       <img
        className="sidebarlogo"
        src={swarlogo}
        alt=""
      />
      <h4>SWAR APP</h4>
      </Toolbar>
        <Divider />
        <Box sx={{height :'20vh', color:'grey' , cursor:'pointer' , 
        transition :'200 ms color ease in'}} p={0} m={0} className='Tabs'>
        <List sx={{ 
            [`& .active, & .${listItemClasses.root}:hover`]: {
              color: "white",
              fontWeight: "bold",
              bgcolor: 'black',
              "& svg": {
                fill: "white",
              }
            }
          }}>
          {Pages.map((page,index)=>
           <ListItem key={page}  disablePadding>
           <ListItemButton variant="outlined">
             <ListItemIcon >
             {index % 2 === 0 ? <HomeRoundedIcon/> :  <LibraryMusicRoundedIcon/>}
             </ListItemIcon>
             <ListItemText primary={page} color= 'darkgrey' />
           </ListItemButton>
           </ListItem>)}
        </List>
        </Box>

        <Divider />
        <Box sx={{ height : '60vh'}} className='mysongs'>
          <Typography>My Songs</Typography>
          </Box>
        <Box sx={{ height : '10vh'}} className='account'>
        <Divider/>
        <List position= "fixed" sx={{borttom:0 }}>
            <ListItem key={'Account'} disablePadding >
              <ListItemButton>
                <ListItemIcon>
                 <AccountCircleRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary={'User'}/>
              </ListItemButton>
            </ListItem>
        </List>
        </Box>
    </div>
  

  )
}
export default Sidebar