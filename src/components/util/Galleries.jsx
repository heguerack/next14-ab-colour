'use client'

import { useState } from 'react'
import Image from 'next/image'
import SliderWidgetFullscreen from './SliderWidgetFullscreen'
import ButtonEstimate from './ButtonEstimate'
// IMAGES IMAGES IMAGES IMAGES IMAGES
// IMAGES IMAGES IMAGES IMAGES IMAGES
import { builtinImages } from '../../../data/builtInImages'
import { cabinetImages } from '../../../data/cabinetPaintingImages'
import { ceilingTexturingImages } from '../../../data/ceilingTexturing'
import { commercialImages } from '../../../data/commercialPaintingData'
import { drywallImages } from '../../../data/drywallData'
import { exteriorImages } from '../../../data/exteriorPaintingData'
import { garageImages } from '../../../data/garageImages'
import { homeGalleryImages } from '../../../data/homeGalleryImages'
import { interiorImages } from '../../../data/interiorPaintingData'
import { popcornImages } from '../../../data/popcornData'
import { railingImages } from '../../../data/railingImages'
import { sidingImages } from '../../../data/sidingImages'
import { trimBaseboardsImages } from '../../../data/trimInteriorImages'
import { wallPaintingImages } from '../../../data/wallPaintingImages'
import { galleryCards } from '../../../data/galleryCardImages'
// IMAGES IMAGES IMAGES IMAGES IMAGES
// IMAGES IMAGES IMAGES IMAGES IMAGES
export default function Galleries({ bg }) {
  const [showSliderFullScreen, setShowSliderFullScreen] = useState(false)
  const [fullScreenImages, setFullScreenImages] = useState([])

  const allImages = [
    builtinImages,
    ceilingTexturingImages,
    commercialImages,
    drywallImages,
    exteriorImages,
    garageImages,
    cabinetImages,
    // homeGalleryImages, not includedas this is the main gallery
    interiorImages,
    popcornImages,
    railingImages,
    sidingImages,
    trimBaseboardsImages,
    wallPaintingImages,
  ]

  const getImages = (index) => {
    setShowSliderFullScreen(true)
    const filteredImages = allImages.filter((items, i) => i === index)
    setFullScreenImages(...fullScreenImages, filteredImages)
  }

  const setFullScreenOff = () => {
    setShowSliderFullScreen(false)
    setFullScreenImages([])
  }
  return (
    <div className={'pb-8 sm:pb-2'}>
      <div className='flex justify-center  flex-wrap  gap-4  xs:gap-5 sm:gap-6 md:gap-8 w-full text-sm'>
        {galleryCards.map((card, index) => (
          <div
            key={index}
            className='group  w-[9rem] xs:w-[10rem] sm:w-[11rem] md:w-[14rem] bg-green rounded-lg'>
            <div
              className='relative rounded-t-lg w-full  h-[9rem] xs:h-[10rem] sm:h-[11rem] text-white inline-block   cursor-pointer group '
              key={index}
              onClick={() => getImages(index)}>
              <Image
                src={card.url}
                alt={card.alt}
                className='absolute rounded-t-lg group-hover:scale-110'
                fill={true}
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className='absolute top-0 left-0 rounded-t-lg w-full h-full bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(0,0,0,0.2)] group-hover:scale-110  '></div>
            </div>
            <h3 className=' group-hover:scale-110 text-center bg-green rounded-b-lg text-white m-0 p-1'>
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      {showSliderFullScreen && (
        <div className='fixed top-0 left-0  bg-[rgba(0,0,0,.9)] z-50 flex items-center justify-center  h-full w-full'>
          <div className='  h-[75vw] w-[100%]  landscape:h-[100%] landscape:2xl:w-[60%] 2xl:pt-4'>
            <SliderWidgetFullscreen
              images={fullScreenImages}
              setFullScreenOff={setFullScreenOff}
              // url={`${url ? url : ''}`}
              fullscreen='true'
            />
          </div>
        </div>
      )}
      <div className='m-auto flex w-[80%] sm:w-[78%] md:w-[60%] justify-center mt-8'>
        <ButtonEstimate textColor={'black'} bg={'bg-white'} />
      </div>
    </div>
  )
}
