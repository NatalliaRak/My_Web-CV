import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import IconButton from '@mui/material/IconButton';

export default function Linked(){


    return(
        <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/natallia-rak-182a97214/')}>
          <LinkedInIcon className='animate__animated animate__bounce icon' sx={{ fontSize: 55, color: '#A60FCC' }} />
        </IconButton>
    )
}