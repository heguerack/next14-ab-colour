import { GreenButton } from '@/components/util/Buttons'
import Image from 'next/image'
import { blog2, blogsPageData, materials } from '../../../../data/blogsPageData'

export const metadata = {
  title:
    'The Top Products and Materials for House Painting: Expert Recommendations',
  description:
    "Looking for the best products and materials to use for your house painting project? Look no further! In this blog post, we share expert recommendations for everything you'll need to get the job done right. From paint and brushes to rollers and drop cloths, we've got you covered. By using the right tools and materials, you can achieve professional-quality results and make your painting project a success. Check out our recommendations and get started on your next project with confidence!",
}

export default function Page() {
  const blog = blogsPageData[2]
  return (
    <div className='bg-yellow-50  py-8 md:py-12 xl:py-16 2xl:py-24 container m-auto  text-justify text-lg leading-relaxed w-[100%] xl:w-[70vw] 2xl:w-[40vw]'>
      <div className={` m-auto flex flex-col    ${blog.bg ? blog.bg : ''}`}>
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
      <div className='m-auto sm:rounded-b-lg  w-[100%] px-4 '>
        {materials.map((item, index) => (
          <div key={index} className=''>
            <h4 className='text-center text-3xl my-5 '>{item.heading}</h4>
            {item.items?.map((item, index) => {
              return (
                <div key={index} className='mb-4'>
                  <h5 className='font-semibold text-lg mb-1'>
                    {item.subheading}
                  </h5>
                  {item.ps?.map((p, index) => (
                    <p key={index} className=''>
                      {p}
                    </p>
                  ))}
                </div>
              )
            })}
            <p>{item.p}</p>
          </div>
        ))}
        <div className='flex justify-center py-4 '>
          <GreenButton title='Go Back to Blogs' url='/blogs' />
        </div>
      </div>
    </div>
  )
}
