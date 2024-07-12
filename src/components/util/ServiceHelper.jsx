import AwardsBlack from './AwardsBlack'
import ButtonEstimate from './ButtonEstimate'
import { GreenButton } from './Buttons'
import SliderWidget from './SliderWidget'

export default function ServiceHelper({ images, heading, ps }) {
  return (
    <section className='m-auto py-12 2xl:w-[80vw] 3xl:w-[60vw] max-w-[1000px] justify-cente text-justify text-lg'>
      <h1 className='text-center text-2xl xl:text-3xl font-semibold  mb-[1.5rem] md:mb-[1.5rem] capitalize  px-2'>
        {heading}
      </h1>
      <SliderWidget images={images} />
      <div className='flex justify-center  my-[3rem] 2xl:mt-0 '>
        <GreenButton url='/gallery' title='Visit Gallery' />
      </div>
      <AwardsBlack />
      <div className='flex justify-center my-16 md:my-24'>
        <ButtonEstimate />
      </div>
      <div className='m-auto px-4  '>
        {ps?.map((p, i) => {
          return (
            <p key={i} className='mb-6'>
              {p}
            </p>
          )
        })}
      </div>
    </section>
  )
}
