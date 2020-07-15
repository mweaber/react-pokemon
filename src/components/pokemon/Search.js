import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => this.setState({ text: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({text:''})
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Pokedex</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={this.onChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Search;
