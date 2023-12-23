import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Bell, Search} from 'react-feather'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // MenuGroup,
  // MenuOptionGroup,
  // MenuDivider,
  Button
} from '@chakra-ui/react'

export default function Navbar() {
  const {data:session} = useSession()
  return (
    <header className='border-b border-border w-full h-[60px] px-5 flex justify-between items-center'>
      <div className='relative max-w-[200px]'>
        <span className='absolute h-full pl-2 left-0 flex items-center justify-center'>
          <Search />
        </span>
        <input 
          type="text" 
          placeholder='Search for players...' 
          className='rounded-md text-[14px] px-3 pl-9 w-full 
          outline-none h-[40px] border-gray-400 border-[0.5px] before:content-[  ]'/>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <Link href={'/notification'}>
          <Bell width={30}/>
        </Link>
        <div className='flex justify-center items-center gap-2'>
          {session ? 
            <span className='flex items-center gap-3'>
              <Menu>
                <MenuButton className='flex gap-3' flex={1}>
                  <Image className='rounded-full' 
                          src={session?.user?.image as string} 
                          height={30} width={30} alt='user-profile'
                  />
                  {/* <h3 className='hidden md:block'>{session?.user?.name}</h3> */}
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href='/profile'>
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </span> 
            : 
            <Link href='/login'>Login</Link>
          }
        </div>
      </div>
    </header>
  )
}
