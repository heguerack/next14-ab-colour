'use client'
import { useInView } from 'react-cool-inview'
import HomestarsReviewsSmall from '../util/HomestarsReviewsSmall'

export default function HomeLazyHomestarsSmall() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '2000px',
  })

  return (
    <div
      ref={observe}
      className=' md:hidden min-h-[280px]'
      aria-labelledby='homestars-reviews-small-heading'>
      <h3 id='homestars-reviews-small-heading' className='sr-only'>
        Homestars Reviews Small
      </h3>
      {inView && <HomestarsReviewsSmall />}
    </div>
  )
}
