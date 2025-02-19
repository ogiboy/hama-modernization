'use client'

import { Link, usePathname } from '@/i18n/routing'

const NavLink = ({ href, text, className }) => {
  const pathname = usePathname()

  return (
    <Link
      className={`${className} ${
        pathname === href ? 'font-bold' : 'font-normal'
      }`}
      href={href}
    >
      {text}
    </Link>
  )
}
export default NavLink
