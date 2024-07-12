import Link from 'next/link'
import { GreenButton } from '../util/Buttons'
import { myServices } from '../../../data/data'
import { useState, useRef, useEffect } from 'react'

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
    <div className='hidden 2xl:flex items-center gap-6 text-green font-medium '>
      <div className=''>
        <Link href={'/'}>Home</Link>
      </div>

      <div className='dropdown relative' ref={aboutDropdownRef}>
        <button
          className='link'
          onClick={() => setShowAboutDropdown(!showAboutDropdown)}>
          About
        </button>
        <ul
          className={`dropdown-menu absolute bg-green top-[90%] left-[-5rem] py-[1rem] w-[15rem] rounded text-sm text-white transition-opacity duration-300 ease-in-out ${
            showAboutDropdown
              ? 'opacity-1 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-[-20px] pointer-events-none'
          } `}
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
      </div>
      <div className=''>
        <Link href={'/gallery'}>Gallery</Link>
      </div>
      <div className='dropdown relative' ref={servicesDropdownRef}>
        <button className='link' onClick={() => setShowServices(!showServices)}>
          Services
        </button>
        <ul
          className={`dropdown-menu absolute bg-green top-[90%] left-[-5rem] py-[1rem] w-[15rem] rounded text-sm text-white transition-opacity duration-300 ease-in-out ${
            showServices
              ? 'opacity-1 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-[-20px] pointer-events-none'
          } `}
          style={{ boxShadow: '0 2px 5px 0 rgba(0,0,0, .1)' }}>
          {myServices.map(({ service, href }, i) => (
            <li className='p-1 ' key={i}>
              <Link
                href={href}
                className='block w-full text-center py-2 rounded hover:bg-white hover:text-green  capitalize'>
                {service}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=''>
        <Link href={'/contact'}>Contact</Link>
      </div>

      <div className=''>
        <GreenButton url={'/booking'} title={'Booking'} />
      </div>
    </div>
  )
}
