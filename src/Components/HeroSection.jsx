import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import image from '../assets/Illustration.png';

const HeroSection = () => {
  return (
    
       <Box sx={{display:'flex',justifyContent:'space-around', alignItems:'center'}}>
                <Box sx={{color:'#4D4D4D'}}>
                    <Typography variant='h3'>Lessons and insights</Typography>
                    <Typography variant='h4'sx={{color:'green', fontWeight:'bold', margin:'10px 0px'}}>from 8 years</Typography>
                    <Typography>Where to grow your business as a photographer: site or social media?</Typography>
                    <Button variant="contained" color="success" sx={{margin:'20px 0px'}}>Register</Button>
                </Box>
                <Box sx={{margin:'40px 0px'}}>
                    <img src={image} alt="img"  />

                </Box>
            </Box>
    
  )
}

export default HeroSection
