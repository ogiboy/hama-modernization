'use client'

import Image from 'next/image'
import leftArrow from '../../../public/home-slider-images/arrow-left.png'
import rightArrow from '../../../public/home-slider-images/arrow-right.png'
import slide1 from '../../../public/home-slider-images/slide1.jpg'
import slide2 from '../../../public/home-slider-images/slide2.jpg'
import slide3 from '../../../public/home-slider-images/slide3.webp'
import slide4 from '../../../public/home-slider-images/slide4.jpg'
import slide5 from '../../../public/home-slider-images/slide5.jpg'
import slide6 from '../../../public/home-slider-images/slide6.jpg'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'

const HomepageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const intervalRef = useRef(null)
  let sliderInterval = 5000
  const slideImages = [
    {
      id: 1,
      src: slide1,
      alt: 'Hotel Mutfakları',
    },
    {
      id: 2,
      src: slide2,
      alt: 'Show Mutfağı',
    },
    {
      id: 3,
      src: slide3,
      alt: 'Açık Büfeler',
    },
    {
      id: 4,
      src: slide4,
      alt: 'Cafeteria Mutfakları',
    },
    {
      id: 5,
      src: slide5,
      alt: 'Restaurant Mutfakları',
    },
    {
      id: 6,
      src: slide6,
      alt: 'Çamaşırhaneler',
    },
  ]

  const startSlideShow = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slideImages.length)
      }, sliderInterval)
    }
  }

  const stopSlideShow = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  useEffect(() => {
    if (isImageLoaded) {
      startSlideShow()
    }

    return () => stopSlideShow()
  }, [isImageLoaded])

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

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
    <div className="max-h-[940px] h-[98vh] w-full cursor-default select-none overflow-hidden relative">
      <motion.div
        key={slideIndex}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="absolute inset-0 z-10 w-full h-screen"
      >
        <Image
          src={slideImages[slideIndex].src}
          alt={slideImages[slideIndex].alt}
          placeholder="blur"
          fill
          // objectFit="cover"
          onLoad={() => {
            handleImageLoad()
          }}
        />
      </motion.div>

      <div className="w-[780px] h-[442px] z-20 absolute bottom-0">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          className="bg-softblueBg w-full h-full flex flex-col justify-evenly items-start pl-[15%] relative top-[25%] -left-[15%]"
        >
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3.5, ease: 'easeInOut' }}
            className="ml-[34px]"
          >
            <p className="tracking-[2px] font-normal font-montserrat text-white text-xl whitespace-nowrap">
              ENDÜSTRİYEL MUTFAK
            </p>
            <p className="text-[46px] w-1/2 text-white uppercase font-bold font-montserrat leading-[72px] whitespace-normal">
              {slideImages[slideIndex].alt}
            </p>
          </motion.div>
          <div className="h-16 w-72 ml-[34px] flex justify-start items-start gap-3">
            <Image
              src={leftArrow}
              alt="sol ok"
              width={50}
              height={50}
              onClick={() => {
                handleLeftArrow()
              }}
              className="hover:cursor-pointer"
            />
            <Image
              src={rightArrow}
              alt="sağ ok"
              width={50}
              height={50}
              onClick={() => {
                handleRightArrow()
              }}
              className="hover:cursor-pointer"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default HomepageSlider
