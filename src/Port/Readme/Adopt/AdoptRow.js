import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Adopt from '../../../media/adopt.png';
import ButAdopt from '../../Readme/Adopt/Adopt';
import { Button } from "react-bootstrap";
import Git from './GitAdopt'

export default function AdoptRow(){


    return(
        <Row>
            <h3>Adopt a pet</h3>
          <Col md={6}>
            
          <Figure>
              <Figure.Image
                className="img-fluid rounded"
                alt="Adopt"
                src={Adopt}
              />
           </Figure>
          </Col>
          <Col md={6}>
          <br/>
            <p>The mulipage web-app Adopt a pet uses React Router for dinamic routing</p>
            <ButAdopt />
             <br/>
             <br/>
             <Button> <a href="https://leafy-cuchufli-8c9e63.netlify.app/">
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