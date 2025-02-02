import './globals.css'

import Footer from './components/Footer'
import MainNavbar from './components/MainNavbar'

export const metadata = {
  title: 'Hama Endüstriyel Mutfak',
  description: 'Hama Endüstriyel Mutfak',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <MainNavbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}
