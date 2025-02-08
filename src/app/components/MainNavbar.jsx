import Image from 'next/image'

import { Link } from '@/i18n/routing'

const MainNavbar = () => {
  return (
    <header className="w-full h-[100px] flex justify-evenly items-center bg-mainColor font-montserrat text-white uppercase absolute top-4 z-50">
      <Image
        src="/logo.png"
        width={175}
        height={50}
        alt="brand logo"
        className=""
      />

      <nav className="h-full pl-4 pr-4 pt-6">
        <ul className="h-full w-[800px] flex justify-between items-center flex-wrap">
          <li>
            <span className="text-xs">01.</span>
            <Link href="/">Anasayfa</Link>
          </li>
          <li>
            <span className="text-xs">02.</span>
            <Link href="/about">Kurumsal</Link>
          </li>
          <li>
            <span className="text-xs">03.</span>
            <Link href="/services">Hizmetlerimiz</Link>
          </li>
          <li>
            <span className="text-xs">04.</span>
            <Link href="/work">Ürünlerimiz</Link>
          </li>
          <li>
            <span className="text-xs">05.</span>
            <Link href="/contact-us">İletişim</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MainNavbar
