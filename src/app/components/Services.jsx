'use client'

import ServiceFigures from './ServiceFigures'

import danismanlik from '../../../public/services-images/mutfakdanismanlik.png'
import proje from '../../../public/services-images/proje.png'
import satis from '../../../public/services-images/satis.png'
import satisDestek from '../../../public/services-images/destek.png'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const Services = () => {
  const [selectedService, setSelectedService] = useState(0)

  const t = useTranslations('Services')

  const handleButtons = (value) => {
    console.log(value)

    switch (value) {
      case 1:
        setSelectedService(0)
        break

      case 2:
        setSelectedService(1)
        break

      case 3:
        setSelectedService(2)
        break

      case 4:
        setSelectedService(3)
        break

      default:
        setSelectedService(0)
        break
    }
  }

  const serviceItems = [
    {
      id: 1,
      btnText: t('tabs.tab1.title'),
      image: danismanlik,
      imageAlt: t('tabs.tab1.title'),
      text: t('tabs.tab1.content'),
    },
    {
      id: 2,
      btnText: t('tabs.tab2.title'),
      image: proje,
      imageAlt: t('tabs.tab2.title'),
      text: t('tabs.tab2.content'),
    },
    {
      id: 3,
      btnText: t('tabs.tab3.title'),
      image: satis,
      imageAlt: t('tabs.tab3.title'),
      text: t('tabs.tab3.content'),
    },
    {
      id: 4,
      btnText: t('tabs.tab4.title'),
      image: satisDestek,
      imageAlt: t('tabs.tab4.title'),
      text: t('tabs.tab4.content'),
    },
  ]

  return (
    <section className="py-[110px]">
      <h4 className="text-center font-montserrat text-mainColor text-2xl tracking-[11px]">
        {t('headings.h4')}
      </h4>
      <h1 className="bg-blackWave bg-no-repeat bg-bottom text-center font-montserrat">
        {t('headings.h1')}
      </h1>
      <article className="custom-container mt-[65px] min-h-[550px] text-[#333] transition-all ease-in-out duration-1000">
        <div className="border-[1px] border-[#dbdbdb] border-collapse flex justify-between items-center flex-nowrap mb-[70px]">
          {serviceItems.map((item, index) => {
            return (
              <button
                key={item.id}
                type="button"
                onClick={(e) => handleButtons(item.id)}
                className={`border-[1px] border-[#dbdbdb] border-collapse py-[21px] pl-[20px] font-semibold text-lg grow hover:bg-mainColor hover:text-white transition-colors duration-500 ease-in-out ${
                  selectedService === index
                    ? 'bg-black text-white cursor-default'
                    : ''
                }`}
              >
                {item.btnText}
              </button>
            )
          })}
        </div>
        <div>
          <ServiceFigures
            selectedService={selectedService}
            serviceItems={serviceItems}
            key={selectedService}
          />
        </div>
      </article>
    </section>
  )
}
export default Services
