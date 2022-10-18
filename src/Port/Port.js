import React from "react";
import Container from 'react-bootstrap/Container';
import Jam from './Readme/Jam/JamRow';
import Adopt from './Readme/Adopt/AdoptRow';
import Home from './Readme/Home/HomeRaw';
import './readme.css';


const Port = () => {
    const style={
      padding: '5%',
     
      
    }
    return(
      <>
       
      <Container className='animate__animated animate__fadeInDown' fluid style={style}>
          <h2>Portfolio, Student Front-End works</h2>
          <br/>
          <br/>

           <Jam />
           <br/>
           <Adopt className='animate__animated animate__fadeInDownBig' />
           <br/>
           <Home className='animate__animated animate__fadeInDownBig' />
      </Container>
      </>
    ) 
  }
  
  export default Port;
  