import React, { Component } from 'react';
// import PokemonItem from './PokemonItem'

class Pokemon extends Component {
    render() {
        return (
            <div style={userStyle}>
                <p>Pokemon will go here</p>
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

