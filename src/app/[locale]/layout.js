import '../globals.css'

import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

import MainNavbar from '../components/MainNavbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Hama Endüstriyel Mutfak',
  description: 'Hama Endüstriyel Mutfak',
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params
  const messages = await getMessages()

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  console.log('locale: ' + locale)

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <MainNavbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
