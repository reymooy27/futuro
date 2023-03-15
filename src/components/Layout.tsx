import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <main className='w-full h-full flex relative'>
      <SideBar/>
      <div className='absolute left-0 md:left-[200px] w-full md:w-[calc(100%-200px)] h-full'>
        <Navbar/>
        <div className='w-full p-4'>
          {children}
        </div>
      </div>
    </main>
  )
}
