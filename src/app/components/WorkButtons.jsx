const WorkButtons = ({ handleBtnClick, selectedCategory }) => {
  const categories = [
    'Pişiriciler',
    'Fırın',
    'Set',
    'Bulaşık',
    'Soğutucu',
    'Hazırlık',
    'Davlumbaz',
    'Tezgah',
    'Araba',
    'Depolama İstifleme',
    'Servis',
    'Açık Büfe',
    'İthal',
    'Gemi',
    'Çamaşır',
    'Medikal Ürünler',
  ]

  return (
    <div className="custom-container flex justify-evenly items-center flex-wrap pb-[30px]">
      {categories.map((item, index) => {
        return (
          <button
            className={`border border-[#ccc] font-robotoSlab text-[#0d0d0d] hover:bg-mainColor hover:border-mainColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer text-xl mx-0 mb-0 mt-[10px] py-[10px] px-[24px] ${
              selectedCategory === item
                ? 'bg-mainColor text-white cursor-default'
                : ''
            }`}
            onClick={(e) => handleBtnClick(e.target.innerHTML)}
            key={index}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}
export default WorkButtons
