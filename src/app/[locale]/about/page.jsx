import AboutSlider from '@/app/components/AboutSlider'
import PageHeader from '@/app/components/PageHeader'
import Section from '@/app/components/Section'

import { aboutDetails, listItems, sections } from '@/app/lib/data'
import { Fragment } from 'react'

const About = () => {
  return (
    <main>
      <PageHeader heading="HAMA" paragraph="ENDÜSTRİYEL MUTFAK HİZMETLERİ" />

      <AboutSlider />

      <section className="custom-container mt-[60px] px-0">
        <article className="text-[#222] font-robotoSlab w-full flex justify-between items-start flex-wrap">
          <div className="w-2/3 ">
            {aboutDetails.map((paragraph) => {
              return (
                <p
                  className="mb-5 font-light text-xl leading-9 text-[20px] first:first-letter:text-[54px]"
                  key={paragraph.id}
                >
                  {paragraph.text}
                </p>
              )
            })}
          </div>
          <div className="w-1/3 pl-[15px]">
            <ol className="py-5 pl-5 bg-[#f7f8f9] list-none counter-list font-montserrat">
              {listItems.map((item, index) => {
                return (
                  <li key={index} className="leading-[48px] text-xl">
                    {item}
                  </li>
                )
              })}
            </ol>
          </div>
        </article>
      </section>

      <article className="custom-container py-[110px] text-center">
        <h4 className="text-mainColor tracking-[11px]">
          VİZYONUMUZ / MİSYONUMUZ
        </h4>
        {sections.slice(0, 2).map((section) => {
          return (
            <Fragment key={section.id}>
              <br />
              <br />
              <br />
              <Section
                title={section.heading}
                content={section.paragraph}
                headingLevel={section.headingLevel}
              />
            </Fragment>
          )
        })}
      </article>
      <article className="py-[110px] text-center bg-[#f7f8f9]">
        <div className="custom-container">
          <h4 className="text-mainColor tracking-[11px]">DEĞERLERİMİZ</h4>
          {sections.slice(2).map((section) => {
            return (
              <Fragment key={section.id}>
                <br />
                <Section
                  key={section.id}
                  title={section.heading}
                  content={section.paragraph}
                  headingLevel={section.headingLevel}
                />
              </Fragment>
            )
          })}
        </div>
      </article>

      <section className="z-50 bg-aboutUs bg-fixed bg-center bg-no-repeat py-[110px] text-white w-full mx-auto">
        <article className="custom-container">
          <h4 className="text-center tracking-[11px] font-light">
            BULUNDUĞUMUZ PROJELER
          </h4>

          <section className="flex justify-around items-center text-nowrap flex-wrap font-bold font-robotoSlab mt-[90px]">
            <ul className="w-[45%] mb-7 list-disc block leading-[36px] mt-[10px] text-base">
              <li>Fenerbahçe Topuk Yaylası Resort & Sport - Bolu</li>
              <li>Wyndham Grand İstanbul Europe - İstanbul</li>
              <li>Le Mirage Hotel - Katar Doha</li>
              <li>Bagram Hava Üssü - Afganistan</li>
            </ul>

            <ul className="w-[45%] mb-7 list-disc block leading-[36px] mt-[10px] text-base">
              <li>Türmenbaşı Uluslararası Havaalanı - Türkmenistan</li>
              <li>The Grand Tarabya - İstanbul</li>
              <li>Park Hyatt İstanbul Maçka Palas - İstanbul</li>
              <li>D Hotel Maris - Marmaris</li>
            </ul>

            <ul className="w-[45%] mb-7 list-disc block leading-[36px] mt-[10px] text-base">
              <li>Radisson Blu Iveria Hotel - Gürcistan</li>
              <li>Radisson Blu Hotel & Spa - İstanbul</li>
              <li>
                Hilton İstanbul Bomonti Hotel & Conferance Center - İstanbul
              </li>
              <li>Hilton İstanbul Kozyatağı - İstanbul</li>
            </ul>

            <ul className="w-[45%] mb-7 list-disc block leading-[36px] mt-[10px] text-base">
              <li>Payne Amerikan Askeri Kampı - Afganistan</li>
              <li>Geranimo Amerikan Askeri Kampı - Afganistan</li>
              <li>Bağdat Amerikan Askeri Kampı - Irak</li>
              <li>Reina, Suada Club İstanbul - Ortaköy</li>
            </ul>
          </section>
        </article>
      </section>
    </main>
  )
}
export default About
