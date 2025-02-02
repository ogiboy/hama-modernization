import Breadcrumbs from './Breadcrumbs'

const PageHeader = ({ heading, paragraph }) => {
  return (
    <header className="border-2 border-red-500">
      <div className="pt-[120px] border-2 border-green-500">
        <h2 className="mt-20 w-3/5 border-2 border-blue-500">{heading}</h2>
        {paragraph && <p>{paragraph}</p>}

        <Breadcrumbs />
      </div>
    </header>
  )
}
export default PageHeader
