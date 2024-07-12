import ButtonEstimate from '@/components/util/ButtonEstimate'
import Image from 'next/image'
import { AiFillCheckCircle, AiFillCheckSquare } from 'react-icons/ai'
import { BsPatchCheckFill } from 'react-icons/bs'

export const metadata = {
  title:
    'Learn More About Alberta Colour Painting: Your Trusted Calgary Painting Company',
  description:
    'Our team of experienced painters is dedicated to delivering top-quality results for your home or business. From interior and exterior painting to wallpaper removal and more, we have the skills and expertise to handle all of your painting needs. Contact us today to learn more about our services and to schedule a consultation.',
}

export default function AboutPage() {
  return (
    <main className='2xl:text-center 2xl:py-16'>
      <div className=' w-full h-[50vw]  2xl:h-[20vw] 2xl:w-[50vw] relative mx-auto'>
        <Image
          fill={true}
          src='/images/about/homestars-best-of-the-best-banner.webp'
          alt='homestars banner - Best of the best award winner 2022 '
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex justify-center  '>
        <iframe
          className='w-full h-[56vw] 2xl:my-24 2xl:w-[50vw] 2xl:h-[28.1vw] '
          src='https://www.youtube.com/embed/u3HHpLQDVsk?autoplay=1&mute=1'
          allow='accelerometer;  autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>
      </div>
      <div className='  text-lg '>
        {/* CARD1  CARD1  --- CARD1  CARD1    CARD1  CARD1  --- CARD1  CARD1  --- CARD1  CARD1  --- CARD1  CARD1  --- CARD1*/}
        <div className='bg-gray-700 text-white p-4 py-16 md:py-24 xl:py-32'>
          <div className='container m-auto flex flex-col items-center'>
            <h4 className='text-xl xl:text-2xl font-semibold text-center mb-8'>
              TRAINED SKILLED HOUSE PAINTERS
            </h4>
            <p className='mb-8'>
              Have peace of mind knowing that we bring experience and skilled
              painters to you! Here are a few points to keep in mind:
            </p>
            <div className=' mb-4 flex '>
              <div className='m-1 mr-4'>
                <AiFillCheckCircle className='block' />
              </div>
              <p>
                We cover your furniture and all necessary areas prior to
                painting.
              </p>
            </div>
            <div className='mb-4 flex '>
              <div className='m-1 mr-4'>
                <AiFillCheckCircle className='' />
              </div>
              <p>
                We respect all of our clients homes as if they were our own. We
                take pride in our professionalism and ability to keep your space
                neat.
              </p>
            </div>
            <div className='mb-4 flex'>
              <div className='m-1 mr-4'>
                <AiFillCheckCircle className='' />
              </div>
              <p>
                Our team believes that skill is highly important. So we go above
                and beyond to deliver you a freshly painted home that will leave
                you very satisfied.
              </p>
            </div>
          </div>
        </div>
        {/* CARD2  CARD  --- CARD2  CARD    CARD2  CARD  --- CARD2  CARD  --- CARD2  CARD  --- CARD2  CARD  --- CARD2*/}
        <div className='bg-greenWhite text-greenDark p-4 py-16 md:py-24 xl:py-32'>
          <div className='container m-auto flex flex-col items-center'>
            <h4 className='text-xl xl:text-2xl font-semibold text-center mb-8'>
              REPUTATION FOR QUALITY
            </h4>
            <p className='mb-8'>
              We not only use the best materials on the market, but we have the
              best house painters out there too!
            </p>
            <div className='mb-4 flex'>
              <div className='m-1 mr-4'>
                <AiFillCheckSquare />
              </div>
              <p>
                Our commitment to quality means we use premium paints and
                materials to ensure long-lasting results.
              </p>
            </div>
            <div className='mb-4 flex'>
              <div className='m-1 mr-4'>
                <AiFillCheckSquare />
              </div>
              <p>
                Our team pays attention to every detail, ensuring a flawless
                finish on every project.
              </p>
            </div>
            <div className='mb-4 flex'>
              <div className='m-1 mr-4'>
                <AiFillCheckSquare />
              </div>
              <p>
                We receive numerous positive reviews and referrals from
                satisfied clients who appreciate our dedication to excellence.
              </p>
            </div>
          </div>
        </div>
        {/* CARD3  CARD  --- CARD3  CARD    CARD3  CARD  --- CARD3  CARD  --- CARD3  CARD   --- CARD3  CARD  --- CARD3*/}
        <div className='bg-green text-greenWhite p-4 py-16 pb-8 md:py-24 xl:pt-32 xl:pb-12'>
          <div className='container m-auto flex flex-col items-center'>
            <h4 className='text-xl xl:text-2xl font-semibold text-center mb-8'>
              GREENER THAN EVER
            </h4>
            <p className='mb-8'>
              At Alberta Colour we strive to make a positive impact on our
              environment.
            </p>
            <div className='mb-4 flex'>
              <div className='m-1 mr-4'>
                <BsPatchCheckFill />
              </div>
              <p>
                We use a range of zero to almost zero VOC paints for all of our
                projects. It is a win, win situation for clients, our painters
                and the environment.
              </p>
            </div>
            <div className='mb-4 flex'>
              <div className='m-1 mr-4'>
                <BsPatchCheckFill />
              </div>

              <p>
                Do you have left over paints? Let us give you a hand with them!
                We can take any leftover paints that you do not want and take
                them directly to our shop. We then take those paints to a
                landfill where they are collected for recycling purposes.
              </p>
            </div>
            <div className='mb-4 flex'>
              <div className='m-1 mr-4'>
                <BsPatchCheckFill />
              </div>
              <p>
                All of our garbage, cardboard and plastics used from our
                projects, are carefully sorted and selected for disposal at our
                shop
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center my-8'>
        <ButtonEstimate />
      </div>
    </main>
  )
}
