import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { PokemonCard } from './PokemonCard'

interface Props {
  pokemons: SimplePokemon[]
}
export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} simplePokemon={pokemon} />
        // <Image
        //   alt={pokemon.name}
        //   height={90}
        //   key={pokemon.id}
        //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        //   width={90}
        // />
      ))}
    </div>
  )
}
