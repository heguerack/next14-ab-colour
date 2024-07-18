'use client'
import { useInView } from 'react-cool-inview'

export default function HomeLazyVideo() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '2000px',
  })

  return (
    <div
      ref={observe}
      className='w-full h-[56.2vw] 2xl:w-3/4 2xl:h-[42.2vw] 3xl:w-2/3 3xl:h-[37.6vw] 4xl:w-1/2 4xl:h-[28vw]'>
      {inView && (
        <iframe
          className='h-full w-full'
          src='https://www.youtube.com/embed/u3HHpLQDVsk?autoplay=1&mute=1'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          title='Transform Your Space with Alberta Colour Painting Video'></iframe>
      )}
    </div>
  )
}
