// import { homeGalleryImages, heading, paragraph } from '../../../data/homeData'
// import Script from 'next/script'
import SliderWidget from '@/components/util/SliderWidget'
import HomeTestimonials from '@/components/home/HomeTestimonials'
import { homeGalleryImages } from '../../../data/homeGalleryImages'

export default function page() {
  return (
    <>
      {/* Event snippet for booking-page (1) conversion page  */}
      {/* <Script id='google-tag-manager-thankyou-page'>
        {`gtag('event', 'conversion', {'send_to': 'AW-747569119/Fr05CN2975UZEN__u-QC'});`}
      </Script> */}
      <div>
        <h1 className='flex flex-col items-center justify-center bg-black text-white  text-3xl py-12 gap-4'>
          <span>Thank You</span>
          <span>For</span>
          <span>Booking</span>
          <span>Your </span>
          <span>Free Estimate!</span>
        </h1>
        <SliderWidget images={homeGalleryImages} />
        <HomeTestimonials />
      </div>
    </>
  )
}
