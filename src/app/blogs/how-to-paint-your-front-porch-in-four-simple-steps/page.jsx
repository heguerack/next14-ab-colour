import { GreenButton } from '@/components/util/Buttons'
import Image from 'next/image'
import { blog3, blogsPageData, porch } from '../../../../data/blogsPageData'

export const metadata = {
  title: '4 Simple Steps for Painting Your Front Porch',
  description:
    "Ready to give your front porch a fresh new look? Follow these 4 simple steps to achieve professional-quality results. From prepping the surface to choosing the right tools and techniques, we've got you covered. With a little bit of effort and the right know-how, you can transform your front porch in no time. Check out our step-by-step guide and get started on your next DIY painting project today!",
}

export default function age() {
  const blog = blogsPageData[3]
  return (
    <main className='bg-blue-50  md:px-8  md:py-12 lg:px-16 xl:px-32 3xl:px-64  xl:py-16 2xl:py-24 container m-auto  text-justify text-lg leading-relaxed w-[100%] xl:w-[90vw] 2xl:w-[80vw]'>
      <div className={`m-auto flex flex-col ${blog.bg ? blog.bg : ''}`}>
        <div className='relative w-[100%] h-[55vw] xl:h-[33vw] 2xl:h-[20.6vw] sm:rounded-t-lg'>
          <Image
            src={blog.src}
            alt={blog.alt}
            className='absolute'
            fill={true}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className=''>
          <h1 className='text-2xl  font-semibold  text-center p-4 py-6'>
            {blog.title}
          </h1>
          <p className='px-4'>{blog.p}</p>
          <div className='flex justify-center py-4 pb-8'>
            <GreenButton title='Go Back to Blogs' url='/blogs' />
          </div>
        </div>
      </div>
      <div className='m-auto  sm:rounded-b-lg  w-[100%] px-4 '>
        {porch.map((item, index) => (
          <div key={index}>
            <h4 className='text-center text-xl font-medium py-4'>
              {item.heading}
            </h4>
            <p>{item.p}</p>
          </div>
        ))}
        <div className='flex justify-center py-4 '>
          <GreenButton title='Go Back to Blogs' url='/blogs' />
        </div>
      </div>
    </main>
  )
}
