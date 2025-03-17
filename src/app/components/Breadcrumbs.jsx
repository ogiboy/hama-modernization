'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

const Breadcrumbs = () => {
  const pathname = usePathname()
  const localePrefix = pathname.includes('/tr/')
    ? '/tr/'
    : pathname.includes('/en/')
    ? '/en/'
    : '/'
  const userFriendly = pathname.split(localePrefix).filter((path) => path)
  const t = useTranslations('NavbarBreadcrumbs')

  return (
    <nav className="border-b-4 border-mainColor w-fit pb-[5px]">
      <Link
        href="/"
        className="font-robotoSlab text-[#0d0d0d] hover:text-mainColor"
      >
        {t('homepage')}{' '}
      </Link>

      {userFriendly &&
        userFriendly.map((path) => {
          let crumb = t(path) || ''

          return (
            <Link
              key={path}
              href={path}
              className="font-robotoSlab text-[#959494] hover:text-mainColor"
              onClick={(e) => e.preventDefault()}
            >
              <span>/</span> {crumb}
            </Link>
          )
        })}
    </nav>
  )
}

export default Breadcrumbs
