import ButtonEstimate from '@/components/util/ButtonEstimate'
import Image from 'next/image'

export const metadata = {
  title: 'Alberta Colour Painting Offers',
  description:
    "Get access to special painting offers in Calgary with Alberta Colour Painting. Our team of professional painters is dedicated to delivering top-quality results for your home or business. Contact us today to learn more about our current offers and to schedule a consultation for your painting project. Don't miss out on these limited-time deals - contact us now to take advantage of these great savings!",
  viewport: 'width=device-width, initial-scale=1.0',
  canonicalUrl: 'https://www.albertacolourpainting.com/offers',
}

export default function OffersPage() {
  return (
    <main className=' w-full leading-relaxed md:leading-loose'>
      <div className='fixed left-0 top-0 w-full h-screen z-[-10]'>
        <Image
          src={'/images/offers/spray-finish-railing-runners-and-risers.jpg'}
          className='absolute'
          fill={true}
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='max-w-[1600px] mx-auto  flex flex-col gap-[6rem] sm:gap-[10rem] md:gap-[12rem] py-[6rem] sm:py-[8rem] md:py-[10rem]'>
        {/* CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 */}
        {/* CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 */}
        {/* CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 CARD 1 */}
        <div className='flex justify-start xs:ml-[5%] md:ml-[10%]'>
          <div className=' bg-green w-full xs:w-[calc(5rem*4)] md:w-[calc(8rem*4)]  rounded-xl pb-4 relative animation-pushup'>
            <div className='relative rounded-t-xl w-full h-[calc(4rem*3.2)]  xs:h-[calc(5rem*2.75)] md:h-[calc(8rem*2.75)]'>
              <Image
                src='/images/offers/interior-painting-offer-2-bedrooms-for-the-price-of-1.png'
                alt='A paint roller rolling a blue colour, and in the blue colour it says: 2 for 1 deal, receive 2 rooms painted and only pay for 1'
                className=' rounded-t-xl'
                fill={true}
              />
            </div>
            <h6 className='text-xl text-center my-8 text-white capitalize px-4'>
              pay for one bedroom, get the second one half price!!
            </h6>
            <p className='px-4 text-justify leading-relaxed  '>
              Just in Calgary. 2 small to medium size, 8 to 9 feet height. You
              simply pay for one and we paint two (Walls only , no closets, 2
              coats only, 2 colours, no feature walls, 15 minutes of drywall
              repairs included). All labour and materials are included! The main
              idea of this offer is to ensure you get to know our workmanship,
              ethics and exceptional quality. $320 (Super 2 eggshell from
              Cloverdale paints). Or $420 (Emerald matte from Sherwin Williams
              paints). Email us now!!
              <span className='text-base text-slate-50 ml-4'>
                Offer Starts Oct 27, 2024 and Ends Feb 28, 2025; You must call
                for this offer
              </span>
            </p>
          </div>
        </div>
        {/* CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 */}
        {/* CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 */}
        {/* CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 CARD 2 */}
        <div className='flex justify-end xs:mr-[5%] md:mr-[10%]'>
          <div className=' bg-green w-full xs:w-[calc(5rem*4)]  md:w-[calc(8rem*4)]  rounded-xl pb-4 relative animation-pushup'>
            <div className='relative rounded-t-xl w-full h-[calc(4rem*3.2)]  xs:h-[calc(5rem*2.75)]  md:h-[calc(8rem*2.75)] '>
              <Image
                src='/images/offers/interior-painting-offer-5-percent-off.png'
                alt='interior-painting-offer-5-percent-off.png'
                className='absolute  rounded-t-xl'
                fill={true}
              />
            </div>
            <h6 className='text-white    text-xl text-center my-8  capitalize px-4'>
              10% OFF - Interior Painting
            </h6>
            <div>
              <p className='px-4 text-justify'>
                Take advantage of this great deal and save big on your next
                interior painting project. Note: this offer does not include
                cabinet painting projects.
                <span className='text-base text-slate-50 ml-4'>
                  Offer Starts Oct 27, 2024 and Ends Feb 28, 2025; You must call
                  for this offer
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
