import React from "react";


export default function CatText(){


    return(
        <div>
            <h3>OBJECTIVE</h3>
            <p>
            The web-app is on React.js. It uses the Fake API to fill in content with the real-like E-commerce content. The app uses Bootstrap for styling and creating Layouts Popovers and Axios as the HTTP-client.
             </p>
            <h4>BACKGROUND</h4>

            <ul>
            The app uses:

                <li>React </li>
                <li>React Router; </li>
                <li>Bootstrap; </li>
                <li>Axios React; </li>
                <li>FakeAPI </li>
            </ul> 
            <p>The E-Coomerce on React web-app creates the Template for the commercial web-app. The Fake API helps to create the inner logic of the commercial web-app: categories of goods, all goods on the first page. Also there is the possibilty to move the goods to the Cart.
             </p>
            <h3>TECHNICAL DESIGN</h3>

           <p> 
           The app uses {useContext} and {useReducer} - the React Hooks for creating globalContext and keeping and using the state of the ADD and REMOVE in the Cart. Axios is used as the HTTP-client.
           </p>
           
            
        </div>
    )
}