import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Cat from '../../../media/cat.png';
import ButCat from '../../Readme/Cat/Cat';
import { Button } from "react-bootstrap";
import Git from './GitCat'

export default function CatRow(){


    return(
        <Row>
            <h3>Cat search</h3>
          <Col md={6}>
            
          <Figure>
              <Figure.Image
                className="img-fluid rounded"
                alt="Cat"
                src={Cat}
              />
           </Figure>
          </Col>
          <Col md={6}>
          <br/>
            <p>The React Router Cat API app</p>
            <ButCat />
             <br/>
             <br/>
             <Button> <a href="https://charming-cheesecake-90a078.netlify.app">
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