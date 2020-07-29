import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import PropTypes from 'prop-types'
import axios from 'axios';



const Search =() => {
  const [text, setText] = useState('')


  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text)
    // searchPokemon(text);
    setText('')
  };

  // const searchPokemon = async (text) => {
  //   const res = await axios.get( `https://pokeapi.co/api/v2/pokemon/${text}`)
  // }


    return (
      <Container>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Pokedex</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    );

}

Search.propTypes ={
    searchPokemon: PropTypes.func.isRequired,
}

export default Search;
