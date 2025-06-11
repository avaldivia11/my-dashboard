'use client'
import React from 'react'
import { SimpleWidget } from '../simpleWidget/SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.value)
  return (
    <div className='flex flex-wrap p-2 items-center justify-center'>
      <SimpleWidget
        title={`${isCart}`}
        subTitle='Productos agregados'
        label='Contador'
        icon={<IoCartOutline size={50} className='text-blue-500' />}
        href='/dashboard/counter'
      />
    </div>
  )
}
