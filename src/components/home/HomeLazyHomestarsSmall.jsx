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
      className=' min-h-[280px] flex justify-center  md:hidden'
      aria-labelledby='homestars-reviews-small-heading'>
      <h3 id='homestars-reviews-small-heading' className='sr-only'>
        Homestars Reviews Small
      </h3>
      {inView && <HomestarsReviewsSmall />}
    </div>
  )
}
