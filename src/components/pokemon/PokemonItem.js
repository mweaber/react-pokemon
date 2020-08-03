import React, { useState } from 'react'

const PokemonItem = () => {
    const [pokeID, setPokeID] = useState(0);
    const [pokeName, setPokeName] = useState('Squirtle');
    const [pokePicture, setPokePicture] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png");
    console.log(pokePicture);

    return (
        <div>
            <p>{pokeID}</p>
            <p>{pokeName}</p>
            <img src={pokePicture} alt="Pokemon" />
        </div>
    )
}

export default PokemonItem
