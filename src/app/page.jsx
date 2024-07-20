import Hero from '@/components/home/Hero'
import HomeBlogsOffers from '@/components/home/HomeBlogsOffers'
import HomeCredentials from '@/components/home/HomeCredentials'
import HomeGallery from '@/components/home/HomeGallery'
import HomeIntro from '@/components/home/HomeIntro'
import HomeServicesOverview from '@/components/home/HomeServicesOverview'
import HomeTestimonials from '@/components/home/HomeTestimonials'
import HomeVideo from '@/components/home/HomeVideo'
import HomeWhyChooseUs from '@/components/home/HomeWhyChooseUs'

export const metadata = {
  title:
    'Painting Company with Expert Calgary Painters for Exterior  and Interior House Painting services',
  description:
    'Looking for affordable Calgary painters? Our top-rated house painting company in Calgary offers professional interior and exterior painting services to meet all your needs.',
  viewport: 'width=device-width, initial-scale=1.0',
  canonicalUrl: 'https://www.albertacolourpainting.com',
  og: {
    title: 'Need Calgary Painters?',
    description:
      'Book your free estimate today with Alberta Colour Painting, the top-rated painting company in Calgary.',
    image:
      'https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp',
    url: 'https://www.albertacolourpainting.com',
    site_name: 'Alberta Colour Painting',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className='  '>
      <Hero />
      <HomeIntro />
      <HomeServicesOverview />
      <HomeTestimonials />
      <HomeWhyChooseUs />
      <HomeGallery />
      <HomeVideo />
      <HomeCredentials />
      <HomeBlogsOffers />
    </main>
  )
}
