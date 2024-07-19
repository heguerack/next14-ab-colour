'use client'
import { useInView } from 'react-cool-inview'
import GoogleVideo from '../util/GoogleVideo'

export default function HomeLazyVideo() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '2000px',
  })

  return (
    <div ref={observe} className='w-full min-h-[56vw]  2xl:min-h-[28.1vw]'>
      {inView && <GoogleVideo />}
    </div>
  )
}
