import Link from 'next/link'
import { FcCalendar } from 'react-icons/fc'

export default function ButtonEstimate() {
  return (
    <Link
      href='/booking'
      className=' custom-pulse-animation justify-center flex items-center my-2  py-2 px-4 text-white tracking-normal rounded-3xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-900 '>
      <FcCalendar className='text-4xl md:text-6xl hidden' />
      <span className=' md:text-xl'>BOOK YOUR ESTIMATE TODAY!</span>
    </Link>
  )
}
