import React, { Component } from 'react';
import PokemonItem from './PokemonItem'

class Pokemon extends Component {
    render() {
        return (
            <div style={userStyle}>
                {this.props.pokemon.map(pokemon => (
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

