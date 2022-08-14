import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Likedsongs() {
  return (
    <Card>
        <CardMedia
        component='img'
        height='140'
        width='50'
        image='https://source.unsplash.com/random'
        alt='images'/>

        <CardContent>
            <Typography variant='h2'> Liked Songs </Typography>
            <Typography variant='body2' > 18 songs </Typography>
        </CardContent>
        <CardActions>
            <Button>Play</Button>
        </CardActions>
    </Card>
  )
}

export default Likedsongs