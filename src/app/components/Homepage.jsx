import HomepageSlider from './HomepageSlider'
import Services from './Services'

import Image from 'next/image'

import { LuPencilRuler } from 'react-icons/lu'
import { TfiRulerAlt2 } from 'react-icons/tfi'
import { RiScissorsLine } from 'react-icons/ri'

const Homepage = () => {
  const projects = [
    {
      id: 1,
      src: '/logo.png',
      alt: 'logo',
    },
    {
      id: 2,
      src: '/logo.png',
      alt: 'logo',
    },
    {
      id: 3,
      src: '/logo.png',
      alt: 'logo',
    },
    {
      id: 4,
      src: '/logo.png',
      alt: 'logo',
    },
  ]

  return (
    <main>
      <HomepageSlider />

      <div className="z-50 min-h-96 bg-white border-2 border-red-500"></div>

      <article>
        <div>
          <LuPencilRuler />
          <TfiRulerAlt2 />
          <RiScissorsLine />
        </div>

        <p>
          2018 Yılında kurulan HAMA, Endüstriyel Mutfak, Çamaşırhane, Açık Büfe
          ve Servis Ekipmanları konusunda, Hotel, Restaurant, Cafeteria, Fast
          Food Zincileri, Okullar, Hastaneler, Alışveriş Merkezleri, Bankalar,
          Ofis Binaları gibi işletmeler için uzman ve dinamik proje yöneticileri
          ve teknik kadrosu ile Projelendirme, Satış, Montaj ve Satış Sonrası
          Servis konularında hizmet vermektedir.
        </p>
      </article>

      <article>
        <h4>HAMA</h4>
        <h1 className="bg-blackWave bg-no-repeat bg-bottom">PROJELER</h1>

        <div className="border-2 border-orange-600 min-h-60 flex flex-wrap justify-around items-center gap-10">
          {projects.map((item) => {
            return (
              <figure className="border-2 border-yellow-600" key={item.id}>
                <Image
                  className="border-2 border-green-600"
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                />
              </figure>
            )
          })}
        </div>
      </article>

      <article>
        <Services />
      </article>
    </main>
  )
}
export default Homepage
