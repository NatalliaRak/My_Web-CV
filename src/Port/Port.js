import React from "react";
import Container from 'react-bootstrap/Container';
import Jam from './Readme/Jam/JamRow';
import Adopt from './Readme/Adopt/AdoptRow';
import Home from './Readme/Home/HomeRaw';
import './readme.css';
import Find from './Readme/Find/FindRow';
import Rune from './Readme/Rune/RuneRow';
import Book from './Readme/Book/BookRow';
import Cat from './Readme/CatRow/';
import Movie from './Readme/Movie/MovieRow'


const Port = () => {
    const style={
      padding: '5%',
     
      
    }
    return(
      <>
       
      <Container className='animate__animated animate__fadeInDown' fluid style={style}>
          <h2>React and React Native Front-End works</h2>
          <br/>
          <br/>
          <Movie />
          <br/>
          <Cat />
          <br/>
          <Book />
          <br/>
          <Find />
          <br/>
          <Rune />
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
  