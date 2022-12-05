import React from "react";


export default function BookText(){


    return(
        <div>
            <h3>OBJECTIVE</h3>
            <p>
            The React app uses the Google Books Api to find ans render basic information about the book: cover, title, ISBN, the date of the publishing, publisher and author. Also there is the button that links to the Google Books page. The app uses Bootstap React for styling. The end-user is for a Belarusian speaker.
             </p>
            <h4>BACKGROUND</h4>
            <ul>
            The app uses:

                <li>React 18.2; </li>
                <li>Bootstrap; </li>
                <li>Axios React; </li>
            </ul> 
            <p>The Axios React is used for getiing Google Books data. The Bootstap React helps to style and organise the rendering data from Google Books.
             </p>
            <h3>TECHNICAL DESIGN</h3>

           <p> 
           The Book Search app uses <i>useState</i> for setting the search term and the search results. If there is no data about book cover, ISBN, authour or publisher, there are the template notes about the lack of the information with use of if() else. The Google Book page opens on a new page with target="_blank". There is the pattern term for the search input word - not less then 4 letters
           </p>
           
            
        </div>
    )
}