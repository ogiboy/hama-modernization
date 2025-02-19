import Breadcrumbs from './Breadcrumbs'
import Heading from './Heading'

const PageHeader = ({ heading, paragraph, level = 'h2' }) => {
  return (
    <section className="custom-container">
      <div className="pt-[120px]">
        <Heading as={level} className="mt-20 w-3/5">
          {heading}
        </Heading>
        {paragraph ? (
          <div className="flex justify-between items-center">
            <p className="font-robotoSlab font-light">{paragraph}</p>
            <Breadcrumbs />
          </div>
        ) : (
          <div className="flex justify-end">
            <Breadcrumbs />
          </div>
        )}
      </div>
    </section>
  )
}
export default PageHeader
