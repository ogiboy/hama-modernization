import Heading from '@/app/components/Heading'

export default function Section({ title, content, headingLevel }) {
  return (
    <section>
      <Heading
        as={headingLevel}
        className="bg-blackWave bg-no-repeat bg-bottom pb-[18px]"
      >
        {title}
      </Heading>
      <p>{content}</p>
    </section>
  )
}
