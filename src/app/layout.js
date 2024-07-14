import { Inter } from 'next/font/google'
import './globals.css'
import HeaderWrapper from '@/components/navigation/HeaderWrapper'
import Badges from '@/components/util/Badges'
import Sitemap from '@/components/util/Sitemap'
import Footer from '@/components/util/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alberta Colour Painting - Top Rated Affordable Calgary Painters',
  description:
    'Looking for affordable Calgary painters? We are a top-rated house painting company in Calgary, offering interior house painters for your needs.',
  keywords: [
    'Calgary painters, painting company Calgary, interior painting Calgary, interior painters Calgary',
  ],
  viewport: 'width=device-width, initial-scale=1.0',
  canonicalUrl: 'https://www.albertacolourpainting.com',
  og: {
    title: 'Need Calgary Painters?',
    description: 'Book your free estimate today!',
    image:
      '/images/best-of-the-best-homestars-award-winner-2024-white-version.png', // Updated local image path
    url: 'https://www.albertacolourpainting.com',
    site_name: 'Alberta Colour Painting',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    image: [
      'https://www.albertacolourpainting.com/images/best-of-the-best-homestars-award-winner-2024-white-version.png',
      'https://www.albertacolourpainting.com/images/bbb-A+-alberta-colour-painting.webp',
      'https://www.albertacolourpainting.com/images/google-reviews-4.9-rating.png',
    ],
    '@id': 'https://www.albertacolourpainting.com/',
    name: 'Alberta Colour Painting Ltd',
    hasMap:
      'https://www.google.com/maps/place/Alberta+Colour+Painting+Ltd./@50.9240786-113.9508035,15z/data=!4m6!3m5!1s0x5371773f98224b4f:0xb012918acd574a36!8m2!3d50.9240786!4d-113.9508035!16s%2Fg%2F11h1dpzfmw?hl=en&entry=ttu',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '370 Brightonstone Green SE',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      postalCode: 'T2Z 0H1',
      addressCountry: 'Canada',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '16:00',
      },
    ],
    url: 'https://www.albertacolourpainting.com/',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '122',
    },
    sameAs: [
      'https://www.instagram.com/albertacolourpaintingltd/?hl=en',
      'https://www.youtube.com/@albertacolourpainting',
      'https://www.facebook.com/albertacolourpainting/',
      'https://homestars.com/companies/YOUR_CORRECT_HOMESTARS_LINK',
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Calgary',
    },
    telephone: '+15879666547',
    priceRange: 'Call for Quote',
  }

  return (
    <html lang='en'>
      <Script
        type='application/ld+json'
        id='json-ld'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}></Script>
      <body className={`${inter.className} text-lg tracking-wide`}>
        <HeaderWrapper />
        <div className='relative top-[5rem]'>{children}</div>
        <Badges />
        <Sitemap />
        <Footer />
      </body>
    </html>
  )
}
