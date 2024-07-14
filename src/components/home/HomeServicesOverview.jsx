import Image from 'next/image'
import ButtonEstimate from '../util/ButtonEstimate'
import Link from 'next/link'

export default function ServicesOverview() {
  return (
    <section
      className='services-overview px-2 py-12 md:py-16 bg-slate-300'
      aria-labelledby='services-overview-heading'>
      <div className='max-w-[1600px] mx-auto leading-relaxed md:leading-loose'>
        <h2
          id='services-overview-heading'
          className='text-xl md:text-2xl md:mb-8 text-center font-medium'>
          Comprehensive Painting Services in Calgary
        </h2>
        <div className='flex flex-wrap justify-center gap-2 py-8 md:gap-4 2xl:gap-8'>
          {services.map(({ id, title, url, img, alt }) => (
            <Link
              href={url}
              key={id}
              className='flex flex-col items-center w-[45%] md:w-[30%] 2xl:w-[15%] bg-green hover:bg-greenDark cursor-pointer box-border rounded px-2 py-4'
              aria-label={title}>
              <div className='relative w-[8rem] h-[8rem] bg-white'>
                <Image alt={alt} src={img} layout='fill' objectFit='contain' />
              </div>
              <div>
                <h3 className='text-center text-white py-4'>{title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className='flex justify-center'>
          <ButtonEstimate />
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    id: 1,
    title: 'Interior Painting Calgary',
    img: '/images/interior-painting-brush.png',
    alt: 'Calgary interior painters at work, providing top-notch interior painting services',
    url: '/services/interior-painting-calgary',
  },
  {
    id: 2,
    title: 'Exterior Painting Calgary',
    img: '/images/exterior-painting-brush.webp',
    alt: 'Exterior painting services by expert Calgary painters',
    url: '/services/exterior-painting-calgary',
  },
  {
    id: 3,
    title: 'Commercial Painting Calgary',
    img: '/images/commercial-painting-icon.png',
    alt: 'Professional commercial painting by Calgary painting company',
    url: '/services/commercial-painting-calgary',
  },
  {
    id: 4,
    title: 'Popcorn Ceiling Removal Calgary',
    img: '/images/popcorn-ceiling-removal-calgary.png',
    alt: 'Popcorn ceiling removal services by Calgary house painters',
    url: '/services/popcorn-ceiling-removal-calgary',
  },
  {
    id: 5,
    title: 'Drywall Mud & Tape Calgary',
    img: '/images/drywall-tape-and-mud-application-calgary.png',
    alt: 'Drywall preparation by Calgary painters for a smooth finish',
    url: '/services/drywall-mud-&-tape-calgary',
  },
  {
    id: 6,
    title: 'Ceiling Texturing Calgary',
    img: '/images/ceiling-texturing-calgary.png',
    alt: 'Ceiling texturing services in Calgary by skilled painters',
    url: '/services/ceiling-texturing-calgary',
  },
]
