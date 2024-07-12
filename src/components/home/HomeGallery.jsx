import SliderWidget from '../util/SliderWidget'
import { homeGalleryImages } from '../../../data/homeGalleryImages'

export default function HomeGallery() {
  return (
    <section className=' text-center bg-slate-200 py-12 md:py-16'>
      <div className='max-w-[1600px] mx-auto leading-relaxed md:leading-loose'>
        <div className='bg-white mx-4 rounded mb-8 px-1 py-2'>
          <h2 className='text-xl md:text-2xl text-center font-medium mb-2'>
            Explore Our Recent Calgary Painting Projects
          </h2>
          <h3 className='max-w-[1000px] m-auto'>
            Before and after images showcasing the expertise of our Calgary
            house painters
          </h3>
        </div>

        <SliderWidget images={homeGalleryImages} />
        <div className='px-4 mt-12'>
          <p className='text-justify mb-2'>
            Take a look at our gallery to see the high-quality work our Calgary
            house painters have completed. Each project, from interior makeovers
            to exterior transformations, demonstrates our commitment to
            excellence and meticulous attention to detail.
          </p>
          <p className='text-justify'>
            We invite you to explore the diversity of our work, which features
            various styles and finishes tailored to meet our clients' unique
            preferences and needs. This gallery not only showcases the
            versatility and skill of our Calgary painters at Alberta Colour
            Painting but also reflects our dedication to enhancing the beauty
            and value of every property we touch. Our interior painting
            projects, in particular, highlight the transformations we achieve
            within homes.
          </p>
        </div>
      </div>
    </section>
  )
}
