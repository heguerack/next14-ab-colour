'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { AiFillCloseSquare } from 'react-icons/ai'
import {
  BsPauseCircleFill,
  BsPlayCircleFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'
import Image from 'next/image'

export default function SliderWidgetFullscreen({ images, setFullScreenOff }) {
  const data = images[0]
  // console.log(data)
  const [number, setNumber] = useState(0)
  const [run, setRun] = useState(false)
  // console.log(number)
  useEffect(() => {
    if (run) {
      let slider = setInterval(() => {
        let myNumber = number + 1
        if (myNumber > data.length - 1) {
          myNumber = 0
        }
        setNumber(myNumber)
      }, 2000)
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
    if (newNumber > data.length - 1) {
      newNumber = 0
    }
    console.log(number)
    setNumber(newNumber)
  }
  const goLeft = () => {
    let newNumber = number - 1
    if (newNumber < 0) {
      newNumber = data.length - 1
    }
    setNumber(newNumber)
  }

  return (
    <>
      <div className=' h-[85%]'>
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === number
                  ? 'relative flex  w-[100%] h-[100%] rounded-lg justify-center items-center flex-grow visible '
                  : ' invisible opacity-0'
              }>
              <Image
                src={item.url}
                alt={item.alt}
                className='absolute top-0 left-0  h-[100%] w-[100%] rounded-lg z-60'
                fill={true}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          )
        })}
      </div>

      {/* BUTTONS  BUTTONS  BUTTONS  BUTTONS  BUTTONS  BUTTONS  BUTTONS  */}
      <div className='flex justify-center items-center h-[15%]   '>
        <RiArrowGoBackFill
          onClick={setFullScreenOff}
          className='text-xl sm:text-2xl md:text-3xl mx-6 md:mx-8 text-gray-400 cursor-pointer hover:text-white'
        />
        <BsFillArrowLeftCircleFill
          onClick={goLeft}
          className=' text-2xl sm:text-3xl md:text-4xl  text-green cursor-pointer hover:text-greenDark'
        />

        {run ? (
          <BsPauseCircleFill
            onClick={togleSlider}
            className='text-2xl sm:text-3xl md:text-4xl mx-6 md:mx-8 text-green cursor-pointer hover:text-greenDark slider-button-pause'
          />
        ) : (
          <BsPlayCircleFill
            onClick={togleSlider}
            className='text-2xl sm:text-3xl md:text-4xl  mx-6 md:mx-8 text-green cursor-pointer hover:text-greenDark slider-button-play'
          />
        )}
        <BsFillArrowRightCircleFill
          onClick={goRight}
          className='text-2xl sm:text-3xl md:text-4xl text-green cursor-pointer hover:text-greenDark'
        />
        <AiFillCloseSquare
          onClick={setFullScreenOff}
          className='text-xl sm:text-2xl md:text-3xl mx-6 md:mx-8 text-gray-400 cursor-pointer hover:text-white slider-button-pause'
        />
      </div>
    </>
  )
}
