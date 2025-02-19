import Image from 'next/image'

const Products = ({ products, selectedCategory }) => {
  const normalizeString = (str) => {
    const turkishMap = {
      ı: 'i',
      İ: 'i',
      ç: 'c',
      Ç: 'c',
      ğ: 'g',
      Ğ: 'g',
      ş: 's',
      Ş: 's',
      ö: 'o',
      Ö: 'o',
      ü: 'u',
      Ü: 'u',
    }

    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[ıİçÇğĞşŞöÖüÜ]/g, (char) => turkishMap[char])
  }

  const dbFriendly = normalizeString(selectedCategory)

  let dataToShow = []
  //   console.log(dbFriendly)
  //   const data = products[dbFriendly]

  //   for (const [key, value] of Object.entries(products)) {
  //     console.log(JSON.stringify(value))
  //   }

  switch (dbFriendly) {
    case 'pisiriciler':
      dataToShow = products['modul']
      break

    case 'firin':
      dataToShow = products['firinlar']
      break

    case 'set':
      dataToShow = products['setustu']
      break
    case 'bulasik':
      dataToShow = products['bulasikmakinaleri']
      break
    case 'sogutucu':
      dataToShow = products['sogutucu']
      break
    case 'hazirlik':
      dataToShow = products['hazirlikurunleri/hazirlikmak']
      break
    case 'davlumbaz':
      dataToShow = products['davlumbazlar']
      break
    case 'tezgah':
      dataToShow = products['tezgahlar']
      break
    case 'araba':
      dataToShow = products['cars']
      break
    case 'depolama istifleme':
      dataToShow = products['hazirlikurunleri/depolamaurunleri']
      break
    case 'servis':
      dataToShow = products['servisarabalari']
      break
    case 'acik bufe':
      dataToShow = products['hazirlikurunleri/acikbufe']
      break
    case 'ithal':
      dataToShow = products['ithalurunler']
      break
    case 'gemi':
      dataToShow = products['gemimut']
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

  if (!dataToShow) {
    return <div>Bu kategoriye ait ürün bulunamadı.</div>
  }

  return (
    <div className="border border-blue-500 custom-container flex flex-wrap justify-between items-center gap-5">
      {dataToShow.map((item, index) => {
        console.log(item)
        return (
          <figure
            key={item.id}
            className="w-[329px] border border-[#ccc] rounded-[5px] p-5 text-center"
          >
            <div className="transition-all ease-in-out duration-500 bg-gradient-to-t from-white hover:to-slate-400">
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
