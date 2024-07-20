'use client'
import { useInView } from 'react-cool-inview'
import GoogleReviews from '../util/GoogleReviews'

export default function HomeLazyGoogleReviews() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '500px',
  })
  return (
    <div
      className='py-8 min-h-[82rem] md:min-h-[72rem]  '
      ref={observe}
      aria-labelledby='google-reviews-heading'>
      <h3 id='google-reviews-heading' className='sr-only'>
        Google Reviews
      </h3>
      {inView && <GoogleReviews />}
    </div>
  )
}
