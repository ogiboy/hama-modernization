import Image from 'next/image'
import LangSwitcher from './LangSwitcher'

import { Link } from '@/i18n/routing'
import { motion } from 'motion/react'

const TopNavbar = ({ navLinks, pathname, isNavSticky }) => {
  return (
    <motion.header
      initial={{ y: '15px', opacity: 1 }}
      animate={{ y: isNavSticky ? -100 : '15px', opacity: isNavSticky ? 0 : 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed left-0 right-0 z-50 h-[100px] bg-mainColor"
    >
      <nav className="custom-container py-[25px] px-[15px] w-full h-full flex justify-around items-center font-montserrat text-white uppercase absolute z-50">
        <Link className="flex justify-center items-center" href="/">
          <Image src="/logo.png" width={175} height={50} alt="brand logo" />
        </Link>
        <ul className="h-full w-[795px] flex justify-between items-end flex-wrap">
          {navLinks.map((navItem, index) => {
            return (
              <li key={navItem.id} className="ml-[40px]">
                <span className="text-xs">0{index + 1}.</span>
                <Link
                  href={navItem.href}
                  text={navItem.text}
                  className={`hover:underline ${
                    pathname === navItem.href ? 'font-bold' : 'font-normal'
                  }`}
                >
                  {navItem.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <LangSwitcher />
      </nav>
    </motion.header>
  )
}
export default TopNavbar
