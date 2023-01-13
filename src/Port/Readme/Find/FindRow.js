import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Find from '../../../media/fin.png';
import ButFind from '../../Readme/Find/Find';
import Git from './GitFind'

export default function FindRow(){


    return(
        <Row>
            <h3>Find_me</h3>
          <Col md={6}>
            
          <Figure>
              <Figure.Image
                className="img-fluid rounded"
                alt="Find"
                src={Find}
              />
           </Figure>
          </Col>
          <Col md={6}>
          <br/>
            <p>FIND_ME React Native app (in Belarusian name is "ДЗЕ_Я")</p>
            <p>This project uses GPS-location information for quick showing of the user's coordinates, sharing the accurate coordinates (longitude and latitude) and getting the accurate adress information (including building number). That project can be an app prototype for sharing the location in situations of danger as the project helps to share very accurate location information without using navigator what helps to reduce steps in sharing cordinates. The end-user's language is the Belarusian one</p>
            <ButFind />
             <br/>
             <br/>
            <br/>
            <br/>
            <Git />

             
          </Col>
        </Row>
    )    
}