import React from "react";


export default function FindText(){


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
                <li>pod-install for managing dependencies</li>
                <li>react native permissions for unifing permissions API for React Native on iOS, Android and Windows</li>
            </ul>

            <p>
            Also there are the keys and values in the Info.plist for getting IOS permissions for using the user's location. There are no Android requets for location, please, follow the React Native documantation to set them and Android requets location permission 
            </p>

            <h3>Usage</h3>

           <p>The universal way to run the project is to run the app with help of Expo Go</p>
           
            
        </div>
    )
}