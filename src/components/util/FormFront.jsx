'use client'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Script from 'next/script'
// import useSWR from 'swr'

export default function FormFront() {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json())
  // const { data, error, isLoading } = useSWR(`/api/form`, fetcher)
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
    const comingFrom = 'Contact page'
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
        setSending(true)
        setSent(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {!sent && (
        <form
          onSubmit={handleSubmit}
          className='w-[100%]  max-w-2xl p-4 flex  flex-wrap items-center gap-5 bg-slate-500 text-lg rounded'>
          <input
            className='w-[100%] md:w-[47%] p-2 rounded'
            type='text'
            placeholder='First Name'
            required
          />
          <input
            className='w-[100%] md:w-[47%] p-2 rounded'
            type='text'
            placeholder='Lame Name'
            required
          />
          <input
            className='w-[100%] md:w-[47%]  p-2 rounded'
            type='text'
            placeholder='Phone Number'
            required
          />
          <input
            className='w-[100%] md:w-[47%] p-2 rounded'
            type='email'
            placeholder='Email'
            required
          />
          <input
            className='w-[100%]  p-2 rounded'
            type='text'
            placeholder='Adress - Optional *'
          />
          <textarea
            className='p-2 rounded w-[100%]'
            rows='10'
            name=''
            id=''
            placeholder='Message'
            required></textarea>
          <>
            <Script
              // strategy='lazyOnload'
              src='https://www.google.com/recaptcha/api.js'
            />
            <ReCAPTCHA
              sitekey='6LfSO8keAAAAAGKPTDfanck-1THj7-vhnH1Kz3wh'
              onChange={onChange}
            />
          </>

          {sending ? (
            <button className='bg-slate-100 py-1 px-4 rounded '>
              Submitting...
            </button>
          ) : (
            <button
              className='bg-slate-300 hover:bg-slate-200  py-1 px-4 rounded'
              disabled={!captcha}>
              {!captcha ? 'Confirm you are not a robot' : 'Submit'}
            </button>
          )}
        </form>
      )}
      {sent && (
        <div className='text-center text-white bg-slate-600 text-2xl rounded p-4 py-[12rem]'>
          <p>Your mesage has been sent!!</p>
        </div>
      )}
    </>
  )
}
