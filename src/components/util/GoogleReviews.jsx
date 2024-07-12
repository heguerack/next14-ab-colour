// 'use client'
import Script from 'next/script'

export default function GoogleReviews() {
  return (
    <div className='mt-4'>
      <div className='elfsight-app-b58b23de-5664-445b-abfd-1bfb3f486561 google-iframe'></div>
      <Script src='https://apps.elfsight.com/p/platform.js' defer></Script>
    </div>
  )
}
