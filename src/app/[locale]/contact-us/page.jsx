import Breadcrumbs from '../components/Breadcrumbs'
import ContactDetails from '../components/ContactDetails'
import GoogleMaps from '../components/GoogleMaps'

const ContactUs = () => {
  return (
    <main className="border-2 border-red-500">
      <div className="pt-[120px] border-2 border-green-500">
        <h3 className="mt-20 w-3/5 border-2 border-blue-500">
          Projeniz mi var? Bize ulaşın
        </h3>

        <Breadcrumbs />
      </div>

      <GoogleMaps />

      <ContactDetails />
    </main>
  )
}
export default ContactUs
