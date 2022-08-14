import {React,useState} from 'react'
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import './Footer.css'

function Footer() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='footer'>
      <div className= 'footer_left'>
        <FavoriteBorderRoundedIcon className="footer__icon"/>
        <AddRoundedIcon className="footer__icon" />
      </div>
      <div className= 'footer_center'>
        <ShuffleRoundedIcon className="footer__grey" />
        <SkipPreviousRoundedIcon className="footer__icon"/>
        <PlayCircleOutlineRoundedIcon fontSize='large' className="footer__icon" />
        <SkipNextRoundedIcon className="footer__icon"/>
        <LoopRoundedIcon className="footer__grey"/>
      </div>
      <div className= 'foooter_right'>
      <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDownRoundedIcon/>
        <Slider aria-label="Volume" value={value} onChange={handleChange} size="small" sx={{color:'black'}}/>
        <VolumeUpRoundedIcon/>
      </Stack>
    </Box>
      </div>
    </div>
  )
}

export default Footer