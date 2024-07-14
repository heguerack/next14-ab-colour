import ButtonEstimate from '../util/ButtonEstimate'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeCredentials() {
  return (
    <section
      className='w-full text-center py-12 md:py-16 px-2 bg-slate-200'
      aria-labelledby='home-credentials-heading'>
      <div className='max-w-[1600px] mx-auto leading-relaxed md:leading-loose'>
        <h2
          id='home-credentials-heading'
          className='flex flex-col gap-1 font-medium text-xl md:text-2xl'>
          <span>WE ARE YOUR</span>
          <span>CALGARY PAINTING</span>
          <span>COMPANY</span>
        </h2>
        <p className='my-8'>
          Alberta Colour Painting is your trusted partner in Calgary, offering
          detailed estimates and unparalleled painting services. As a leading
          Calgary painting company, we pride ourselves on our professional and
          skilled Calgary painters.
        </p>
        <p className='font-medium mb-8'>
          Our Touch Of Paint Makes A Difference!
        </p>
        <div className='text-base sm:w-[80%] m-auto grid grid-cols-2 md:grid-cols-4 md:w-[100%] xl:w-[90%] 2xl:container 3xl:w-[52%] gap-4 sm:gap-6 md:gap-4 xl:gap-12'>
          {credentials.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className='gray-500 p-4 bg-gray-600 hover:bg-gray-700 transition text-white rounded-lg'
              aria-label={item.alt}>
              <div className='relative h-[26vw] w-[26vw] md:h-[12vw] md:w-[12vw] 2xl:h-[6vw] 2xl:w-[6vw] m-auto bg-white'>
                <Image
                  src={item.src}
                  fill={true}
                  className='absolute'
                  alt={item.alt}
                />
              </div>
              <div className='h-2 w-[100%] bg-slate-100 rounded-[100%] my-4'></div>
              <p>{item.p1}</p>
              <p>{item.p2}</p>
              <p>{item.p3}</p>
            </Link>
          ))}
        </div>
        <div className='m-auto flex justify-center py-8 w-[80%] sm:w-[78%] md:w-[60%]'>
          <ButtonEstimate />
        </div>
      </div>
    </section>
  )
}

const credentials = [
  {
    p1: 'FREE',
    p2: 'DETAILED',
    p3: 'ESTIMATES',
    alt: 'Calendar clock icon, symbolizing free detailed estimates',
    src: '/images/calendar-clock-icon.jpg',
    href: '/about',
  },
  {
    p1: 'SKILLED',
    p2: 'PROFESSIONAL',
    p3: 'PAINTERS',
    alt: 'House painter icon, representing our skilled and professional Calgary painters',
    src: '/images/house-painter-icon.png',
    href: '/about',
  },
  {
    p1: 'LICENSED',
    p2: 'INSURED',
    p3: 'ECO-FRIENDLY',
    alt: 'License icon, showcasing our credentials as a licensed and insured Calgary painting company',
    src: '/images/licensed-icon.png',
    href: '/about',
  },
  {
    p1: 'REPUTATION FOR',
    p2: 'HIGH',
    p3: 'QUALITY',
    alt: 'Quality icon, underlining our reputation for high-quality painting services in Calgary',
    src: '/images/reputation-for-quality-icon.png',
    href: '/about',
  },
]
