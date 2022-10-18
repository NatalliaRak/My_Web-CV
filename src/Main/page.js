import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imag  from '../media/me.jpeg';
import Figure from 'react-bootstrap/Figure';
import 'animate.css';
import Skills from "./skills/skillsBut";
import Linked from '../Social/Link';
import Git from '../Social/Git';
import SkillList from './skills/skillsIcon';


const Page = () => {
    const style={
      padding: '10%'
    }
      return(
        <Container fluid>
        <Row style={style}>
          <Col md={6} className="animate__animated animate__fadeInDownBig">
          <div>
            <h2 className='animate__animated animate__flip'>Hey!</h2>
            <p style={{fontSize:25}} >
            My name is Natallia, I'm a <b>Junior Front-End Developer</b>. 
            <br />
            <SkillList />
            <br/>
            I live in Bialystok, PL and search for the my first super-puper job in IT.
            </p>
            <div className="text-center">
                <Skills />
            <br />
            <br />
                <Linked />
          <br />
                <Git />
          <br />
          </div>
            </div>
          </Col>
          <Col md={6} className="animate__animated animate__fadeInDownBig">
            <Figure>
              <Figure.Image
                style={{maxHeight:500}}
                className="img-fluid rounded"
                alt="NR"
                src={Imag}
              />
           </Figure>
          </Col>
        </Row>
      </Container>
  
      )
    };
    
    export default Page;
    
