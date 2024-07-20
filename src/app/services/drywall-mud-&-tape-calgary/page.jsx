import ServiceHelper from '@/components/util/ServiceHelper'
import { drywallImages, heading, ps } from '../../../../data/drywallData'

export const metadata = {
  title:
    'Expert Drywall Repair, Installation, and  Tape &  Mud Services in Calgary',
  description:
    'Looking for reliable drywall repair and installation services in Calgary? At Alberta Colour Painting, we offer a range of services including repair, installation, tapping, and mudding for both residential and commercial properties. Whether you are working on a new construction or a renovation, we have got you covered. Contact us today to learn more.',
  viewport: 'width=device-width, initial-scale=1.0',
  canonicalUrl:
    'https://www.albertacolourpainting.com/services/drywall-mud-&-tape-calgary',
}

export default function drywallPage() {
  return <ServiceHelper heading={heading} images={drywallImages} ps={ps} />
}
