import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


const Search = ({ searchPokemon }) => {
  const [text, setText] = useState('')
 
  const onSubmit = (e) => {
    e.preventDefault();
    searchPokemon(text)
  };
  
  const onChange = (e) => setText(e.target.value);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Pokedex</Form.Label>
          <Form.Control
            type='text'
            placeholder="Search"
            onChange={onChange}
            value={text}
            name='text'
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Search
          </Button>
      </Form>
    </Container>
  );

}

export default Search;
