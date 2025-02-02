const RequestForm = () => {
  async function handleSubmit() {
    'use server'
    console.log('submitted')
  }

  return (
    <>
      <h5>Talepleriniz</h5>
      <form action={handleSubmit} className="mt-5 text-[#222]">
        <input
          type="text"
          placeholder="Adınız Soyadınız"
          className="border-b-2 border-[#c2c2c2] w-full h-6 text-lg text-[#222] pb-[10px] mb-[30px]"
          autoComplete="name"
        />
        <input
          type="email"
          placeholder="E-Mail Adresiniz"
          className="border-b-2 border-[#c2c2c2] w-full h-6 text-lg text-[#222] pb-[10px] mb-[30px]"
          autoComplete="email"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Mesajınız"
          className="border-b-2 border-[#c2c2c2] w-full h-[202px] text-lg text-[#222] pb-[10px] mb-[30px] resize-none"
        ></textarea>
        <button
          className="text-[15px] rounded-[40px] py-5 px-[65px] inline-block border-2 border-black text-black transition-colors duration-500 ease-in-out hover:bg-black hover:text-white"
          type="submit"
        >
          GÖNDER
        </button>
      </form>
    </>
  )
}
export default RequestForm
