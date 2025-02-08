'use client'

import { useFormStatus } from 'react-dom'

const SubmitBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button
      className="text-[15px] rounded-[40px] py-5 px-[65px] inline-block border-2 border-black text-black transition-colors duration-500 ease-in-out hover:bg-black hover:text-white disabled:cursor-default"
      type="submit"
      disabled={pending}
    >
      {pending ? 'GÖNDERİLİYOR...' : 'GÖNDER'}
    </button>
  )
}
export default SubmitBtn
