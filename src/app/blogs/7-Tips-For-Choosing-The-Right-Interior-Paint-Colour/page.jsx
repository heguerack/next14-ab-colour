import { GreenButton } from '@/components/util/Buttons'
import Image from 'next/image'
import { blogsPageData, tips } from '../../../../data/blogsPageData'

export const metadata = {
  title: '7 Expert Tips for Choosing the Perfect Interior Paint Colour',
  description:
    "Are you struggling to choose the perfect interior paint colour for your home? Look no further! In this blog post, we share 7 expert tips for selecting the right shade for your space. From considering the size of your room to testing out paint samples, these tips will help you make an informed decision and achieve the look you want. Don't let the daunting task of choosing a paint colour hold you back - check out our tips and get started on your next painting project with confidence.",
}

export default function BlogsPage() {
  const blog = blogsPageData[0]
  return (
    <div className='bg-red-50 md:px-8  md:py-12 lg:px-16 xl:px-32 3xl:px-64  xl:py-16 2xl:py-24 container m-auto  text-justify text-lg leading-relaxed w-[100%] xl:w-[90vw] 2xl:w-[80vw]'>
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
      <div className='m-auto  sm:rounded-b-lg  w-[100%] px-4 '>
        {tips.map((item, index) => (
          <div key={index}>
            <h4 className='text-center text-xl font-medium py-4'>
              {item.heading}
            </h4>
            {/* This is because the data I ma pulling has " ' ", and i cant use
            &apos; */}
            <p>
              {item.ps?.map((p, i) => (
                <div key={i}>{p}</div>
              ))}
            </p>
          </div>
        ))}
        <div className='flex justify-center py-4 '>
          <GreenButton title='Go Back to Blogs' url='/blogs' />
        </div>
      </div>
    </div>
  )
}
