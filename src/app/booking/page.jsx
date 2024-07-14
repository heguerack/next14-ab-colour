import Calendly from '@/components/util/Calendly'

export const metadata = {
  title: 'Alberta Colour Painting Booking Page',
  description:
    'Booking page for painting services, drywall installs, popcorn removal, and ceiling texturing services at Alberta Colour Painting',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function BookingPainting() {
  return (
    <main>
      <h1 className='sr-only '>Booking Painting Services</h1>
      <Calendly />
    </main>
  )
}
