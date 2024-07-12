import Hero from '@/components/home/Hero'
import HomeBlogsOffers from '@/components/home/HomeBlogsOffers'
import HomeCredentials from '@/components/home/HomeCredentials'
import HomeGallery from '@/components/home/HomeGallery'
import HomeIntro from '@/components/home/HomeIntro'
import HomeServicesOverview from '@/components/home/HomeServicesOverview'
import HomeTestimonials from '@/components/home/HomeTestimonials'
import HomeVideo from '@/components/home/HomeVideo'
import HomeWhyChooseUs from '@/components/home/HomeWhyChooseUs'

export default function Home() {
  return (
    <main className='  '>
      <Hero />
      <HomeIntro />
      <HomeServicesOverview />
      <HomeWhyChooseUs />
      <HomeGallery />
      <HomeVideo />
      <HomeTestimonials />
      <HomeCredentials />
      <HomeBlogsOffers />
    </main>
  )
}
