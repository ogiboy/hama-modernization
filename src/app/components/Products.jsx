import Image from 'next/image'

const Products = ({ products, dbFriendly, setIsModalOpen }) => {
  const categoryMapping = {
    hazirlik: 'hazirlik/makine',
    'acik bufe': 'hazirlik/acikbufe',
    'depolama istifleme': 'hazirlik/depolamaistif',
  }

  let dataToShow = []

  const handleDetailsModal = (item) => {
    // console.log('clicked')

    if (item.description.length > 0) {
      setIsModalOpen((prevState) => ({ ...prevState, isOpen: true, item }))
    } else {
      return
    }
  }

  if (dbFriendly in categoryMapping) {
    // console.log('dbFriendly: ' + dbFriendly)
    dataToShow = products['hazirlik'].filter((item) =>
      item.image.includes(categoryMapping[dbFriendly])
    )
  } else if (!(dbFriendly in categoryMapping)) {
    switch (dbFriendly) {
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
      case 'medikal urunler':
        dataToShow = products['medikal']
        break

      default:
        break
    }
  }

  if (!dataToShow) {
    return <div>Bu kategoriye ait ürün bulunamadı.</div>
  }

  return (
    <div className="custom-container flex flex-wrap justify-between items-center gap-5">
      {dataToShow.map((item, index) => {
        // console.log(item)
        return (
          <figure
            key={item.id}
            className="w-[329px] border border-[#ccc] rounded-[5px] p-5 text-center"
          >
            <div
              onClick={() => handleDetailsModal(item)}
              className="cursor-pointer transition-all ease-in-out duration-500 bg-gradient-to-t from-white hover:to-slate-400"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={400}
              />
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
