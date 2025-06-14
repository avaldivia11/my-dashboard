import { WidgetsGrid } from '@/components'

export const metadata = {
  title: 'Admin Dashboard',
  description: 'SEO Title'
}

export default function Mainage() {
  return (
    <div className='text-black p-2 items-center justify-center'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Información general</span>
      <WidgetsGrid />
    </div>
  )
}
