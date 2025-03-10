import AboutSlider from '@/app/components/AboutSlider'
import PageHeader from '@/app/components/PageHeader'
import Section from '@/app/components/Section'

import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

const About = () => {
  const t = useTranslations('PageHeader')
  const tAbout = useTranslations('About')
  const tList = useTranslations('About.listItems')
  const tSections = useTranslations('About.sections')
  const tProjects = useTranslations('About.projects')

  const aboutDetails = [
    {
      id: 1,
      text: tAbout('p1'),
    },

    {
      id: 2,
      text: tAbout('p2'),
    },

    {
      id: 3,
      text: tAbout('p3'),
    },
    {
      id: 4,
      text: tAbout('p4'),
    },
    {
      id: 5,
      text: tAbout('p5'),
    },
  ]

  const listItems = [
    tList('listItem1'),
    tList('listItem2'),
    tList('listItem3'),
    tList('listItem4'),
    tList('listItem5'),
    tList('listItem6'),
  ]

  const sections = [
    {
      id: 1,
      heading: tSections('vision.heading'),
      headingLevel: 'h2',
      paragraph: tSections('vision.text'),
    },
    {
      id: 2,
      heading: tSections('mission.heading'),
      headingLevel: 'h2',
      paragraph: tSections('mission.text'),
    },
    {
      id: 3,
      heading: tSections('values.heading'),
      headingLevel: 'h3',
      paragraph: tSections('values.text'),
    },
    {
      id: 4,
      heading: tSections('ethics.heading'),
      headingLevel: 'h3',
      paragraph: tSections('ethics.text'),
    },
    {
      id: 5,
      heading: tSections('employees.heading'),
      headingLevel: 'h3',
      paragraph: tSections('employees.text'),
    },
    {
      id: 6,
      heading: tSections('partners.heading'),
      headingLevel: 'h3',
      paragraph: tSections('partners.text'),
    },
  ]

  const projects = [
    {
      id: 1,
      listItems: [
        tProjects('ul1.0'),
        tProjects('ul1.1'),
        tProjects('ul1.2'),
        tProjects('ul1.3'),
      ],
    },
    {
      id: 2,
      listItems: [
        tProjects('ul2.0'),
        tProjects('ul2.1'),
        tProjects('ul2.2'),
        tProjects('ul2.3'),
      ],
    },
    {
      id: 3,
      listItems: [
        tProjects('ul3.0'),
        tProjects('ul3.1'),
        tProjects('ul3.2'),
        tProjects('ul3.3'),
      ],
    },
    {
      id: 4,
      listItems: [
        tProjects('ul4.0'),
        tProjects('ul4.1'),
        tProjects('ul4.2'),
        tProjects('ul4.3'),
      ],
    },
  ]

  return (
    <main>
      <PageHeader heading={t('heading')} paragraph={t('p')} />

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
          {tSections('heading')}
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
          <h4 className="text-mainColor tracking-[11px]">
            {tSections('heading2')}
          </h4>
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
            {tSections('heading3')}
          </h4>

          <section className="flex justify-around items-center text-nowrap flex-wrap font-bold font-robotoSlab mt-[90px]">
            {projects.map((project) => {
              return (
                <ul
                  key={project.id}
                  className="w-[45%] mb-7 list-disc block leading-[36px] mt-[10px] text-base"
                >
                  {project.listItems.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })}
                </ul>
              )
            })}
          </section>
        </article>
      </section>
    </main>
  )
}
export default About
