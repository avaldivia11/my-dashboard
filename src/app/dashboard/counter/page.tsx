import { CartCounter } from '@/shopping-cart/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Contador de productos'
}

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito</span>
      <CartCounter value={0} />
    </div>
  )
}
