import React from 'react'
import PropTypes from 'prop-types'


const PokemonItem = ({pokemon:{name, id, sprite} }) => {      
        return (
            <div>
                <p>{id}</p>
                <p>{name}</p>
                <img src={sprite} alt="Pokemon" />
            </div>
        )
}

PokemonItem.propTypes = {
    pokemon: PropTypes.object.isRequired,
}
export default PokemonItem
