import React from 'react'
import PropTypes from 'prop-types'


const PokemonItem = ({ pokemon: { name, id, url } }) => {
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{url}</p>
        </div>
    )
}

PokemonItem.propTypes = {
    pokemon: PropTypes.object.isRequired,
}
export default PokemonItem
