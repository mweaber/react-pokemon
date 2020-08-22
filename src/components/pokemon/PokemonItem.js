import React from 'react'
import PropTypes from 'prop-types'


const PokemonItem = () => {
    return (
        <div>
            <p>{this.props.pokemon.order}</p>
            <p>{}</p>
            <p>{}</p>
        </div>
    )
}

PokemonItem.propTypes = {
    pokemon: PropTypes.object.isRequired,
}
export default PokemonItem
