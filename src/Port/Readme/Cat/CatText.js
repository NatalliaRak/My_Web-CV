import React from "react";


export default function CatText(){


    return(
        <div>
            <h3>OBJECTIVE</h3>
            <p>
            The web-app perfoms a React Router app that uses Cat API. The app uses Cat API data to create Router NavLinks for navigation on the Cat Breeds. React Bootstrap is used for styling. Axios is used as HTTP client.
             </p>
            <h4>BACKGROUND</h4>

            <ul>
            The app uses:

                <li>React </li>
                <li>React Router; </li>
                <li>Bootstrap; </li>
                <li>Axios React; </li>
                <li>Cat API; </li>
            </ul> 
            <p>The React Router Cat API app has three pages, the naviagation between them are guaranteed by The React Router libtary. On the Home page there are the Cat API data full-screen random images. On the page Cat Breeds there are the Cat Api breeds titles data. On the Breed Page there are the Cat API breed information data: the breed name, the breed cat random image, the basic information.
             </p>
            <h3>TECHNICAL DESIGN</h3>

           <p> 
           The app spreadly uses {useState} and {useEffect} for geting the information from the API. React Router's navigation helps to create the easy navigation berween the Cat Breed list page and the page with the Breed information. To get the information for the certain breed from the Api data {useParams} is used. For the visualisation of the breed specification the Bootstrap is used (the data information is multiplied on 10). The app uses the Bootstarp grid ClassNames. Also the Bootstrap Carousel is used.
           </p>
           
            
        </div>
    )
}