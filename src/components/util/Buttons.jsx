import { FcCalendar, FcCellPhone } from 'react-icons/fc'
import { FaHandPointLeft } from 'react-icons/fa'
import Link from 'next/link'

export function GreenButton({ url, title }) {
  return (
    <Link
      href={url}
      className='text-lg  rounded bg-green hover:bg-greenDark inline-block text-white py-1 px-2 '>
      {title}
    </Link>
  )
}

export function CallEstimateButton({ bg, myClass }) {
  return (
    <div className={`book-button-wrapper ${myClass}`}>
      <a href='tel:15879666547' className='book-button'>
        <div className='book-button-up'>
          <FcCellPhone className='phone-icon' />
          <span>5879666547</span>
        </div>
        <div className={bg ? `${bg} book-button-down` : 'book-button-down'}>
          <p>Or Call / Text</p>
        </div>
      </a>
    </div>
  )
}

export function EstimateButton({ bg, myClass }) {
  return (
    <div className={`book-button-wrapper tracking-normal ${myClass}`}>
      <Link href='/booking' className='book-button'>
        <div className='book-button-up'>
          <FcCalendar className='calendar-icon' />
          <FaHandPointLeft className='hand-icon' />
          <span>BOOK ESTIMATE</span>
        </div>
        <div className={bg ? `${bg} book-button-down` : 'book-button-down'}>
          <p>Painting, popcorn removal, drywall, & stucco</p>
        </div>
      </Link>
    </div>
  )
}
