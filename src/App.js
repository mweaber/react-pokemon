import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Jumbo from "./components/layout/Jumbo";
import Search from './components/pokemon/Search';
import About from "./components/pages/About";
import Pokemon from './components/pokemon/Pokemon';

import Container from "react-bootstrap/Container";
import "./App.css";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Fragment>
              <Jumbo />
              <Search />
              <Container>
                <Pokemon />
              </Container>
            </Fragment>
          </Route>
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );

}


export default App;
