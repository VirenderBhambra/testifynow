import React from 'react'
import { Button } from './ui/button'

export const Navbar = () => {
  return (
    <div className='w-full flex justify-between px-8 py-4 bg-[#3F3D56] text-white'>
        <h1 className='text-3xl font-bold'><a href='/'>Testify.Now</a></h1>
        <Button><a href='/api/auth/login'>Login</a></Button>
    </div>
  )
}
