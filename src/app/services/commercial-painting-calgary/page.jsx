// import Script from 'next/script'
import ServiceHelper from '@/components/util/ServiceHelper'
import {
  commercialImages,
  heading,
  ps,
} from '../../../../data/commercialPaintingData'

export const metadata = {
  title:
    'Commercial Painters, Your Commercial Painting Company And Contractors in Calgary',
  description:
    'Complete resource for Painting Commercial Property and commercial space painting in Calgary.',
  viewport: 'width=device-width, initial-scale=1.0',
  canonicalUrl:
    'https://www.albertacolourpainting.com/services/commercial-painting-calgary',
}

export default function CommercialPaintingPage() {
  return (
    <>
      <ServiceHelper heading={heading} images={commercialImages} ps={ps} />
    </>
  )
}
