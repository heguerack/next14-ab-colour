import ServiceHelper from '@/components/util/ServiceHelper'
import {
  exteriorImages,
  ps,
  heading,
} from '../../../../data/exteriorPaintingData'

export const metadata = {
  title:
    "Calgary's Top Exterior Painting Services: Professional Exterior Painting by Alberta Colour Painting",
  description:
    'Looking for top-quality exterior painting services in Calgary? Alberta Colour Painting specializes in delivering the best results for your home or business exteriors. We offer professional exterior painting services to transform your space. Contact us today to schedule your consultation and give your exteriors a beautiful finish.',
  viewport: 'width=device-width, initial-scale=1.0',
  canonicalUrl:
    'https://www.albertacolourpainting.com/services/exterior-painting-calgary',
}

export default function exteriorPaintingPage() {
  return (
    <>
      <ServiceHelper heading={heading} images={exteriorImages} ps={ps} />
    </>
  )
}
