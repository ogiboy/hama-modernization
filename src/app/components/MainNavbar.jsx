'use client'

import NavLink from './NavLink'
import StickyNavbar from './StickyNavbar'
import TopNavbar from './TopNavbar'

import { usePathname } from '@/i18n/routing'
import { useEffect, useState } from 'react'
import { useScroll, useMotionValueEvent, useMotionValue } from 'motion/react'
import { useTranslations } from 'next-intl'

const MainNavbar = () => {
  const pathname = usePathname()
  const navMode = useMotionValue('top')
  const t = useTranslations('NavbarBreadcrumbs')
  const { scrollYProgress } = useScroll()
  const [isNavSticky, setIsNavSticky] = useState(false)

  const navLinks = [
    {
      id: 1,
      href: '/',
      text: t('homepage'),
    },
    {
      id: 2,
      href: '/about',
      text: t('about'),
    },
    {
      id: 3,
      href: '/services',
      text: t('services'),
    },
    {
      id: 4,
      href: '/work',
      text: t('work'),
    },
    {
      id: 5,
      href: '/contact-us',
      text: t('contact-us'),
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
  }, [navMode])

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
