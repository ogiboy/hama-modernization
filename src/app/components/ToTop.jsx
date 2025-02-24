'use client'

import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from 'motion/react'

const ToTop = () => {
  const { scrollYProgress } = useScroll()
  const isVisible = useMotionValue(0)

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    // console.log('value: ' + value * 100)
    isVisible.set(value * 100 > 80 ? 1 : 0)
  })

  const smoothScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      style={{ opacity: isVisible }}
      className="fixed bottom-[90px] right-[27px] z-[999] transition-opacity duration-500 ease-in-out"
    >
      <nav
        onClick={() => smoothScroll()}
        className="bg-mainColor text-white cursor-pointer rounded-[3px]"
      >
        <p className="py-[5px] pr-[10px] pl-[30px] text-center relative font-robotoSlab text-xl">
          <span className="animate-bounce absolute left-3">▲</span>
          Yukarı Çık
        </p>
      </nav>
    </motion.div>
  )
}
export default ToTop
