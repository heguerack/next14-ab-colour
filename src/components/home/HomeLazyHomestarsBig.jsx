'use client'
import { useInView } from 'react-cool-inview'
import HomestarsReviewsBig from '../util/HomestarsReviewsBig'

export default function HomeLazyHomestarsBig() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '700px',
  })

  return (
    <div
      ref={observe}
      className='hidden min-[490px] md:flex justify-center ml-[9vw] xl:ml-[8vw] 2xl:ml-[7vw] 3xl:ml-[4vw] 4xl:ml-[0vw] md:mb-32 md:mt-[10rem] mb-32 2xl:mb-[15rem]'
      aria-labelledby='homestars-reviews-big-heading'>
      <h3 id='homestars-reviews-big-heading' className='sr-only'>
        Homestars Reviews Big
      </h3>
      {inView && <HomestarsReviewsBig />}
    </div>
  )
}
