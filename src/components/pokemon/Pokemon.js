import React, { Component } from 'react';
import PokemonItem from './PokemonItem'

class Pokemon extends Component {
    state = {
        pokemon: [
            {
                id: 1,
                name: 'Squirtle',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
            },
            {
                id: 2,
                name: 'Wartortle',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'
            },
            {
                id: 3,
                name: 'Blastoise',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
            },
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.pokemon.map(pokemon => (
                    <PokemonItem key={pokemon.id} pokemon={pokemon}/>
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Pokemon

