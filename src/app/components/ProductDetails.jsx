import Image from 'next/image'

const ProductDetails = ({ item, setIsModalOpen }) => {
  const { id, image, title, description } = item

  const tables = description.filter(
    (item) => item.includes('<thead>') || item.includes('<tbody>')
  )
  const texts = description.filter(
    (item) => !item.includes('<thead>') && !item.includes('<tbody>')
  )

  return (
    <div className="bg-[#f9f9f9] p-[15px] w-[836px] fixed top-[88px] z-[999] rounded-[4px] shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
      <div className=" w-[806px] h-[543px] p-5 overflow-y-scroll flex flex-col items-center justify-between">
        <h1 className="font-bold font-sans text-[16px] text-[#444] text-center">
          {title}
        </h1>

        <figure className="flex flex-col justify-between items-center w-full h-full">
          <Image
            src={image}
            width={200}
            height={200}
            alt={title}
            className="my-[10px]"
          />
          <figcaption className="text-left w-full">
            {texts.map((text, index) => {
              return (
                <p
                  className="font-sans font-light text-base leading-9 text-[#222] mb-[5px]"
                  key={id + index}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )
            })}
          </figcaption>
          <section>
            {tables.length > 0 && (
              <div className="flex justify-between items-start">
                {tables.map((table, index) => {
                  return (
                    <table
                      key={index}
                      dangerouslySetInnerHTML={{ __html: table }}
                      className="custom-table"
                    />
                  )
                })}
              </div>
            )}
          </section>
        </figure>
      </div>
      <a
        onClick={() => setIsModalOpen((p) => ({ ...p, isOpen: false }))}
        className="bg-[url('/modal-icons.png')] bg-top absolute -top-[18px] -right-[18px] w-[36px] h-[36px] cursor-pointer"
      />
    </div>
  )
}
export default ProductDetails
