import Image from 'next/image'

import { Link } from '@/i18n/routing'
import { motion } from 'motion/react'

const StickyNavbar = ({ scrollYProgress, navLinks, pathname, isNavSticky }) => {
  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isNavSticky ? 0 : '-100%', opacity: isNavSticky ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 h-[106px] bg-mainColor"
    >
      <motion.div
        style={{
          scaleX: scrollYProgress,
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: '#fff',
          borderRadius: '1px',
        }}
      />
      <nav className="custom-container py-[25px] px-[15px] w-full h-full flex justify-around items-center  font-montserrat text-white uppercase absolute z-50">
        <Link className="flex justify-center" href="/">
          <Image src="/logo.png" width={236} height={66} alt="brand logo" />
        </Link>
        <ul className="h-full w-[702px] px-[15px] flex justify-between items-start flex-wrap">
          {navLinks.map((navItem) => {
            return (
              <li key={navItem.id}>
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
export default StickyNavbar
