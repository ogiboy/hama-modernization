import Image from 'next/image'
import NavLink from './NavLink'

const MainNavbar = () => {
  const navLinks = [
    {
      id: 1,
      href: '/',
      text: 'Anasayfa',
    },
    {
      id: 2,
      href: '/about',
      text: 'Kurumsal',
    },
    {
      id: 3,
      href: '/services',
      text: 'Hizmetlerimiz',
    },
    {
      id: 4,
      href: '/work',
      text: 'Ürünlerimiz',
    },
    {
      id: 5,
      href: '/contact-us',
      text: 'İletişim',
    },
  ]

  return (
    <header className="custom-container w-full h-[100px] flex justify-evenly items-center bg-mainColor font-montserrat text-white uppercase absolute top-4 z-50">
      <Image
        src="/logo.png"
        width={175}
        height={50}
        alt="brand logo"
        className=""
      />

      <nav className="h-full py-[25px] px-[15px]">
        <ul className="h-full w-[800px] flex justify-between items-center flex-wrap">
          {navLinks.map((navItem, index) => {
            return (
              <li key={navItem.id}>
                <span className="text-xs">0{index + 1}.</span>
                <NavLink
                  href={navItem.href}
                  text={navItem.text}
                  className={`hover:underline`}
                />
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
export default MainNavbar
