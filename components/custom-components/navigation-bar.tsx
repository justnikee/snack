import React from 'react'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Link from 'next/link'
  

type Props = {}

const NavigationBar = (props: Props) => {
  return (
    <div className='flex justify-between w-full items-center h-10 px-10'>
        <h2 className=''>
            Snack 🍪
        </h2>
        <div className='flex items-center gap-4'>
        <div className='flex gap-4'>
            <Link href="#">Our Story </Link>
            <Link href="#">Membership</Link>
            <Link href="#">Write</Link>
            <Link href="#">Sign In</Link>
        </div>
    <Menubar>
  <MenubarMenu>
    <MenubarTrigger>Get Started</MenubarTrigger>
  </MenubarMenu>
</Menubar> 
        </div>
    </div>

  )
}

export default NavigationBar;