import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Home from '../../../media/boot.png';
import ButHome from '../../Readme/Home/Home'
import { Button } from "react-bootstrap";
import Git from './GitHome'

export default function AdoptRow(){


    return(

        <Row>
            <h3>Scandinavian House</h3>
          <Col md={6}>
            
          <Figure>
              <Figure.Image
                className="img-fluid rounded"
                alt="Home"
                src={Home}
              />
           </Figure>
          </Col>
          <Col md={6}>
          <br/>
            <p>The mulipage web-app Adopt a pet uses React Router for dinamic routing</p>
              <br/>
              <br/>
             <ButHome />
             <br/>
             <br/>
             <Button> <a href="https://gleaming-dragon-8d1223.netlify.app/"> Visit the web-app
              </a>
            </Button> 
            <br/>
            <br/> 
             <Git />

             
          </Col>
        </Row>
    )    
}