'use client'

import ServiceFigures from './ServiceFigures'

import danismanlik from '../../../public/services-images/mutfakdanismanlik.png'
import proje from '../../../public/services-images/proje.png'
import satis from '../../../public/services-images/satis.png'
import satisDestek from '../../../public/services-images/destek.png'

import { useState } from 'react'

const Services = () => {
  const [selectedService, setSelectedService] = useState(0)

  const handleButtons = (value) => {
    console.log(value)

    switch (value) {
      case 'DANIŞMANLIK':
        setSelectedService(0)
        break

      case 'PROJE':
        setSelectedService(1)
        break

      case 'SATIŞ':
        setSelectedService(2)
        break

      case 'SATIŞ DESTEK':
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
      btnText: 'DANIŞMANLIK',
      image: danismanlik,
      imageAlt: 'Danışmanlık',
      text: 'Hama olarak, otel, restaurant, hastane, üniversiteler, iş merkezleri vb. yatırımlarınızın mutfak,çamaşırhane,açık büfe ve servis ekipmanları konusunda yerleşim planlaması, tesisat alt yapı planlaması ve bütçelendirmesine yönelik danışmanlık hizmeti vermekteyiz.',
    },
    {
      id: 2,
      btnText: 'PROJE',
      image: proje,
      imageAlt: 'Proje',
      text: 'Proje grubumuz tarafından Mutfak, Çamaşırhane ve Açık Büfelerde işletim şeması doğru , sağlık kurallarına uygun, yatırımcı ve işletmecilerin yüksek teknoloji ve kaliteli çözüm beklentisine cevap verebilecek her türlü ortama uygun verimlilik arttırıcı ve çok yönlü tasarımlar hazırlanmaktadır.',
    },
    {
      id: 3,
      btnText: 'SATIŞ',
      image: satis,
      imageAlt: 'Satış',
      text: 'Hama, Türkiye ve Dünyada konusunda lider, Mutfak, Çamaşırhane, Açık Büfe ve Servis Ekipmanlarına ait cihazları üreten firmalar ile çalışmaktadır. Biz biliyoruz ki İyi bir işletme doğru planlama ve doğru ürünlerin kullanılması sonucunda ortya çıkar ve uzun yıllar kalitesinden ödün vermeden varlığını sürdürebilir ve inanıyoruz ki , satışını yaptığımız ürünler uzun yıllar kullanıcıya hizmet etmelidir.',
    },
    {
      id: 4,
      btnText: 'SATIŞ DESTEK',
      image: satisDestek,
      imageAlt: 'Satış Destek',
      text: 'Hama, temin ettiği ithal ve yerli ekipmanlar için satış sonrası teknik servis hizmetlerini, kendi bünyesindeki teknik servis elemanları veya yetkili servis şirketleri vasıtası ile vermektedir.',
    },
  ]

  return (
    <section className="py-[110px]">
      <h4 className="text-center font-montserrat text-mainColor text-2xl tracking-[11px]">
        NELER YAPIYORUZ ?
      </h4>
      <h1 className="bg-blackWave bg-no-repeat bg-bottom text-center font-montserrat">
        HİZMETLERİMİZ
      </h1>
      <article className="custom-container mt-[65px] min-h-[550px] text-[#333] transition-opacity ease-in-out duration-1000">
        <div className="border-[1px] border-[#dbdbdb] flex justify-between items-center flex-nowrap mb-[70px]">
          {serviceItems.map((item, index) => {
            return (
              <button
                key={item.id}
                type="button"
                onClick={(e) => handleButtons(e.target.innerHTML)}
                className={`border-[1px] border-[#dbdbdb] py-[21px] pl-[20px] font-semibold text-lg grow hover:bg-mainColor hover:text-white transition-colors duration-500 ease-in-out ${
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
