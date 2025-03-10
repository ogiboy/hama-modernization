import ContactDetails from '@/app/components/ContactDetails'
import GoogleMaps from '@/app/components/GoogleMaps'
import PageHeader from '@/app/components/PageHeader'

import { useTranslations } from 'next-intl'

const ContactUs = () => {
  const t = useTranslations('contact-us')

  return (
    <main className="custom-container">
      <PageHeader heading={t('PageHeader')} level="h3" paragraph="" />

      <GoogleMaps />

      <ContactDetails />
    </main>
  )
}
export default ContactUs
