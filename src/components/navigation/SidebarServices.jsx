import Link from 'next/link'
import { useGlobalContext } from '@/context/Context'
import { myServices } from '../../../data/data'

export default function SidebarServices() {
  const { closeSidebar } = useGlobalContext()

  return (
    <ul id='services-menu' className='w-full bg-gray-200 py-2'>
      {myServices.map(({ service, href }, i) => (
        <li className='w-full' key={i}>
          <Link
            href={href}
            onClick={closeSidebar}
            className='block w-full text-center py-2 hover:bg-gray-200 capitalize'>
            {service}
          </Link>
        </li>
      ))}
    </ul>
  )
}
