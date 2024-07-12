import ServiceHelper from '@/components/util/ServiceHelper'
import {
  ceilingTexturingImages,
  heading,
  ps,
} from '../../../../data/ceilingTexturing'

export const metadata = {
  title:
    "Calgary's Top Ceiling Texturing Services: Professional Ceiling Texturing by Alberta Colour Painting",
  description:
    'Looking for top-quality ceiling texturing services in Calgary? Look no further! Alberta Colour Painting specializes in delivering the best results for your ceilings. We offer professional ceiling texturing services to transform your space. Contact us today to schedule your consultation and give your ceilings a beautiful and textured finish.',
  viewport: 'width=device-width, initial-scale=1.0',
  canonicalUrl:
    'https://www.albertacolourpainting.com/services/ceiling-texturing-calgary',
}

export default function ceilingTexturingPage() {
  return (
    <>
      <ServiceHelper
        heading={heading}
        images={ceilingTexturingImages}
        ps={ps}
      />
    </>
  )
}
