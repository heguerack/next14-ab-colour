// import styledBlogs from '../../styles/blogs.css'
import { GreenButton } from '@/components/util/Buttons'
import Image from 'next/image'
import { blogsPageData } from '../../../data/blogsPageData'

export const metadata = {
  title: 'Alberta Colour Painting Main Blog Page',
  description: 'decription goes here',
}
export default function BlogsPage() {
  return (
    <div className='py-8 md:py-12 xl:py-16 2xl:py-24 container m-auto  text-justify text-lg leading-relaxed'>
      <h1 className='my-6 text-center text-2xl font-semibold'>
        Alberta Colour Painting Blogs
      </h1>
      {blogsPageData.map((blog, index) => (
        <div
          key={index}
          className={` m-auto mb-24 md:mb-32  flex flex-col  w-[100%] xl:w-[60vw] 2xl:w-[30vw]  sm:rounded-b-lg  ${
            blog.bg ? blog.bg : ''
          }`}>
          <div className='relative w-[100%] h-[55vw] xl:h-[33vw] 2xl:h-[20.6vw] '>
            <Image
              src={blog.src}
              alt={blog.alt}
              className='absolute sm:rounded-t-lg'
              fill={true}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className=' sm:rounded-b-lg'>
            <h2 className='text-xl  font-medium my-4 text-center px-4'>
              {blog.title}
            </h2>
            <p className='px-4'>{blog.p}</p>
            <div className='flex justify-center my-4'>
              <GreenButton title='Read Full Blog' url={blog.url} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
