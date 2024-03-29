import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Com from '../../../media/com.png';
import ButCom from '../../Readme/Com/Com';
import { Button } from "react-bootstrap";
import Git from './GitCom'

export default function ComRow(){


    return(
        <Row>
            <h3>E-Commercial on React</h3>
          <Col md={6}>
            
          <Figure>
              <Figure.Image
                className="img-fluid rounded"
                alt="Com"
                src={Com}
              />
           </Figure>
          </Col>
          <Col md={6}>
          <br/>
            <p>React Router E-Commerce web-app</p>
            <ButCom />
             <br/>
             <br/>
             <Button> <a href="https://steady-ganache-1fe537.netlify.app/">
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
