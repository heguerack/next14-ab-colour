import { useGlobalContext } from '@/context/Context'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import SidebarAbout from './SidebarAbout'
import SidebarServices from './SidebarServices'

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  const [openSection, setOpenSection] = useState(null)
  // const sidebarRef = useRef()

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  // console.log(sidebarRef.current)
  // useEffect(() => {
  //   if (isSidebarOpen) {
  //     sidebarRef.current.style.backgroundColor = 'red'
  //   }
  // }, [isSidebarOpen])

  return (
    <>
      {isSidebarOpen && (
        <div
          // ref={sidebarRef}
          tabIndex={-1}
          className='lg:hidden fixed left-0 top-[3rem] h-screen w-full flex flex-col items-center justify-start bg-greenWhite z-30 pt-8 overflow-y-auto shadow-md'
          role='dialog'
          aria-modal='true'
          aria-labelledby='sidebar-heading'>
          <h2 id='sidebar-heading' className='sr-only'>
            Sidebar Menu
          </h2>
          <ul className='w-full'>
            <li className='w-full border border-blue-200'>
              <Link
                href='/'
                onClick={closeSidebar}
                className='block w-full text-center py-4 hover:bg-gray-300 '>
                Home
              </Link>
            </li>
            <li className='w-full border-b border-blue-200'>
              <button
                onClick={() => toggleSection('about')}
                className='flex items-center justify-center gap-2 w-full text-center py-4 hover:bg-gray-100 '
                aria-expanded={openSection === 'about'}
                aria-controls='about-menu'>
                <span>About</span>
                {openSection === 'about' ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openSection === 'about' && <SidebarAbout />}
            </li>
            <li className='w-full border-b border-blue-200'>
              <button
                onClick={() => toggleSection('services')}
                className='flex items-center justify-center gap-2 w-full text-center py-4 hover:bg-gray-100 '
                aria-expanded={openSection === 'services'}
                aria-controls='services-menu'>
                <span>Services</span>
                {openSection === 'services' ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>
              {openSection === 'services' && <SidebarServices />}
            </li>
            <li className='w-full border-b border-blue-200'>
              <Link
                href='contact'
                onClick={closeSidebar}
                className='block w-full text-center py-4 hover:bg-gray-100 '>
                Contact
              </Link>
            </li>
            <li className='w-full border-b border-blue-200'>
              <Link
                href='booking'
                onClick={closeSidebar}
                className='block w-full text-center py-4 hover:bg-gray-100 '>
                Booking
              </Link>
            </li>
            <li className='w-full border-b border-blue-200'>
              <Link
                href='gallery'
                onClick={closeSidebar}
                className='block w-full text-center py-4 hover:bg-gray-100 '>
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
