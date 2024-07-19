import Image from 'next/image'
import ButtonEstimate from '../util/ButtonEstimate'

export default function Hero() {
  return (
    <section className='relative w-full' aria-labelledby='hero-heading'>
      <div className='relative left-0 top-0 w-full h-[calc(100vh-5rem)]'>
        <Image
          fill
          priority
          alt='Spacious living room freshly painted by Calgary interior painters at Alberta Colour Painting'
          className='object-cover'
          src={'/images/big-livingroom-freshly-painted.jpeg'}
          role='img'
        />
      </div>
      <div className='absolute left-0 top-0 px-2 flex flex-col items-center justify-center gap-8 xs:gap-12 sm:gap-16 md:gap-24 bg-[rgba(0,0,0,.6)] h-[calc(100vh-5rem)] w-full'>
        <div className='flex flex-col items-center justify-center text-center px-4 md:px-16'>
          <h1
            id='hero-heading'
            className='max-w-[700px] text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center font-medium leading-loose xs:leading-10 sm:leading-[3rem] md:leading-[4rem]'>
            {/* Exterior and Interior Painting Services with Expert Calgary Painters
            at Alberta Colour Painting */}
            Expert Calgary Painters for Exterior & Interior House Painting
            services at Alberta Colour Painting
          </h1>
        </div>
        <ButtonEstimate />
        <div className='flex items-center gap-4 xs:gap-6 md:gap-12'>
          <div className='relative h-[calc(1.4*1.7rem)] w-[calc(3*1.7rem)] xs:h-[calc(1.4*2rem)] xs:w-[calc(3*2rem)] md:h-[calc(1.4*2.8rem)] md:w-[calc(3*2.8rem)]'>
            <Image
              alt='Google reviews rating of 4.9 stars for Alberta Colour Painting, top Calgary painters'
              src={'/images/google-reviews-4.9-rating.png'}
              priority
              fill
              className='object-cover'
              role='img'
            />
          </div>
          <div className='relative h-[calc(2.2*2.8rem)] w-[calc(2*2.8rem)] xs:h-[calc(2.2*3.2rem)] xs:w-[calc(2*3.2rem)] md:h-[calc(2.2*4.2rem)] md:w-[calc(2*4.2rem)]'>
            <Image
              alt='Best of the Best Homestars Award Winner 2024 awarded to Alberta Colour Painting, a leading Calgary painting company'
              src={
                '/images/best-of-the-best-homestars-award-winner-2024-white-version.png'
              }
              priority
              fill
              className='object-cover'
              role='img'
            />
          </div>
          <div className='relative h-[calc(.57*3.9rem)] w-[calc(1.5*3.9rem)] xs:h-[calc(.57*4.4rem)] xs:w-[calc(1.5*4.4rem)] md:h-[calc(.57*6.2rem)] md:w-[calc(1.5*6.2rem)]'>
            <Image
              alt='BBB A+ rating for Alberta Colour Painting, a trusted Calgary painting company'
              src={'/images/bbb-A+-alberta-colour-painting.webp'}
              priority
              fill
              className='object-cover'
              role='img'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
