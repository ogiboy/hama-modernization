import Image from 'next/image'
import { useState } from 'react'

const Products = ({ products, selectedCategory, setIsModalOpen }) => {
  const categoryMapping = {
    hazirlik: 'hazirlik/makine',
    acik_bufe: 'hazirlik/acikbufe',
    depolama_istifleme: 'hazirlik/depolamaistif',
  }

  let dataToShow = []

  const handleDetailsModal = (item) => {
    if (item.description.length > 0) {
      setIsModalOpen((prevState) => ({ ...prevState, isOpen: true, item }))
    } else {
      return
    }
  }

  if (selectedCategory in categoryMapping) {
    dataToShow = products['hazirlik'].filter((item) =>
      item.image.includes(categoryMapping[selectedCategory])
    )
  } else {
    switch (selectedCategory) {
      case 'pisiriciler':
        dataToShow = products['modul']
        break

      case 'firin':
        dataToShow = products['firinlar']
        break

      case 'set':
        dataToShow = products['set']
        break

      case 'bulasik':
        dataToShow = products['bulasik']
        break

      case 'sogutucu':
        dataToShow = products['sogutucu']
        break

      case 'davlumbaz':
        dataToShow = products['davlumbaz']
        break
      case 'tezgah':
        dataToShow = products['tezgah']
        break
      case 'araba':
        dataToShow = [
          ...(products['cars'] || []),
          ...(products['arabalar'] || []),
        ]
        break

      case 'servis':
        dataToShow = products['servis']
        break

      case 'ithal':
        dataToShow = products['ithal']
        break
      case 'gemi':
        dataToShow = products['gemi']
        break
      case 'camasir':
        dataToShow = products['camasirhane']
        break
      case 'medikal':
        dataToShow = products['medikal']
        break

      default:
        break
    }
  }

  if (!dataToShow || dataToShow.length === 0) {
    return <div>Bu kategoriye ait ürün bulunamadı.</div>
  }

  return (
    <div className="flex flex-wrap justify-between items-center gap-14">
      {dataToShow.map((item) => {
        const [isHovered, setIsHovered] = useState(false)

        return (
          <figure
            key={item.id}
            className="w-[30%] border border-[#ccc] rounded-[5px] p-5 text-center"
          >
            <div
              onClick={() => handleDetailsModal(item)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="cursor-pointer relative"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={400}
                className={`transition-all duration-[10s] ease-in-out ${
                  isHovered ? 'scale-125' : 'scale-100'
                }`}
              />
              <div
                className={`pointer-events-none absolute transition-all duration-500 rounded-[5px] bg-white/70 ${
                  isHovered
                    ? 'bottom-0 right-0 w-full h-full origin-bottom-righ opacity-70'
                    : 'bottom-0 right-0 w-0 h-0 origin-bottom-right'
                }`}
              ></div>
            </div>
            <figcaption className="text-lg font-bold font-montserrat uppercase mt-[15px]">
              <p className="truncate">{item.title}</p>
            </figcaption>
          </figure>
        )
      })}
    </div>
  )
}
export default Products
