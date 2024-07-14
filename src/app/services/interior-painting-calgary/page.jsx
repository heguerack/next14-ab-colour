import ServiceHelper from '@/components/util/ServiceHelper'
import {
  interiorImages,
  ps,
  heading,
} from '../../../../data/interiorPaintingData'

export const metadata = {
  title:
    "Calgary's Top Interior Painters: Professional Interior Painting Services",
  description:
    'Looking for top-quality interior painting services in Calgary? Look no further! Our team of professional house painters is dedicated to delivering the best results for your home. We are your one-stop resource for all of your interior painting needs in Calgary.',
  viewport: 'width=device-width, initial-scale=1.0',
  canonicalUrl:
    'https://www.albertacolourpainting.com/services/interior-painting-calgary',
}

export default function InteriorPaintingPage() {
  return (
    <main>
      <h1 className='sr-only'>Calgary Interior Painting Services</h1>
      <ServiceHelper heading={heading} images={interiorImages} ps={ps} />
    </main>
  )
}
