import React from "react";
import Wave from 'react-wavify';


export default function Waves(){

    return(
        <Wave className="fixed-bottom" mask="url(#mask)" fill="#8D73D3" >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="20" width="2000" height="400" fill="url(#gradient)"  />
          </mask>
        </defs>
      </Wave>
    )
}