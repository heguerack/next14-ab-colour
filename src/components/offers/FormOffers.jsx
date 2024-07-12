'use client'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Script from 'next/script'

export default function FormOffers() {
  const [captcha, setCaptcha] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const onChange = (value) => {
    console.log(('captcha', value))
    setCaptcha(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handledSubmit just clicked')
    const firstName = e.target[0].value
    const lastName = e.target[1].value
    const number = e.target[2].value
    const email = e.target[3].value
    const address = e.target[4].value
    const message = e.target[5].value
    const comingFrom = 'Offers - 2 for 1'
    setSending(true)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          number,
          address,
          message,
          comingFrom,
        }),
      })
      if (res.ok === true) {
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
        e.target[4].value = ''
        e.target[5].value = 'Thank you! Your message has been sent!!'
        setSending(false)
        setSent(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form
        className='p-4 flex flex-col items-center gap-4'
        onSubmit={handleSubmit}>
        <input
          className='w-[100%] p-2 rounded'
          type='text'
          placeholder='First Name'
          required
        />

        <input
          className='w-[100%] p-2 rounded'
          type='text'
          placeholder='Lame Name'
          required
        />
        <input
          className='w-[100%] p-2 rounded'
          type='text'
          placeholder='Phone Number'
          required
        />
        <input
          className='w-[100%] p-2 rounded'
          type='email'
          placeholder='Email'
          required
        />
        <input
          className='w-[100%] p-2 rounded'
          type='text'
          placeholder='Adress - Optional *'
        />
        <textarea
          className='w-[100%] h-[12rem] p-2 rounded'
          name=''
          id=''
          placeholder='How big are the bedrooms rooms? Whats the height?'
          required></textarea>
        <>
          <Script src='https://www.google.com/recaptcha/api.js' />
          <ReCAPTCHA
            sitekey='6LfSO8keAAAAAGKPTDfanck-1THj7-vhnH1Kz3wh'
            onChange={onChange}
          />
        </>
        {sending ? (
          <button className='bg-slate-100 py-1 px-4 rounded ' disabled>
            Submitting...
          </button>
        ) : (
          <button
            className='bg-slate-300 hover:bg-slate-200  py-1 px-4 rounded cursor-pointer'
            disabled={!captcha}>
            {!captcha ? 'Confirm you are not a robot' : 'Submit'}
          </button>
        )}
      </form>
    </>
  )
}
