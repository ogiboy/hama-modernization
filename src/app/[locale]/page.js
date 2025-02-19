// import { useTranslations } from 'next-intl'
import Homepage from '../components/Homepage'
// import ToTop from '../components/ToTop'
// import { Link } from '@/i18n/routing'
// import Link from 'next/link'

const Home = () => {
  // const t = useTranslations('HomePage')
  return (
    <main className="font-robotoSlab">
      {/* <div className="w-full h-screen bg-slate-400">
        <h1>{t('title')}</h1>
        <Link href="/about">{t('about')}</Link>
      </div> */}
      {/* <ToTop /> */}
      <Homepage />
    </main>
  )
}
export default Home
