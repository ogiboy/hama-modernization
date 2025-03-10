'use client'

import SubmitBtn from './SubmitBtn'

import { handleSubmit } from '../lib/actions'
import { useTranslations } from 'next-intl'
import { useActionState, useState, useEffect } from 'react'

const RequestForm = () => {
  const t = useTranslations('contact-us')
  const [state, formAction] = useActionState(handleSubmit, { message: null })
  const [btnText, setBtnText] = useState('send')

  useEffect(() => {
    if (state.message && state.message.includes('İsim:')) {
      setBtnText('sent')
      setTimeout(() => setBtnText('send'), 3000)
    }
  }, [state.message])

  return (
    <>
      <h5>{t('inquiries')}</h5>
      <form action={formAction} className="mt-5 text-[#222]">
        <input
          type="text"
          placeholder={t('name')}
          className="border-b-2 border-[#c2c2c2] w-full h-6 text-lg text-[#222] pb-[10px] mb-[30px] outline-none"
          autoComplete="name"
          name="name"
          required
          min={3}
        />
        <input
          type="email"
          placeholder={t('email')}
          className="border-b-2 border-[#c2c2c2] w-full h-6 text-lg text-[#222] pb-[10px] mb-[30px] outline-none"
          autoComplete="email"
          name="email"
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder={t('message')}
          className="border-b-2 border-[#c2c2c2] w-full h-[202px] text-lg text-[#222] pb-[10px] mb-[30px] resize-none outline-none"
          required
        ></textarea>
        {state.message && <p>{state.message}</p>}
        <SubmitBtn t={t} btnText={btnText} />
      </form>
    </>
  )
}
export default RequestForm
