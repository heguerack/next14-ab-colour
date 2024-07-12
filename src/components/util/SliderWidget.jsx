'use client'

import { useState, useEffect } from 'react'
import {
  BsPauseCircleFill,
  BsPlayCircleFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'
import Image from 'next/image'

export default function SliderWidget({ images }) {
  const [number, setNumber] = useState(0)
  const [run, setRun] = useState(false)

  useEffect(() => {
    if (run) {
      let slider = setInterval(() => {
        let myNumber = number + 1
        if (myNumber > images.length - 1) {
          myNumber = 0
        }
        setNumber(myNumber)
      }, 3000)
      return () => {
        clearInterval(slider)
      }
    } else {
      return
    }
  }, [number, run])

  const togleSlider = () => {
    setRun(!run)
  }

  const goRight = () => {
    let newNumber = number + 1
    if (newNumber > images.length - 1) {
      newNumber = 0
    }
    setNumber(newNumber)
  }
  const goLeft = () => {
    let newNumber = number - 1
    if (newNumber < 0) {
      newNumber = images.length - 1
    }
    setNumber(newNumber)
  }
  return (
    <div className='flex justify-center '>
      <div className='  w-full  h-[70vw] sm:h-[65vw] landscape:sm:w-[70vw]  landscape:sm:h-[70vh] landscape:2xl:w-[50vw]  '>
        <div className='h-[85%] w-[100%] flex justify-center'>
          {images?.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index === number
                    ? 'relative flex  w-[100%] h-[100%] rounded-lg justify-center flex-grow visible '
                    : ' invisible opacity-0'
                }>
                <div className='relative w-[100%] h-[100%]'>
                  <Image
                    src={item.url}
                    alt={item.alt}
                    className='absolute top-0 left-0  h-[100%] w-[100%] rounded-lg'
                    fill={true}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
        {/* BUTTONS  BUTTONS  BUTTONS  BUTTONS  BUTTONS  BUTTONS  BUTTONS  */}
        {/* BUTTONS  BUTTONS  BUTTONS  BUTTONS  BUTTONS  BUTTONS  BUTTONS  */}
        <div className='flex justify-center items-center relative my-6 gap-10  md:my-8 lg:gap-12  lg:my-12 2xl:my-6'>
          <BsFillArrowLeftCircleFill
            onClick={goLeft}
            className=' text-3xl sm:text-3xl md:text-4xl  text-green cursor-pointer hover:text-greenDark'
          />
          {run ? (
            <BsPauseCircleFill
              onClick={togleSlider}
              className='text-3xl sm:text-3xl md:text-4xl text-green cursor-pointer hover:text-greenDark slider-button-pause'
            />
          ) : (
            <BsPlayCircleFill
              onClick={togleSlider}
              className='text-3xl sm:text-3xl md:text-4xl  text-green cursor-pointer hover:text-greenDark slider-button-play'
            />
          )}
          <BsFillArrowRightCircleFill
            onClick={goRight}
            className='text-3xl sm:text-3xl md:text-4xl text-green cursor-pointer hover:text-greenDark'
          />
        </div>
      </div>
    </div>
  )
}
