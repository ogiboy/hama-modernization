'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumbs = () => {
  const pathname = usePathname()
  const userFriendly = pathname.split('/').filter((path) => path)

  return (
    <nav className="border-2 border-purple-900">
      <Link href="/"> Anasayfa </Link>

      {userFriendly &&
        userFriendly.map((path) => {
          console.log(path)

          return (
            <Link key={path} href={path}>
              <span>/</span> {path}
            </Link>
          )
        })}
    </nav>
  )
}

export default Breadcrumbs
