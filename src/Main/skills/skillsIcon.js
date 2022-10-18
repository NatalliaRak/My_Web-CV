import React from "react";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';


export default function SkillList(){

    return(
        <>
        <HtmlIcon className='animate__animated animate__tada icon animate__repeat-3' sx={{ fontSize: 55, color: '#4A0F5D' }} />
        <CssIcon className='animate__animated animate__tada icon animate__repeat-3' sx={{ fontSize: 55, color: '#4A0F5D' }} />
        <JavascriptIcon className='animate__animated animate__tada icon animate__repeat-3' sx={{ fontSize: 55, color: '#4A0F5D' }}/>
        </>
    )
}