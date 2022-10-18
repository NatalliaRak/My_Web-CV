import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DirectContact from "./direct";
import Map from './map'

const Contact = () => {
  const style={
    padding: '5%',
   
    
  }
    return(
      <Container style={style}>
        <h2>Contact Me</h2>
        <Row>
          <Col md={8}>
               <DirectContact />
          </Col>
          <Col md={4}>
              <Map />
          </Col>

        </Row>
      </Container>
    )
  };
  
  export default Contact;
  