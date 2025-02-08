'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumbs = () => {
  const pathname = usePathname()
  const userFriendly = pathname.split('/tr/').filter((path) => path)

  return (
    <nav className="border-b-4 border-mainColor w-fit pb-[5px]">
      <Link
        href="/"
        className="font-robotoSlab text-[#0d0d0d] hover:text-mainColor"
      >
        Anasayfa{' '}
      </Link>

      {userFriendly &&
        userFriendly.map((path) => {
          let crumb = path

          switch (crumb) {
            case 'about':
              crumb = 'Hakkımızda'
              break

            case 'services':
              crumb = 'Hizmetlerimiz'
              break

            case 'work':
              crumb = 'Ürünlerimiz'
              break

            case 'contact-us':
              crumb = 'İletişim'
              break

            default:
              crumb = ' '
          }

          return (
            <Link
              key={path}
              href={path}
              className="font-robotoSlab text-[#959494] hover:text-mainColor"
            >
              <span>/</span> {crumb}
            </Link>
          )
        })}
    </nav>
  )
}

export default Breadcrumbs
