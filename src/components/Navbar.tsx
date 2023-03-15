import Link from 'next/link'
import React from 'react'
import {Bell, Search} from 'react-feather'
export default function Navbar() {
  return (
    <header className='bg-yellow-400 w-full h-[60px] px-5 flex justify-between items-center'>
      <div className='relative max-w-[200px]'>
        <span className='absolute h-full pl-2 left-0 flex items-center justify-center'>
          <Search />
        </span>
        <input 
          type="text" 
          placeholder='Search for players...' 
          className='rounded-md text-[14px] px-3 pl-9 w-full outline-none h-[40px] border-gray-400 border-[0.5px] before:content-[  ]'/>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <Link href={'/notification'}>
          <Bell width={30}/>
        </Link>
        <div className='flex justify-center items-center gap-2'>
          <Link className='flex items-center gap-3' href={'/profile'}>
            <div className='w-[30px] h-[30px] rounded-full bg-red-700'></div>
            <h3 className='hidden md:block'>Username</h3>
          </Link>
        </div>
      </div>
    </header>
  )
}
