import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Jumbo from "./components/layout/Jumbo";
import Search from './components/pokemon/Search';
import About from "./components/pages/About";
import Pokemon from './components/pokemon/Pokemon';

import axios from 'axios';
import Container from "react-bootstrap/Container";
import "./App.css";

class App extends React.Component {
  state = {
    pokemon: []
  }

  async componentDidMount() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
    this.setState({ pokemon: res.data.results })
    console.log(this.state.pokemon)
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Fragment>/               
                <Jumbo />
                <Search />
                <Container>
                  <Pokemon pokemon={this.state.pokemon}/>
                </Container>
              </Fragment>
            </Route>
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}
// const App = () => {
//   const [pokeRes, setPokeRes] = useState([])

//   useEffect(() => {
//     console.log(pokeRes);
//     async function getPokemon() {
//       const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
//       console.log(res.data);
//       setPokeRes(res.data)

//     }

//     getPokemon()
//     //eslint-disable-next-line
//   }, []);


//   return (
//     <Router>
//       <div className="App">
//         <Navigation />
//         <Switch>
//           <Route exact path="/">
//             <Fragment>
//               <Jumbo />
//               <Search />
//               <Container>
//                 <Pokemon pokeRes={pokeRes}/>
//               </Container>
//             </Fragment>
//           </Route>
//           <Route exact path="/about" component={About} />
//         </Switch>
//       </div>
//     </Router>
//   );

// }


export default App;
