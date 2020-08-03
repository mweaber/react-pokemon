import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Jumbo from "./components/layout/Jumbo";
import Search from './components/pokemon/Search';
import About from "./components/pages/About";
import PokemonItem from './components/pokemon/PokemonItem';
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
              <PokemonItem />
            </Fragment>
          </Route>
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );

}


export default App;
