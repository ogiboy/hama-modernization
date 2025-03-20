'use client'

import LangSwitcher from './LangSwitcher'

import { usePathname } from '@/i18n/routing'
import { IconContext } from 'react-icons'
import { LuLanguages } from 'react-icons/lu'
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from 'motion/react'

const LangContainer = () => {
  const { scrollYProgress } = useScroll()
  const isVisible = useMotionValue(0)
  const pathname = usePathname()

  console.log('path:' + pathname)

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (pathname === '/') {
      isVisible.set(value * 100 > 10 ? 1 : 0)
    } else {
      isVisible.set(1)
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      style={{ opacity: isVisible }}
      className="fixed -right-16 hover:right-0 transition-all duration-300 ease-in-out bottom-1/4 z-[999] py-[5px] px-[10px] w-28 bg-mainColor text-white cursor-pointer rounded-[3px]"
    >
      <div className="w-full h-full flex justify-between items-center">
        <IconContext.Provider value={{ size: '25px' }}>
          <LuLanguages />
        </IconContext.Provider>

        <LangSwitcher />
      </div>
    </motion.div>
  )
}
export default LangContainer
