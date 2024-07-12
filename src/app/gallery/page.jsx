import SliderWidget from '@/components/util/SliderWidget'
import Galleries from '@/components/util/Galleries'
import { homeGalleryImages } from '../../../data/homeGalleryImages'

export const metadata = {
  title:
    'Alberta Colour Painting Image Gallery: Before and After Transformations',
  description:
    "Take a look at the amazing transformations we've achieved for our clients with Alberta Colour Painting! Our image gallery showcases a variety of before and after photos of interior and exterior painting projects. From cozy cottages to modern apartments, we've got a wide range of styles and finishes to inspire you. Whether you're looking for ideas for your own home or just want to see the quality of our work, our image gallery is the perfect place to start. Take a look and get inspired today!",
}

export default function GalleryPage() {
  return (
    <section className='max-w-[1000px] m-auto '>
      <h1 className='text-center  text-2xl font-semibold my-10'>Our Gallery</h1>
      <div className='flex justify-center  '>
        <div className='  w-full  h-[70vw] sm:h-[65vw] landscape:sm:w-[70vw]  landscape:sm:h-[70vh] landscape:2xl:w-[50vw]  '>
          <SliderWidget images={homeGalleryImages} />
        </div>
      </div>
      <div className='mt-16 px-2'>
        <Galleries />
      </div>
    </section>
  )
}
