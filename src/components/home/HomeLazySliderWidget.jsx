'use client'
import { useInView } from 'react-cool-inview'
import SliderWidget from '../util/SliderWidget'

export default function HomeLazySliderWidget({ images }) {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '2000px',
  })

  return (
    <div
      ref={observe}
      className='min-h-[70vw] sm:min-h-[65vw] landscape:sm:min-h-[70vh] '>
      {inView && <SliderWidget images={images} />}
    </div>
  )
}
