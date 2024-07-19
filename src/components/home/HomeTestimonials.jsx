import HomeLazyGoogleReviews from './HomeLazyGoogleReviews'
import HomeLazyHomestarsSmall from './HomeLazyHomestarsSmall'
import HomeLazyHomestarsBig from './HomeLazyHomestarsBig'

export default function HomeTestimonials() {
  return (
    <section
      className='bg-slate-50 py-12 md:py-16'
      aria-labelledby='testimonials-heading'>
      <div className='max-w-[1600px] mx-auto leading-relaxed md:leading-loose'>
        <h2
          id='testimonials-heading'
          className='text-xl md:text-2xl text-center font-medium px-4 mb-4'>
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
        <HomeLazyGoogleReviews aria-label='Google Reviews' />
        <HomeLazyHomestarsSmall aria-label='Homestars Reviews Small' />
        <HomeLazyHomestarsBig aria-label='Homestars Reviews Big' />
      </div>
    </section>
  )
}
