'use client'

const ToTop = () => {
  const smoothScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <nav
      onClick={() => smoothScroll()}
      className="bg-mainColor text-white fixed bottom-[90px] right-[27px] z-[999] cursor-pointer rounded-[3px]"
    >
      <p className="py-[5px] pr-[10px] pl-[30px] text-center relative font-robotoSlab text-xl">
        <span className="animate-bounce absolute left-3 border border-red-500">
          ▲
        </span>
        Yukarı Çık
      </p>
    </nav>
  )
}
export default ToTop
