'use client'
import Link from 'next/link'
import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemons'

interface Props {
  simplePokemon: SimplePokemon
}

export const PokemonCard = ({ simplePokemon }: Props) => {
  const { id, name } = simplePokemon
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id])
  const dispatch = useAppDispatch()
  const togglePokemon = () => {
    dispatch(toggleFavorite(simplePokemon))
  }
  return (
    <>
      <div className='mx-auto right-0 mt-2 w-60'>
        <div className='bg-white rounded overflow-hidden shadow-lg'>
          <div className='text-center p-6 bg-gray-800 border-b'>
            <div className='flex flex-col items-center justify-center'>
              <Image
                alt={name}
                key={id}
                priority={false}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width={90}
                height={90}
                style={{ height: '100px' }}
              />
            </div>
            <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>
              {name}
            </p>
            <div className='mt-5'>
              <Link
                href={`/dashboard/pokemons/${name}`}
                className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
              >
                Más Información
              </Link>
            </div>
          </div>
          <div>
            <div
              className='px-4 py-2 items-center hover:bg-gray-100 flex cursor-pointer'
              onClick={() => {
                togglePokemon()
              }}
            >
              <div className='text-red-600'>
                {isFavorite ? (
                  <IoHeart size={25} />
                ) : (
                  <IoHeartOutline size={25} />
                )}
              </div>
              <div className='pl-3'>
                <p className='text-sm font-medium text-gray-800 leading-none'>
                  {isFavorite ? 'Es Favorito' : 'No es favorito'}
                </p>
                <p className='text-xs text-gray-500'>
                  {isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
