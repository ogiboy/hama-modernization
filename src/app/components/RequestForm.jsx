'use client'

import SubmitBtn from './SubmitBtn'

import { handleSubmit } from '../lib/actions'
import { useActionState } from 'react'

const RequestForm = () => {
  const [state, formAction] = useActionState(handleSubmit, { message: null })

  return (
    <>
      <h5>Talepleriniz</h5>
      <form action={formAction} className="mt-5 text-[#222]">
        <input
          type="text"
          placeholder="Adınız Soyadınız"
          className="border-b-2 border-[#c2c2c2] w-full h-6 text-lg text-[#222] pb-[10px] mb-[30px] outline-none"
          autoComplete="name"
          name="name"
          required
          min={3}
        />
        <input
          type="email"
          placeholder="E-Mail Adresiniz"
          className="border-b-2 border-[#c2c2c2] w-full h-6 text-lg text-[#222] pb-[10px] mb-[30px] outline-none"
          autoComplete="email"
          name="email"
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder="Mesajınız"
          className="border-b-2 border-[#c2c2c2] w-full h-[202px] text-lg text-[#222] pb-[10px] mb-[30px] resize-none outline-none"
          required
        ></textarea>
        {state.message && <p>{state.message}</p>}
        <SubmitBtn />
      </form>
    </>
  )
}
export default RequestForm
