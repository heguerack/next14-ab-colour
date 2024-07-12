import { useGlobalContext } from '@/context/Context'
import Link from 'next/link'

export default function SidebarAbout() {
  const { closeSidebar } = useGlobalContext()

  return (
    <ul id='about-menu' className='w-full bg-gray-200 py-2'>
      <li className='w-full'>
        <Link
          href='/about'
          onClick={closeSidebar}
          className='block w-full text-center py-2 hover:bg-gray-200 '>
          About Us
        </Link>
      </li>
      <li className='w-full'>
        <Link
          href='/offers'
          onClick={closeSidebar}
          className='block w-full text-center py-2 hover:bg-gray-200 '>
          Offers
        </Link>
      </li>
      <li className='w-full'>
        <Link
          href='/blogs'
          onClick={closeSidebar}
          className='block w-full text-center py-2 hover:bg-gray-200 '>
          Blogs
        </Link>
      </li>
    </ul>
  )
}
