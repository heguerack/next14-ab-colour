'use client'
import Script from 'next/script'
import { useInView } from 'react-cool-inview'

export default function HomestarsReviewsSmall() {
  const smallHomestarsUrl =
    'https://HomeStars.com/widgets/reviews/alberta-colour-painting-ltd'
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '2000px',
  })

  return (
    <div
      ref={observe}
      className='relative right-1 flex justify-center w-full md:hidden'
      aria-labelledby='homestars-reviews-small-heading'>
      <h3 id='homestars-reviews-small-heading' className='sr-only'>
        Homestars Reviews Small
      </h3>
      {inView && (
        <>
          <iframe
            height='280'
            frameBorder='0'
            width='330'
            loading='lazy'
            src={smallHomestarsUrl}
            scrolling='no'
            title='Homestars Reviews Small for Alberta Colour Painting'
            aria-label='Homestars Reviews Small for Alberta Colour Painting'></iframe>
          <Script src='https://apps.elfsight.com/p/platform.js'></Script>
        </>
      )}
    </div>
  )
}
