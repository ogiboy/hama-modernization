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

const HomepageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const intervalRef = useRef(null)
  let sliderInterval = 5000

  const startSlideShow = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        if (slideIndex < 5) {
          setSlideIndex((prevIndex) => prevIndex + 1)
        } else {
          setSlideIndex(0)
        }
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
    if (slideIndex > 0) {
      setSlideIndex((prevIndex) => prevIndex - 1)
    } else {
      setSlideIndex(5)
    }
  }

  const handleRightArrow = () => {
    if (slideIndex < 5) {
      setSlideIndex((prevIndex) => prevIndex + 1)
    } else {
      setSlideIndex(0)
    }
  }

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

  return (
    <div className="border-2 border-orange-700 max-h-[940px] h-screen w-screen flex justify-start items-end">
      <div className="z-10 self-start">
        <Image
          src={slideImages[slideIndex].src}
          alt={slideImages[slideIndex].alt}
          placeholder="blur"
          fill
          onLoad={() => {
            handleImageLoad()
          }}
        />
      </div>
      <div className="border-2 border-green-600 w-[666px] h-[351px] bg-softblueBg z-20">
        <div>
          <p>ENDÜSTRİYEL MUTFAK</p>
          <p className="text-[58px]">{slideImages[slideIndex].alt}</p>
        </div>
        <div>
          <Image
            src={leftArrow}
            alt="sol"
            width={50}
            height={50}
            onClick={() => {
              handleLeftArrow()
            }}
          />
          <Image
            src={rightArrow}
            alt="sağ"
            width={50}
            height={50}
            onClick={() => {
              handleRightArrow()
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default HomepageSlider
