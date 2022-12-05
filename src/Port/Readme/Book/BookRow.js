import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Book from '../../../media/book.png';
import ButBook from '../../Readme/Book/Book';
import { Button } from "react-bootstrap";
import Git from './GitBook'

export default function BookRow(){


    return(
        <Row>
            <h3>Book search</h3>
          <Col md={6}>
            
          <Figure>
              <Figure.Image
                className="img-fluid rounded"
                alt="Book"
                src={Book}
              />
           </Figure>
          </Col>
          <Col md={6}>
          <br/>
            <p>The Book Finder React app uses Google Books api</p>
            <ButBook />
             <br/>
             <br/>
             <Button> <a href="http://pastoral-flowers.surge.sh/">
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