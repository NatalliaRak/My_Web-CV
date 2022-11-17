import React from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



export default function Skills(){
    const style={
            fontSize: 16,
    }
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h2">My skills</Popover.Header>
          <Popover.Body style={style}>
            <ul> <b>Front-End Skills:</b>
                <li>HTML, CSS, JS</li>
                <li>React.js</li>
                <li>React Router</li>
                <li>Node.js</li>
                <li>Redux in progress</li>
                <li>Bootstrap for React and Bootstrap CSS</li>
                <li>W3CSS</li>
               <li>Linux Front-End Development</li>
               <li>Wordpress</li>
               <li>Joomla</li>
               <li>Visual Studio</li>
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
          </Popover.Body>
        </Popover>
      );
      const But = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button className="clickIt" variant="success">My skills</Button>
        </OverlayTrigger>
      );
    return(
          <But />
        
    )
}