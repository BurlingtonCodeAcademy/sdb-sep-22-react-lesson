import React, { useEffect, useState } from 'react'

function Pokemon() {

    const [ pokemon, setPokemon ] = useState(null)


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => setPokemon(data.results))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            { pokemon ? pokemon.map((poke, id) => <h1 key={id}>{poke.name}</h1>) : null }
        </div>
    )
}

export default Pokemon