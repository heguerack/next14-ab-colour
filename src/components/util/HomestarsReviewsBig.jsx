'use client'
import { useInView } from 'react-cool-inview'

export default function HomestarsReviewsBig() {
  const bigHomestarsUrl =
    'https://HomeStars.com/widgets/reviews/alberta-colour-painting-ltd/large'
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '2000px',
  })

  return (
    <div
      ref={observe}
      className='hidden md:flex justify-center ml-[9vw] xl:ml-[8vw] 2xl:ml-[7vw] 3xl:ml-[4vw] 4xl:ml-[0vw] md:mb-32 md:mt-[10rem] mb-32 2xl:mb-[15rem]'
      aria-labelledby='homestars-reviews-big-heading'>
      <h3 id='homestars-reviews-big-heading' className='sr-only'>
        Homestars Reviews Big
      </h3>
      {inView && (
        <iframe
          className='lg:scale-125 xl:scale-150'
          height='490'
          frameBorder='0'
          width='490'
          src={bigHomestarsUrl}
          scrolling='no'
          title='Homestars Reviews Big for Alberta Colour Painting'
          aria-label='Homestars Reviews Big for Alberta Colour Painting'></iframe>
      )}
    </div>
  )
}
