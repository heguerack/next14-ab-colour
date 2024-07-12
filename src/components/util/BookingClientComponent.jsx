'use client'

import { InlineWidget } from 'react-calendly'
export default function BookingClientComponent() {
  return (
    <div className='inline-widget-wrapper  md:mb-32'>
      <InlineWidget
        className='calendly-widget'
        url='https://calendly.com/alberta-colour-painting/booking?hide_gdpr_banner=1'
        // style='min-width:320px;height:750px;'
      />
    </div>
  )
}
