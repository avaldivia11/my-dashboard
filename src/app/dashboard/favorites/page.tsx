import { FavoritesPokemons } from '@/pokemons/components'
import { Metadata } from 'next'
// import { IoHeartOutline } from 'react-icons/io5'

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Página de Favoritos'
}

export default async function PokemonsPage() {
  return (
    <div className='flex flex-col '>
      <span className='text-5xl my-2'>
        Pokémons Favoritos <small className='text-blue-500'>Global State</small>
      </span>
      {/* <PokemonGrid pokemons={pokemons} /> */}
      <FavoritesPokemons />
    </div>
  )
}
