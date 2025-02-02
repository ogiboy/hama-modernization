import Image from 'next/image'
import Link from 'next/link'

const MainNavbar = () => {
  return (
    <header className="w-full h-[100px] flex justify-evenly items-center bg-[#044d82] text-white uppercase sticky top-4 z-50">
      <Image
        src="/logo.png"
        width={175}
        height={50}
        alt="brand logo"
        className="border-2 border-yellow-300"
      />

      <nav className="border-2 border-red-500 h-full pl-4 pr-4 pt-6">
        <ul className="border-2 border-green-500 h-full w-[800px] flex justify-between items-center">
          <li>
            <span>01.</span>
            <Link href="/">Anasayfa</Link>
          </li>
          <li>
            <span>02.</span>
            <Link href="/about">Kurumsal</Link>
          </li>
          <li>
            <span>03.</span>
            <Link href="/services">Hizmetlerimiz</Link>
          </li>
          <li>
            <span>04.</span>
            <Link href="/work">Ürünlerimiz</Link>
          </li>
          <li>
            <span>05.</span>
            <Link href="/contact-us">İletişim</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MainNavbar
