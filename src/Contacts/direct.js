import React from "react";
import { Container } from "react-bootstrap";
import WU from '../media/Wup.jpg';
import Figure from 'react-bootstrap/Figure';
import Link from '../Social/Link';
import Git from '../Social/Git';


export default function DirectContact(){



    return( 
        <>
          <Container>
              
              <br/>
             <a href="mailto:natallia.rak@protonmail.com" className="colorIt">natallia.rak@protonmail.com</a>
             <br/>
             <Link />
              <br/>
              <Git />
              <br/>
            <Figure>
              <Figure.Image
              width='50%'
                className="img-fluid rounded"
                alt="WhatsApp"
                src={WU}
              />
           </Figure>
           <p>Since November 2021 I live in Bialystok, in Poland. I have the right to work in EU.</p>
 
          </Container>
        </>
    )
}