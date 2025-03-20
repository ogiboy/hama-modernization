'use client'

import aboutus1 from '../../../public/aboutus-images/aboutus1.png'
import aboutus2 from '../../../public/aboutus-images/aboutus2.png'
import aboutus3 from '../../../public/aboutus-images/aboutus3.png'
import aboutus4 from '../../../public/aboutus-images/aboutus4.png'

import Image from 'next/image'

import { useState, useEffect, useRef, useCallback } from 'react'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import { IconContext } from 'react-icons'

const AboutSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const intervalRef = useRef(null)
  let sliderInterval = 1200

  const slideImages = [
    {
      id: 1,
      src: aboutus1,
      alt: 'about us',
    },
    {
      id: 2,
      src: aboutus2,
      alt: 'about us',
    },
    {
      id: 3,
      src: aboutus3,
      alt: 'about us',
    },
    {
      id: 4,
      src: aboutus4,
      alt: 'about us',
    },
  ]

  const startSlideShow = useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slideImages.length)
      }, sliderInterval)
    }
  }, [sliderInterval, slideImages.length])

  const stopSlideShow = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  useEffect(() => {
    if (isImageLoaded) {
      startSlideShow()
    }

    return () => stopSlideShow()
  }, [isImageLoaded, startSlideShow])

  const handleImageLoad = () => setIsImageLoaded(true)

  const handleLeftArrow = () => {
    setSlideIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : slideImages.length - 1
    )
  }

  const handleRightArrow = () => {
    setSlideIndex((prevIndex) =>
      prevIndex < slideImages.length - 1 ? prevIndex + 1 : 0
    )
  }

  return (
    <section className="custom-container px-0 overflow-hidden h-[460px] mt-[150px] bg-slate-400 relative select-none">
      <div className="w-full flex justify-between items-center absolute top-1/2 bottom-1/2 z-50 left-0">
        <button
          onClick={() => handleLeftArrow()}
          className="w-[82px] h-[72px] flex justify-center items-center bg-white hover:cursor-pointer"
        >
          <IconContext.Provider value={{ color: 'gray', size: '3em' }}>
            <HiArrowLongLeft />
          </IconContext.Provider>
        </button>
        <button
          onClick={() => handleRightArrow()}
          className="w-[82px] h-[72px] flex justify-center items-center bg-white hover:cursor-pointer"
        >
          <IconContext.Provider value={{ color: 'gray', size: '3em' }}>
            <HiArrowLongRight />
          </IconContext.Provider>
        </button>
      </div>

      <div className="overflow-hidden">
        {slideImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
              index === slideIndex
                ? 'translate-x-0'
                : index < slideIndex
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="bg-cover bg-center"
              placeholder="blur"
              fill
              onLoad={() => handleImageLoad()}
              onMouseEnter={() => stopSlideShow()}
              onMouseLeave={() => startSlideShow()}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
export default AboutSlider
