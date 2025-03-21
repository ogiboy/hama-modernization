import HomepageSlider from './HomepageSlider'
import Services from './Services'

import Image from 'next/image'

import design from '../../../public/home-images/design.svg'
import pencil from '../../../public/home-images/pencil-cup.svg'
import ruler from '../../../public/home-images/ruler.svg'

import cafebar from '../../../public/home-images/cafebar.jpg'
import hotelmutfak from '../../../public/home-images/hotelmutfak1.jpg'
import showmuftak from '../../../public/home-images/showmutfagi-min.jpg'
import camasirhane from '../../../public/home-images/camasirhane.jpg'
import { useTranslations } from 'next-intl'

const Homepage = () => {
  const t = useTranslations('HomePage')

  const projects = [
    {
      id: 1,
      src: cafebar,
      alt: 'Kafe bar',
    },
    {
      id: 2,
      src: hotelmutfak,
      alt: 'Hotel mutfağı',
    },
    {
      id: 3,
      src: showmuftak,
      alt: 'Show mutfağı',
    },
    {
      id: 4,
      src: camasirhane,
      alt: 'Çamaşırhane',
    },
  ]

  return (
    <main className="font-robotoSlab ">
      <HomepageSlider />

      <div className="bg-white w-full h-[50px] pb-8 bg-dividerDark bg-repeat-x"></div>
      <article className="custom-container mt-[110px]">
        <div className="w-1/2 mx-auto text-[142px] text-mainColor flex justify-between items-baseline">
          <Image src={design} alt="design" />
          <Image src={pencil} alt="pencil" />
          <Image src={ruler} alt="ruler" />
        </div>

        <p className="w-4/5 mx-auto text-center leading-10 text-[28px]">
          {t('about')}
        </p>
      </article>

      <article className="custom-container text-center py-[110px]">
        <h4 className="text-mainColor pb-[18px] tracking-[11px] text-[24px] font-montserrat">
          HAMA
        </h4>
        <h1 className="bg-blackWave bg-no-repeat bg-bottom -mt-[14px] text-[85px] font-montserrat font-bold">
          {t('title')}
        </h1>

        <div className="mt-12 -mx-[15px] h-fit flex flex-wrap justify-between items-center">
          {projects.map((item) => {
            return (
              <figure
                className="min-w-fit mb-12 overflow-hidden max-w-full max-h-full"
                key={item.id}
              >
                <Image
                  className="rounded-[5px] cursor-pointer object-contain"
                  src={item.src}
                  alt={item.alt}
                  width={570}
                  height={380}
                  // fill
                  placeholder="blur"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
