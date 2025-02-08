import Image from 'next/image'

const ServiceFigures = ({ selectedService, serviceItems }) => {
  const index = selectedService

  return (
    <figure className="flex justify-between items-start transition-all ease-in-out duration-1000 animate-fadeInScale">
      <Image
        src={serviceItems[index].image}
        alt={serviceItems[index].imageAlt}
        width={585}
        height={390}
      />
      <figcaption>
        <p className="text-xl text-[#222] px-[15px] leading-[36px] first-letter:text-[54px] font-light font-robotoSlab">
          {serviceItems[index].text}
        </p>
      </figcaption>
    </figure>
  )
}
export default ServiceFigures
