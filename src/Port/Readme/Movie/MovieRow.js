import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Movie from '../../../media/movie.png';
import ButMovie from '../../Readme/Movie/Movie';
import { Button } from "react-bootstrap";
import Git from './GitMovie'

export default function MovieRow(){


    return(
        <Row>
            <h3>The React Find Movie app</h3>
          <Col md={6}>
            
          <Figure>
              <Figure.Image
                className="img-fluid rounded"
                alt="Movie"
                src={Movie}
              />
           </Figure>
          </Col>
          <Col md={6}>
          <br/>
            <p>The web-app is on React.js.</p>
            <ButMovie />
             <br/>
             <br/>
             <Button> <a href="http://brief-paint.surge.sh/">
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