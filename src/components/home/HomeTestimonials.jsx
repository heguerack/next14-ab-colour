import GoogleReviews from '../util/GoogleReviews'
import HomestarsReviewsBig from '../util/HomestarsReviewsBig'
import HomestarsReviewsSmall from '../util/HomestarsReviewsSmall'

export default function HomeTestimonials() {
  return (
    <section className='bg-slate-50  py-12 md:py-16'>
      <div className='max-w-[1600px] mx-auto leading-relaxed md:leading-loose'>
        <h2 className='text-xl md:text-2xl text-center font-medium  px-4 mb-4'>
          What Our Calgary Customers Say About Alberta Colour Painting
        </h2>
        <p className='text-justify px-4 mb-2'>
          Discover why Alberta Colour Painting is a top choice for professional
          painting services in Calgary. Our satisfied customers share their
          experiences, highlighting our commitment to exceptional quality and
          customer service. From detailed interior painting to comprehensive
          exterior projects, our testimonials reflect the high standards and
          dedication of our skilled Calgary painters. Whether you're looking for
          Calgary house painters or a full-service Calgary painting company, our
          customers' reviews speak volumes about our expertise and reliability.
        </p>
        <GoogleReviews />
        <HomestarsReviewsSmall />
        <HomestarsReviewsBig />
      </div>
    </section>
  )
}
