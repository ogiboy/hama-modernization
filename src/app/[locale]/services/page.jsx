import PageHeader from '@/app/components/PageHeader'
import Services from '@/app/components/Services'

import { useTranslations } from 'next-intl'

const ServicesPage = () => {
  const t = useTranslations('PageHeader')

  return (
    <main>
      <PageHeader heading={t('heading')} paragraph={t('p')} />

      <Services />
    </main>
  )
}
export default ServicesPage
