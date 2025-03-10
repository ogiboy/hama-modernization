import { Link, usePathname } from '@/i18n/routing'
import { useLocale } from 'next-intl'

const LangSwitcher = () => {
  const pathname = usePathname()
  const locale = useLocale()

  console.log(pathname, locale)

  const changedLocale = locale === 'en' ? 'tr' : 'en'
  const newPathname = pathname === '/' ? '' : pathname

  return (
    <Link href={pathname} locale={changedLocale}>
      {changedLocale.toUpperCase()}
    </Link>
  )
}
export default LangSwitcher
