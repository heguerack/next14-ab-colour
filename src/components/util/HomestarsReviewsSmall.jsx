export default function HomestarsReviewsSmall() {
  const smallHomestarsUrl =
    'https://HomeStars.com/widgets/reviews/alberta-colour-painting-ltd'
  return (
    <div
      className='relative right-1 flex justify-center w-full md:hidden'
      aria-labelledby='homestars-reviews-small-heading'>
      <h3 id='homestars-reviews-small-heading' className='sr-only'>
        Homestars Reviews Small
      </h3>
      <iframe
        height='280'
        frameBorder='0'
        width='330'
        loading='lazy'
        src={smallHomestarsUrl}
        scrolling='no'
        title='Homestars Reviews Small for Alberta Colour Painting'
        aria-label='Homestars Reviews Small for Alberta Colour Painting'></iframe>
    </div>
  )
}
