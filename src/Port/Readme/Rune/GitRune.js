import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';


export default function GitR(){

    return(
        <IconButton aria-label="Github.com" onClick={() => window.open('https://github.com/NatalliaRak/ReactNativ_Rune_Fortune_Teller')}>
            <GitHubIcon className='animate__animated animate__bounce icon animate__repeat-3' sx={{ fontSize: 55, color: 'black' }} />

        </IconButton>
    )
}