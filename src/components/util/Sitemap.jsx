import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

export default function Sitemap() {
  return (
    <section className='bg-gray-800  p-2 py-12 lg:py-20 text-white'>
      <div className='text-lg'>
        <h2 className='text-2xl text-center mb-8 text-zinc-400'>SITEMAP</h2>
        <div className='flex flex-col items-center  gap-12 capitalize text-center'>
          {/* mainLinks  mainLinks  mainLinks  mainLinks  */}
          <div className=''>
            <Link href={'/'}>
              <p className='text-center  text-2xl'>HOME</p>
            </Link>
          </div>
          <div className=''>
            <p className='text-center  text-2xl '>ABOUT</p>
            <div className='flex gap-8 mt-4'>
              <Link href={'/about'}>About us</Link>
              <Link href={'/offers'}>Offers</Link>
            </div>
          </div>
          <div className=''>
            <p className='text-center  text-2xl '>SERVICES</p>
            <div className='flex text-slate-400 flex-col gap-6 mt-6'>
              <Link href={'/services/interior-painting-calgary'}>
                Interior painting
              </Link>
              <Link href={'/services/cabinet-painting-calgary'}>
                Cabinet Painting
              </Link>
              <Link href={'/services/commercial-painting-calgary'}>
                Commercial Painting
              </Link>
              <Link href={'/services/popcorn-ceiling-removal-calgary'}>
                Popcorn Removal
              </Link>
              <Link href={'/services/drywall-mud-&-tape-calgary'}>
                Drywall, Mud & Tape
              </Link>
              <Link href={'/services/ceiling-texturing-calgary'}>
                Ceiling texturing
              </Link>
            </div>
          </div>
          <div className='text-2xl  ' href='#'>
            <p className='text-center text-2xl'>SOCIALS</p>
            <div className='flex justify-center gap-12 mt-8 text-zinc-400'>
              <a
                aria-label='Visit Alberta Colour Painting instagram page'
                href={'https://www.instagram.com/albertacolourpainting/?hl=en'}>
                <BsInstagram />
              </a>
              {/* <a
                aria-label='Visit Alberta Colour Painting twitter page'
                href={'https://twitter.com/albertacolour'}>
                <BsTwitter />
              </a> */}
              <a
                aria-label='Visit Alberta Colour Painting youtube page'
                href={'https://www.youtube.com/@albertacolourpainting'}>
                <BsYoutube />
              </a>
              <a
                aria-label='Visit Alberta Clour Painting facebook page'
                href={'https://www.facebook.com/albertacolourpainting/'}>
                <BsFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
