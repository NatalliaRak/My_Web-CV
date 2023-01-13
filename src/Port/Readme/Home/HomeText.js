import React from "react";


export default function HomeText(){


    return(
        <div>
            <h3>OBJECTIVE</h3>

            <p>The web-app Scandinavian Home is a template fror the web-app that perfoms the basic presentation for the diffrent types of houses in the Scandinavian countries. The web-app uses <b>React.js</b>, <b>Bootstrap for React.js</b>.</p>
            <h3>BACKGROUND</h3>

            <ul>There are Bootsrap's Components for React.js:
                <li>Flexible LayOut</li>
                <li>Basic Form</li>
                <li>Cards</li>
                <li>Slider</li>

            </ul>
            <ul>There are also React.js Components for:

                <li>Chenking the country is it Scandinavian</li>
                <li>Possibility to note information about the Scandinavian countries in the Bootstrap Cards</li>
            </ul> 
            <h3>TECHNICAL DESIGN</h3>

            <ul>Scandinavian Home App.js has:</ul> 
               <li>Header</li>
               <li>Slider Component</li>
               <li> Layout Component</li>
               <li>Scandinavian</li>
               <li> Cards Component</li>
               <li>Form</li>
               <p>The Scandinavian Component uses if else in props for checking the elements in the arrays. It gives the possibility to predict some user's inputs. The Grid Components consit props for the Virtual DOM manipulations.
               </p>
        </div>
    )
}