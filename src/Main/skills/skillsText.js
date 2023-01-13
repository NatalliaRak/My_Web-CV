import React from "react";


export default function SkillsText(){
    const style={
        fontSize: 16,
}

    return(
        <div style={style}>
          <ul> <b>Front-End Skills:</b>
                <li>React.js</li>
                <li>Node.js</li>
                <li>HTML, CSS, JS</li>
                <li>React Native</li>
                <li>Expo</li>
                <li>Bootstrap for React and Bootstrap CSS</li>
                <li>W3CSS CSS-library</li>
               <li>Front-End Development on Linux</li>
               <li>Redux in progress</li>
               <li>Wordpress</li>
               <li>Joomla</li>
            </ul>
            <ul> <b>Other skills:</b>
                <li>Basic UI/UX Design</li>
                <li>Photoshop</li>
                <li>Project management</li>
            </ul>
            <ul> <b>Languages:</b>
                <li>English (C1/C2)</li>
                <li>Belarusian (First Native Language)</li>
                <li>Russian (Second Native Language)</li>
                <li>Polish in progress</li>
                <li>Grammar and lexicon basics of Hebrew, German and Romanian languages</li>
            </ul>
        </div>
    )
}