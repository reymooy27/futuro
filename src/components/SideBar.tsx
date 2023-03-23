import Link from 'next/link'
import React from 'react'
import { Home, MessageSquare, Settings} from 'react-feather'
export default function SideBar() {
  
  return (
    <aside className='fixed top-0 bottom-0 left-[-1000px] md:left-0 w-[200px] border-r border-border'>
      <div className='flex justify-center items-center p-4'>
        <h1 className='text-xl bold'>Futuro</h1>
      </div>
      <nav className='flex flex-col items-center px-3'>
        <Link href='/' className='w-full rounded-md flex items-center gap-2 m-3 px-3 hover:text-green-500'>
            <Home/>
            <h2>Home</h2>
        </Link>
        {/* <Link href='/messages' className='w-full rounded-md flex items-center gap-2 m-3 px-3 hover:text-green-500'>
          <MessageSquare/>
          <h2>Messages</h2>
        </Link> */}
        <Link href='/settings' className='w-full rounded-md flex items-center gap-2 m-3 px-3 hover:text-green-500'>
          <Settings/>
          <h2>Settings</h2>
        </Link>
      </nav>
    </aside>
  )
}
