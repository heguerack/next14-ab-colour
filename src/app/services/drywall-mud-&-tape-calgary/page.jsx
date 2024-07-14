import ServiceHelper from '@/components/util/ServiceHelper'
import { popcornImages, heading, ps } from '../../../../data/popcornData'

export const metadata = {
  title: 'Calgary Popcorn Ceiling Removal and Repair: Professional Services',
  description:
    'Want ceiling popcorn removal services in Calgary? Look no further! Our team is here to transform your popcorn ceilings into smooth and flat surfaces. Contact us today to schedule your consultation and get started on your home renovation project.',
  viewport: 'width=device-width, initial-scale=1.0',
  canonicalUrl:
    'https://www.albertacolourpainting.com/services/popcorn-ceiling-removal-calgary',
}

export default function popcornRemovalPage() {
  return <ServiceHelper heading={heading} images={popcornImages} ps={ps} />
}
