import Image from 'next/image'
import { GreenButton } from '../util/Buttons'
import Link from 'next/link'

export default function HomeBlogsOffers() {
  return (
    <section className='w-full   my-12 2xl:my-16 sm:pb-4'>
      <div className='max-w-[1600px] mx-auto leading-relaxed md:leading-loose flex flex-col justify-center items-center 2xl:flex-row 2xl:h-[40rem] 2xl:mb-32'>
        {/* IMAGE WRAPPER */}
        <Link
          href='/offers'
          className='w-[100%] flex justify-start items-center 2xl:w-1/3 2xl:h-[90%]'>
          <div className='blogs-wrapper group'>
            <div className='relative w-[6rem] h-[6rem] rounded border-[1px] border-green group-hover:border-orange-500'>
              <Image
                className=' rounded'
                fill={true}
                src='/images/special-offer-icon.png'
                alt='Explore special offers for Calgary house painting'
              />
            </div>
          </div>
        </Link>
        {/* CONTENT */}
        <div className='p-2 2xl:w-2/3'>
          <h2 className='text-center mt-16 mb-6 text-xl md:text-2xl font-medium'>
            Top Calgary House Painting Offers and Discounts
          </h2>
          <p className='text-justify text-lg'>
            Discover a variety of discounts and special deals at Alberta Colour
            Painting, tailored to help you save on your Calgary house painting
            projects throughout the year. Explore ongoing promotions for both
            standard and specialty wall painting services, and ensure you get
            the best value by visiting our offers page.
          </p>
          <div className='flex justify-center my-4'>
            <GreenButton
              title='Explore Calgary Painting Discounts'
              url='/offers'
            />
          </div>
        </div>
      </div>

      <div className='max-w-[1600px] mx-auto leading-relaxed md:leading-loose flex flex-col justify-center items-center 2xl:flex-row 2xl:h-[40rem] 2xl:mb-32]'>
        <div className='p-2 2xl:w-2/3'>
          <h2 className='text-center my-8 text-xl xs:text-2xl font-medium'>
            Interior Painting Tips from Calgary's Best Painters
          </h2>
          <p className='text-justify text-lg'>
            Our blog offers valuable resources for both interior and exterior
            painting projects. Learn from the best with color selection tips,
            preparation advice, and creative ideas to enhance your next painting
            project. Our Calgary house painters share their expertise to make
            your DIY or professional projects a success. Whether you're looking
            for interior painting tips or broader painting insights, our Calgary
            painters provide the guidance you need.
          </p>
          <div className='flex justify-center my-8 mb-16'>
            <GreenButton title='Visit Our Painting Blog' url='/blogs' />
          </div>
        </div>
        <Link
          href='/blogs'
          className='w-[100%] flex justify-end items-center 2xl:w-1/3 2xl:h-[90%]'>
          <div className='blogs-wrapper group'>
            <div className='relative w-[6rem] h-[6rem] rounded border border-[var(--green-5)] group-hover:border-orange-500'>
              <Image
                className='absolute rounded'
                fill={true}
                src='/images/blog-icon.png'
                alt='Blog icon for Calgary Painting Insights'
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
