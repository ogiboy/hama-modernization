import ContactDetails from '@/app/components/ContactDetails'
import GoogleMaps from '@/app/components/GoogleMaps'
import PageHeader from '@/app/components/PageHeader'

const ContactUs = () => {
  return (
    <main className="custom-container">
      <PageHeader
        heading="Projeniz mi var? Bize ulaşın"
        level="h3"
        paragraph=""
      />

      <GoogleMaps />

      <ContactDetails />
    </main>
  )
}
export default ContactUs
