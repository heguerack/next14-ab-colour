'use client'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useGlobalContext } from '@/context/Context'
import { IoMdClose } from 'react-icons/io'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const { openSidebar, closeSidebar, isSidebarOpen } = useGlobalContext()
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const rootUrl = usePathname()
  console.log(rootUrl)

  return (
    <header
      className={`fixed z-50 w-full top-0  bg-white flex items-center justify-between px-4 ${
        scrollY > 100 ? 'h-[3rem] ' : 'h-[5rem]'
      }`}>
      <div className=' flex w-full items-center justify-between max-w-[1600px] mx-auto '>
        <Link
          href={'/'}
          className={`relative   ${
            scrollY > 100
              ? 'h-[calc(2*1.13rem)] w-[calc(2*2rem)] '
              : 'h-[calc(4*1.13rem)] w-[calc(4*2rem)]  '
          }`}>
          <Image
            priority
            src={'/images/alberta-colour-painting-logo.webp'}
            fill
            alt='Alberta Colour painting logo'
          />
        </Link>

        {isSidebarOpen && <Sidebar />}

        <div className=''>
          <a
            className={`bg-white p-1 rounded-md text-sm text-green flex items-center gap-1 ${
              scrollY > 100 ? 'block' : 'hidden'
            }`}
            href='tel:587-966-6547'>
            <FaPhoneSquareAlt className=' text-lg rounded hidden xs:block' />
            <span className=''>587-966-6547</span>
          </a>
        </div>
        <Navbar />
        <button type='button' className='2xl:hidden'>
          {!isSidebarOpen && (
            <FaBars
              className=' text-green text-3xl bg-white rounded p-1'
              onClick={openSidebar}
            />
          )}
          {isSidebarOpen && (
            <IoMdClose
              className='text-green text-3xl bg-white rounded'
              onClick={closeSidebar}
            />
          )}
        </button>
      </div>
    </header>
  )
}
