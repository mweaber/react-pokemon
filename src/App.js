import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Jumbo from "./components/layout/Jumbo";
import Search from './components/pokemon/Search';
import About from "./components/pages/About";
import Pokemon from './components/pokemon/Pokemon';

import axios from 'axios';
import "./App.css";

const App = () => {

  const [pokemon, setPokemon] = useState({}) 

 const searchPokemon = async(text) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
    console.log(res.data)
    setPokemon(res.data)
  }

    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Fragment>
                <Jumbo />
                <Search searchPokemon={searchPokemon} />
              </Fragment>
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/pokemon/:pokemon" render={props => (
              <Pokemon {...props} getPokemon={this.getPokemon} />
            )} />
          </Switch>
        </div>
      </Router>
    )

}

export default App;
