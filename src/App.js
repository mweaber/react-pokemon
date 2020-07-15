import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Jumbo from "./components/layout/Jumbo";
import Search from './components/pokemon/Search';
import About from "./components/pages/About";
import "./App.css";

function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Fragment>
              <Jumbo />
              <Search />
            </Fragment>
          </Route>
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
