'use client'
import Script from 'next/script'
import { useInView } from 'react-cool-inview'

export default function GoogleReviews() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '1500px',
  })

  return (
    <div
      className='mt-4 min-h-[80rem] bg-red-50'
      ref={observe}
      aria-labelledby='google-reviews-heading'>
      <h3 id='google-reviews-heading' className='sr-only'>
        Google Reviews
      </h3>
      {inView && (
        <>
          <div
            className='elfsight-app-b58b23de-5664-445b-abfd-1bfb3f486561 google-iframe'
            role='region'
            aria-label='Google Reviews Widget'></div>
          <Script src='https://apps.elfsight.com/p/platform.js'></Script>
        </>
      )}
    </div>
  )
}
