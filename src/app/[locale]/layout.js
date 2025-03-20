import '../globals.css'

import { Roboto_Slab, Montserrat } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

import MainNavbar from '../components/MainNavbar'
import Footer from '../components/Footer'
import ToTop from '../components/ToTop'
import LangContainer from '../components/LangContainer'

export const metadata = {
  title: 'Hama Endüstriyel Mutfak',
  description: 'Hama Endüstriyel Mutfak',
}

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  fallback: ['sans-serif', 'system-ui'],
})
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  fallback: ['sans-serif', 'system-ui'],
})

export default async function RootLayout({ children, params }) {
  const { locale } = await params
  const messages = await getMessages()

  if (!routing.locales.includes(locale)) {
    console.log('not found')

    notFound()
  }

  // console.log('locale: ' + locale)

  return (
    <html
      lang={locale}
      className={`${roboto_slab.variable} ${montserrat.variable}`}
    >
      <body className="antialiased scroll-smooth">
        <NextIntlClientProvider messages={messages}>
          <MainNavbar />
          <LangContainer />
          <ToTop />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
