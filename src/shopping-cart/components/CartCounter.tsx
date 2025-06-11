'use client'
import { RootState, useAppDispatch, useAppSelector } from '@/store'
import {
  decrement,
  increment,
  initCounterState
} from '@/store/counter/counterSlice'
import React, { useEffect } from 'react'

interface Props {
  value: number
}

export interface CouterResponse {
  method: string
  count: number
}

const getApiCounter = async (): Promise<CouterResponse> => {
  const data = await fetch('/api/counter').then((res) => res.json())
  return data
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch])

  return (
    <>
      <span className='text-9xl'>{count}</span>
      <div className='flex'>
        <button
          onClick={() => {
            // setCounter(counter + 1)
            dispatch(increment())
          }}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          +1
        </button>
        <button
          onClick={() => {
            // setCounter(counter > 0 ? counter - 1 : counter)
            dispatch(decrement())
          }}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          -1
        </button>
      </div>
    </>
  )
}
