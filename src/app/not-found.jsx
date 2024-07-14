import Calendly from '@/components/util/Calendly'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div className='text-center p-4 text-lg'>
        <h1 className='text-3xl font-semibold my-10'>Page Not Found</h1>
        <p className='text-lg'>Could not find requested page</p>
        <p className='my-6'>
          Go to{'  '}
          <Link
            href='/'
            className='mx-4 bg-green text-white p-1 px-2 rounded-md '>
            <button type='button border-none '>Home page</button>
          </Link>
          {'  '}
          instead?
        </p>
        <p className='font-medium '>
          Or you can just book a service from below!
        </p>
      </div>
      <div className=''>
        <Calendly />
      </div>
    </>
  )
}
