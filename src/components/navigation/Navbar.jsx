import Link from 'next/link'
import { GreenButton } from '../util/Buttons'
import { useState, useRef, useEffect } from 'react'
import { serviceLinks } from '../../../data/serviceLinks'

export default function Navbar() {
  const [showServices, setShowServices] = useState(false)
  const [showAboutDropdown, setShowAboutDropdown] = useState(false)
  const servicesDropdownRef = useRef(null)
  const aboutDropdownRef = useRef(null)

  useEffect(() => {
    const handleOutsideClickOrHover = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setShowServices(false)
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setShowAboutDropdown(false)
      }
    }
    document.addEventListener('mouseover', handleOutsideClickOrHover)

    return () => {
      document.removeEventListener('mouseover', handleOutsideClickOrHover)
    }
  }, [servicesDropdownRef, aboutDropdownRef])

  return (
    <ul
      className='hidden 2xl:flex items-center gap-4 text-green font-medium'
      role='navigation'
      aria-label='Main Navigation'>
      <li className='px-4'>
        <Link href={'/'}>Home</Link>
      </li>

      <li className='dropdown relative px-4' ref={aboutDropdownRef}>
        <button
          className='link'
          onClick={() => setShowAboutDropdown(!showAboutDropdown)}
          aria-expanded={showAboutDropdown}
          aria-controls='about-menu'>
          About
        </button>
        <ul
          id='about-menu'
          className={`dropdown-menu absolute bg-green top-[100%] left-[-5rem] py-[1rem] w-[15rem] rounded text-sm text-white transition-all duration-300 ease-in-out ${
            showAboutDropdown
              ? 'opacity-1 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-[-20px] pointer-events-none'
          }`}
          style={{ boxShadow: '0 2px 5px 0 rgba(0,0,0, .1)' }}>
          <li className='p-1'>
            <Link
              href={'/about'}
              className='block w-full text-center py-2 rounded hover:bg-white hover:text-green capitalize'>
              About Us
            </Link>
          </li>
          <li className='p-1'>
            <Link
              href={'/offers'}
              className='block w-full text-center py-2 rounded hover:bg-white hover:text-green capitalize'>
              Offers
            </Link>
          </li>
          <li className='p-1'>
            <Link
              href={'/blogs'}
              className='block w-full text-center py-2 rounded hover:bg-white hover:text-green capitalize'>
              Blogs
            </Link>
          </li>
        </ul>
      </li>
      <li className='px-4'>
        <Link href={'/gallery'}>Gallery</Link>
      </li>
      <li className='dropdown relative px-4' ref={servicesDropdownRef}>
        <button
          className='link'
          onClick={() => setShowServices(!showServices)}
          aria-expanded={showServices}
          aria-controls='services-menu'>
          Services
        </button>
        <ul
          id='services-menu'
          className={`dropdown-menu absolute bg-green top-[100%] left-[-5rem] py-[1rem] w-[15rem] rounded text-sm text-white transition-all duration-300 ease-in-out ${
            showServices
              ? 'opacity-1 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-[-20px] pointer-events-none'
          }`}
          style={{ boxShadow: '0 2px 5px 0 rgba(0,0,0, .1)' }}>
          {serviceLinks.map(({ service, href }, i) => (
            <li className='p-1' key={i}>
              <Link
                href={href}
                className='block w-full text-center py-2 rounded hover:bg-white hover:text-green capitalize'>
                {service}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className='px-4'>
        <Link href={'/contact'}>Contact</Link>
      </li>
      <li className='px-4'>
        <GreenButton url={'/booking'} title={'Booking'} />
      </li>
    </ul>
  )
}
