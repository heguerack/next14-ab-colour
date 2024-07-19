export default function GoogleVideo() {
  return (
    <div className='flex justify-center  '>
      <iframe
        className='w-full h-[56vw] 2xl:my-24 2xl:w-[50vw] 2xl:h-[28.1vw] '
        src='https://www.youtube.com/embed/u3HHpLQDVsk?autoplay=1&mute=1'
        allow='accelerometer;  autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>
    </div>
  )
}
