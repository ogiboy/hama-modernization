import Image from 'next/image'

import { Link } from '@/i18n/routing'
import { motion } from 'motion/react'

// fixed left-0 right-0

const TopNavbar = ({ navLinks, pathname, isNavSticky }) => {
  return (
    <motion.header
      initial={{ y: 15 }}
      animate={{ y: isNavSticky ? -100 : 15, opacity: isNavSticky ? 0 : 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed left-0 right-0  z-50 h-[100px] bg-mainColor"
    >
      <nav className="custom-container py-[25px] px-[15px] w-full h-full flex justify-around items-center  font-montserrat text-white bg-mainColor uppercase absolute top-4 z-50">
        <Link className="flex justify-center" href="/">
          <Image src="/logo.png" width={175} height={50} alt="brand logo" />
        </Link>
        <ul className="h-full px-[15px] w-[702px] flex justify-between items-end flex-wrap">
          {navLinks.map((navItem, index) => {
            return (
              <li key={navItem.id}>
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
      </nav>
    </motion.header>
  )
}
export default TopNavbar
