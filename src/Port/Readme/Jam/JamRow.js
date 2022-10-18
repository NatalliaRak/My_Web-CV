import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Jam from '../../../media/jam.png';
import ButJam from '../../Readme/Jam/Jam';
import { Button } from "react-bootstrap";
import Git from './GitJam';

export default function JamRow(){


    return(
        <Row>
            <h3>Jamming</h3>
          <Col md={6}>
            
          <Figure>
              <Figure.Image
                className="img-fluid rounded"
                alt="Jamming"
                src={Jam}
              />
           </Figure>
          </Col>
          <Col md={6}>
          <br/>
            <p>The web-app Jamming searches the tracks on Spotify, adds the searched tracks to the Playlist and saves it on the Spotify user’s library.
            </p>              

             <ButJam />
             <br/>
             <br/>
             <Button>
                   <a href="http://enjoy_silence.surge.sh/"> 
              Visit the web-app
                  </a>
              </Button>
              <br/>
             <br/>
             <Git />
             
          </Col>
        </Row>
    )    
}