import React from "react";


export default function RuneText(){


    return(
        <div>
            <h3>Prerequisites:</h3>
            <ul>
                <li>Node.js</li>
                <li>Expo</li>
                <li>Socket.io</li>
                <li>Metro</li>
            </ul>

            <h4>Base dependencies:</h4>

            <ul>
                <li>expo for IOS and Android dev enviroment</li>
                <li>expo-location for getting GPS navigation</li>
                <li>metro-config for the JS bundling</li>
            </ul>

            <p>
            The app is quite simple and doesn't use some special permissions, also there is no special adaptations for work on IOS and Android. 
            </p>

            <h3>Usage</h3>

           <p>TThe universal way to run the project is to run the app with help of Expo Go</p>
           
            
        </div>
    )
}