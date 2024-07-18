import ButtonEstimate from '../util/ButtonEstimate'
import HomeLazyVideo from './HomeLazyVideo'

export default function HomeVideo() {
  return (
    <section
      className='w-full py-12 md:py-16 px-2'
      aria-labelledby='home-video-heading'>
      <div className='max-w-[1600px] mx-auto flex flex-col items-center leading-relaxed md:leading-loose'>
        <h2
          id='home-video-heading'
          className='text-xl md:text-2xl text-center font-medium mb-4'>
          Transform Your Space with Alberta Colour Painting
        </h2>
        <p className='max-w-[1000px] mx-auto text-center mb-6'>
          At Alberta Colour Painting, we offer top-notch interior and exterior
          painting services in Calgary. Watch our video to learn more about our
          comprehensive services and commitment to quality.
        </p>
        <HomeLazyVideo />
        <p className='text-center mt-6 mb-4'>
          We are fully insured and licensed, with perfect ratings on Google,
          HomeStars, and the BBB. Contact us today for a free estimate.
        </p>
        <ButtonEstimate />
      </div>
    </section>
  )
}
