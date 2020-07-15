import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from 'react-bootstrap/Container'

const Jumbo = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome to my React Pokedex</h1>
        <p>
          Search for any Pokemon!
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;
