'use client'
import React from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritesPokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  )
  // const [pokemons, setPokemons] = useState(favoritePokemons)
  // useEffect(() => {
  //   setPokemons(favoritePokemons)
  //   // console.log({ favoritePokemons })
  // }, [favoritePokemons])
  //   return <PokemonGrid pokemons={favoritePokemons} />
  return (
    <>
      {favoritePokemons.length > 0 ? (
        <PokemonGrid pokemons={favoritePokemons} />
      ) : (
        <NoFavorites />
      )}
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500' />
      <span>No hay favoritos</span>
    </div>
  )
}
