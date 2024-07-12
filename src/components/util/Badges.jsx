import Image from 'next/image'

export default function Badges() {
  return (
    <section className='flex flex-wrap  px-4 py-[5rem] justify-center items-center gap-8 md:gap-12 lg:gap-14'>
      {/* So it seems like it needs relative on parent, object cover or containe or wahtever, then fill too */}
      <div className='relative h-[7rem] w-[7rem] sm:h-[8rem] sm:w-[8rem] md:h-[9rem] md:w-[9rem] lg:h-[13rem] lg:w-[13rem]'>
        <Image
          src='/images/CleverCanadian.png'
          alt='Clever Canadian - badge'
          className='object-cover'
          fill
        />
      </div>
      <div className='relative  h-[3.5rem] w-[calc(3.5rem*2.14)] sm:h-[4rem] sm:w-[calc(4rem*2.14)] md:h-[5rem] md:w-[calc(5rem*2.14)] lg:h-[7rem] lg:w-[calc(7rem*2.14)]'>
        <Image
          src='/images/google-reviews-4.9-rating.png'
          alt='Google rating 4.9'
          className='object-cover'
          fill
        />
      </div>
      <div className='relative h-[3rem] w-[calc(3rem*2.63)] sm:h-[3.5rem] sm:w-[calc(3.5rem*2.63)] md:h-[4.5rem] md:w-[calc(4.5rem*2.63)]  lg:h-[5.5rem] lg:w-[calc(5.5rem*2.63)] '>
        <Image
          src='/images/bbb-A+-alberta-colour-painting.webp'
          alt='Google rating 4.9'
          className='object-cover'
          fill
        />
      </div>
      <div className='relative h-[5.5rem] w-[5.5rem] sm:h-[6rem] sm:w-[6rem] md:h-[8rem] md:w-[8rem]  lg:h-[11rem] lg:w-[11rem] '>
        <Image
          src='/images/homestars-verified-badge.png'
          alt='homestars verified badge'
          className='object-cover'
          fill
        />
      </div>
      <div className='relative h-[5.5rem] w-[5.5rem] sm:h-[7rem] sm:w-[7rem] md:h-[9rem] md:w-[9rem] lg:h-[12rem] lg:w-[12rem]'>
        <Image
          src='/images/best-of-the-best-homestars-award-winner-2024-black-version.png'
          alt='Clever Canadian - badge'
          className='object-cover'
          fill
        />
      </div>
      <div className='relative h-[5.5rem] w-[5.5rem] sm:h-[7rem] sm:w-[7rem] md:h-[9rem] md:w-[9rem] lg:h-[12rem] lg:w-[12rem]'>
        <Image
          src='/images/best-of-the-best-homestars-award-winner-2023-black-version.png'
          alt='Clever Canadian - badge'
          className='object-cover'
          fill
        />
      </div>
    </section>
  )
}
