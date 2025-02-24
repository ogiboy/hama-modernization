'use client'

import NavLink from './NavLink'
import StickyNavbar from './StickyNavbar'
import TopNavbar from './TopNavbar'

import { usePathname } from '@/i18n/routing'
import { useEffect, useState } from 'react'
import { useScroll, useMotionValueEvent, useMotionValue } from 'motion/react'

const MainNavbar = () => {
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()
  const navMode = useMotionValue('top')
  const [isNavSticky, setIsNavSticky] = useState(false)

  const navLinks = [
    {
      id: 1,
      href: '/',
      text: 'Anasayfa',
    },
    {
      id: 2,
      href: '/about',
      text: 'Kurumsal',
    },
    {
      id: 3,
      href: '/services',
      text: 'Hizmetlerimiz',
    },
    {
      id: 4,
      href: '/work',
      text: 'Ürünlerimiz',
    },
    {
      id: 5,
      href: '/contact-us',
      text: 'İletişim',
    },
  ]

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    navMode.set(value * 100 > 10 ? 'fixed' : 'top')
  })

  useEffect(() => {
    const navFunc = (value) => {
      setIsNavSticky(value === 'fixed')
    }

    const unsubY = navMode.on('change', navFunc)

    return () => unsubY()
  }, [])

  return (
    <>
      <StickyNavbar
        navLinks={navLinks}
        pathname={pathname}
        scrollYProgress={scrollYProgress}
        isNavSticky={isNavSticky}
      />

      <TopNavbar
        navLinks={navLinks}
        pathname={pathname}
        isNavSticky={isNavSticky}
      />
    </>
  )
}
export default MainNavbar
