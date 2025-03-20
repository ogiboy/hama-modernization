import Image from 'next/image'
import turkishFlag from '../../../public/tr-flag.svg'
import usaFlag from '../../../public/us-flag.svg'

import { Link, usePathname } from '@/i18n/routing'
import { useLocale } from 'next-intl'

const LangSwitcher = () => {
  const pathname = usePathname()
  const locale = useLocale()
  const changedLocale = locale === 'en' ? 'tr' : 'en'

  return (
    <Link href={pathname} locale={changedLocale}>
      <Image
        src={changedLocale === 'en' ? usaFlag : turkishFlag}
        alt={changedLocale === 'en' ? 'usa flag' : 'turkish flag'}
        width={40}
      />
    </Link>
  )
}
export default LangSwitcher
