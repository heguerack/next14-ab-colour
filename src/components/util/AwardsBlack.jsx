import Image from 'next/image'

export default function AwardsBlack() {
  return (
    <div className='flex items-center justify-center mt-[3.5rem] gap-4 xs:gap-6 md:gap-12'>
      <div className='relative h-[calc(1.4*1.7rem)] w-[calc(3*1.7rem)] xs:h-[calc(1.4*2rem)] xs:w-[calc(3*2rem)] md:h-[calc(1.4*2.8rem)] md:w-[calc(3*2.8rem)]'>
        <Image
          alt='Google reviews rating of 4.9 stars for Alberta Colour Painting, top Calgary painters'
          src={'/images/google-reviews-4.9-rating.png'}
          priority
          fill
          className='object-cover'
        />
      </div>
      <div className='relative h-[calc(2.2*2.8rem)] w-[calc(2*2.8rem)] xs:h-[calc(2.2*3.2rem)] xs:w-[calc(2*3.2rem)] md:h-[calc(2.2*4.2rem)] md:w-[calc(2*4.2rem)]'>
        <Image
          alt='Best of the Best Homestars Award Winner 2024 awarded to Alberta Colour Painting, a leading Calgary painting company'
          src={
            '/images/best-of-the-best-homestars-award-winner-2024-black-version.png'
          }
          priority
          fill
          className='object-cover'
        />
      </div>
      <div className='relative h-[calc(.57*3.9rem)] w-[calc(1.5*3.9rem)] xs:h-[calc(.57*4.4rem)] xs:w-[calc(1.5*4.4rem)] md:h-[calc(.57*6.2rem)] md:w-[calc(1.5*6.2rem)]'>
        <Image
          alt='BBB A+ rating for Alberta Colour Painting, a trusted Calgary painting company'
          src={'/images/bbb-A+-alberta-colour-painting.webp'}
          priority
          fill
          className='object-cover'
        />
      </div>
    </div>
  )
}
