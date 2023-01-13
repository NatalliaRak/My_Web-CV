import React from "react";


export default function CatText(){


    return(
        <div>
            <h3>OBJECTIVE</h3>
            <p>
            The web-app is on React.js. It uses the TMDB API to find the movie by the word in the title. The app uses Bootstrap for styling and creating Popovers and Axios as the HTTP-client.
             </p>
            <h4>BACKGROUND</h4>
            The Movie Finder searchs for the basic movie information by the word in the title in the TMDB data. It provides the Poster Image, the Title, the Release date, in the PopOver there are: Capture image, Vote average,the Movie Genre and the Overview.

            <ul>
            The app uses:

                <li>React </li>
                <li>Bootstrap; </li>
                <li>Axios React; </li>
                <li>TMDB Api</li>
            </ul>
            <h3>TECHNICAL DESIGN</h3>

           <p> 
           The app uses the <i>useState</i> for the changing the state to search the movie. Array.map() spreadly used to get the necessary information from the data. If else also spreadly used for showing the template image if there the data is null and to get the information about the Movie genres. Bootstrap Popover is used to provide more information about movie and hide the diffrence between the possible box height.
           </p>
           
            
        </div>
    )
}