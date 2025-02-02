import RequestForm from './RequestForm'

const ContactDetails = () => {
  return (
    <section className="flex justify-around">
      <div className="w-[300px] ml-[60px] border-2 border-red-500">
        <h5>Ofis</h5>
        <p className="text-xl leading-[31px]">
          <strong>T:</strong>0 532 362 89 35
        </p>
        <p className="text-xl leading-[31px]">
          <strong>T:</strong>0 542 344 09 70
        </p>
        <p className="text-xl leading-[31px]">
          <strong>E:</strong>
          info@hamamutfak.com
        </p>
        <p className="text-xl leading-[31px] mt-[30px]">
          Cevizli Mahallesi Zuhal Caddesi A4 Blok No:46 D/29 Maltepe
        </p>
      </div>
      <div className="border-2 border-blue-500 w-[470px]">
        <RequestForm />
      </div>
    </section>
  )
}
export default ContactDetails
