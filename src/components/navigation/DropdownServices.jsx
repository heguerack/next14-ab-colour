'use client'

import { myServices } from '../../../data/data'
import Link from 'next/link'

export default function DropdownServices() {
  return (
    <ul
      className='dropdown-menu absolute bg-slate-100 top-[100%] p-[.75rem] rounded text-sm opacity-0
          transition-opacity transition-150 ease-in-out translate-y-[-10px]  pointer-events-none'
      style={{ boxShadow: '0 2px 5px 0 rgba(0,0,0, .1)' }}>
      {myServices.map(({ service, href }, i) => (
        <li className='' key={i}>
          <Link
            href={href}
            className='block w-full text-center py-2 hover:bg-gray-200 capitalize'>
            {service}
          </Link>
        </li>
      ))}
    </ul>
  )
}
