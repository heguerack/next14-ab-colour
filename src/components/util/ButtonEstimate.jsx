import Link from 'next/link'
import { FcCalendar } from 'react-icons/fc'

export default function ButtonEstimate() {
  return (
    <Link
      href='/booking'
      className='custom-pulse-animation justify-center flex items-center my-2 py-2 px-4 text-white tracking-normal rounded-3xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-900 hover:from-sky-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-transform transform hover:scale-105'
      aria-label='Book your estimate today'>
      <FcCalendar className='text-4xl md:text-6xl hidden md:block' />
      <span className='md:text-xl'>BOOK YOUR ESTIMATE TODAY!</span>
    </Link>
  )
}
