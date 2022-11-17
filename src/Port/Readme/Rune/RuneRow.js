import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Rune from '../../../media/rune.png';
import ButRune from '../../Readme/Rune/Rune';
import Git from './GitRune'

export default function RuneRow(){


    return(
        <Row>
            <h3>NEWRUNE React Native app</h3>
          <Col md={6}>
            
          <Figure>
              <Figure.Image
                className="img-fluid rounded"
                alt="Find"
                src={Rune}
              />
           </Figure>
          </Col>
          <Col md={6}>
          <br/>
            <p>NEWRUNE React Native app (in Belarusian name is "Гаданне на рунах")</p>
            <p>This project uses simple JS methods Math.floor() and Math.random() for changing the this.state, the state change trigger is the onPress. That kind of JS-code can be used in any type of random apps including "fortune telling" like Runes, Tatot or "Yes-No-Maybe". The app is for the Belarusian end-user.</p>
             <br/>
             <ButRune/>
            <br/>
            <br/>
            <Git />

             
          </Col>
        </Row>
    )    
}