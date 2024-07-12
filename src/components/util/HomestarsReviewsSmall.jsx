export default function HomestarsReviewsSmall() {
  const smallHomestarsUrl =
    'https://HomeStars.com/widgets/reviews/alberta-colour-painting-ltd'
  return (
    <div className='relative right-1  flex justify-center w-full md:hidden '>
      <iframe
        height='280'
        frameborder='0'
        width='330'
        loading='lazy'
        src={smallHomestarsUrl}
        scrolling='no'></iframe>
    </div>
  )
}
