import ButtonEstimate from '@/components/util/ButtonEstimate'
import FormFront from '@/components/util/FormFront'
import Image from 'next/image'

export const metadata = {
  title: 'Alberta Colour Painting Contact Page',
  description:
    'Get a hold of Alberta Colour painting by phone, email or text message!',
  viewport: 'width=device-width, initial-scale=1.0',
  canonicalUrl: 'https://www.albertacolourpainting.com/contact',
}

export default function ContactPage() {
  return (
    <div className=''>
      <div className='relative w-full h-[40vw]   2xl:h-[20vw]'>
        <Image
          className='absolute'
          src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797234/contact/alberta-colour-painting-contact-showcase_yns8do.jpg'
          fill={true}
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <section className='text-center mb-16 p-4'>
        <h1 className='mt-6 mb-2 text-xl font-medium'>CONTACT US</h1>
        <p>
          Our goal is to provide the best painting experience for you. We are
          located at the South East quadrant of Calgary.
        </p>
        <div className='flex flex-col items-center'>
          {/* <iframe
            className='my-12 w-[100%] h-[50vw] md:w-[70%] md:h-[35vw] 2xl:h-[20vw] 2xl:w-[40vw]'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.9807617116253!2d-113.95298178425132!3d50.924072879543495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717788b1786227%3A0x18e228a7ec17a85a!2s370+Brightonstone+Green+SE%2C+Calgary%2C+AB!5e0!3m2!1sen!2sca!4v1553650854182?zoom=12'></iframe> */}
          <iframe
            className='my-12 w-[100%] h-[50vw] md:w-[70%] md:h-[35vw] 2xl:h-[20vw] 2xl:w-[40vw]'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10059.921809882382!2d-113.9508035!3d50.9240786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371773f98224b4f%3A0xb012918acd574a36!2sAlberta%20Colour%20Painting%20Ltd.!5e0!3m2!1sen!2sca!4v1709515066721!5m2!1sen!2sca'></iframe>
          <div>
            <h6>ADDRESS</h6>
            <p className='mb-6'>
              370 Brightonstone Green SE, Calgary, Alberta, Canada
            </p>
            <h6>EMAIL</h6>
            <p className='mb-6'>info@albertacolourpainting.com</p>
            <h6>PHONE NUMBER</h6>
            <p className='mb-6'>587-966-6547</p>
          </div>
          <ButtonEstimate />
          <div className='mt-16'>
            <FormFront />
          </div>
        </div>
      </section>
    </div>
  )
}
