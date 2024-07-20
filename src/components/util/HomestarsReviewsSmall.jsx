import Script from 'next/script'

export default function HomestarsReviewsSmall() {
  const smallHomestarsUrl =
    'https://HomeStars.com/widgets/reviews/alberta-colour-painting-ltd'

  return (
    <>
      <iframe
        className=''
        height='280'
        frameBorder='0'
        width='330'
        src={smallHomestarsUrl}
        scrolling='no'
        title='Homestars Reviews Small for Alberta Colour Painting'
        aria-label='Homestars Reviews Small for Alberta Colour Painting'></iframe>
      <Script src='https://apps.elfsight.com/p/platform.js'></Script>
    </>
  )
}
