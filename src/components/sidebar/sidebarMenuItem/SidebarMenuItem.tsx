'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { JSX } from 'react'
import style from './SidebarMenuItem.module.css'

interface Props {
  icon: JSX.Element
  path: string
  subTitle: string
  title: string
}

export const SidebarMenuItem = ({ icon, path, subTitle, title }: Props) => {
  const pathName = usePathname()
  return (
    <Link
      key={path}
      href={path}
      className={`${style.link} ${pathName === path && style['active-link']}`}
    >
      <div>{icon}</div>
      <div className='flex flex-col'>
        <span className='text-lg font-bold leading-5 text-white'>{title}</span>
        <span className='text-sm text-white/50 hidden md:block'>
          {subTitle}
        </span>
      </div>
    </Link>
  )
}
