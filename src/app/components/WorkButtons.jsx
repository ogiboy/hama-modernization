const WorkButtons = ({ handleBtnClick, selectedCategory, t }) => {
  const categories = [
    { key: 'pisiriciler', label: 'Pişiriciler' },
    { key: 'firin', label: 'Fırın' },
    { key: 'set', label: 'Set' },
    { key: 'bulasik', label: 'Bulaşık' },
    { key: 'sogutucu', label: 'Soğutucu' },
    { key: 'hazirlik', label: 'Hazırlık' },
    { key: 'davlumbaz', label: 'Davlumbaz' },
    { key: 'tezgah', label: 'Tezgah' },
    { key: 'araba', label: 'Araba' },
    { key: 'depolama_istifleme', label: 'Depolama İstifleme' },
    { key: 'servis', label: 'Servis' },
    { key: 'acik_bufe', label: 'Açık Büfe' },
    { key: 'ithal', label: 'İthal' },
    { key: 'gemi', label: 'Gemi' },
    { key: 'camasir', label: 'Çamaşır' },
    { key: 'medikal', label: 'Medikal Ürünler' },
  ]

  return (
    <div className="flex justify-evenly items-center flex-wrap pb-[30px]">
      {categories.map((item, index) => {
        return (
          <button
            className={`border border-[#ccc] font-robotoSlab text-[#0d0d0d] hover:bg-mainColor hover:border-mainColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer text-xl mx-0 mb-0 mt-[10px] py-[10px] px-[24px] ${
              selectedCategory === item.key
                ? 'bg-mainColor text-white cursor-default'
                : ''
            }`}
            onClick={() => handleBtnClick(item.key)}
            key={item.key}
          >
            {t(`categories.${item.key}`)}
          </button>
        )
      })}
    </div>
  )
}
export default WorkButtons
