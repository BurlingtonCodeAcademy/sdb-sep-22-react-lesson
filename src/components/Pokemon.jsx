import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

function Pokemon() {

    const [ pokemon, setPokemon ] = useState(null)

    // const { data, loading, error } = useFetch("https://pokeapi.co/api/v2/pokemon/")
    // console.log(data)


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => setPokemon(data.results))
        .catch(err => {
            console.log(err)
            return <h1>Oops, something went wrong!</h1>
        })
    }, [])

    return (
        <div>
            { pokemon ? pokemon.map((poke, id) => <h1 key={id}>{poke.name}</h1>) : "Loading..." }
        </div>
    )
}

export default Pokemon