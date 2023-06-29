import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

const Ebook = () => {
  const form = useRef()
  const [email, setEmail] = useState('')
  const [mailMessage, setMailMessage] = useState('ebook')

  const x = import.meta.env.VITE_EMAIL_EXTRA_ONE
  const y = import.meta.env.VITE_EMAIL_EXTRA_TWO
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)

  const sendEmail = (e) => {
    e.preventDefault()

    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      toast.error('Vyskytla sa chyba! Skúste neskôr, prosím.')
      setEmail('')
      //increaseBots()
      const element = document.getElementById('ebook')
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE,
          form.current,
          import.meta.env.VITE_EMAILJS_USER
        )
        .then(
          (result) => {
            console.log(result.text)
            toast.success('Ďakujeme, Váš ebook je na ceste!')
            console.log('message sent')
          },
          (error) => {
            toast.error('Chyba! Kontaktujte nás telefonicky, prosím.')
            console.log(error.text)
          }
        )

      setEmail('')

      const element = document.getElementById('ebook')
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='text-[#ffffff] mt-4' id='ebook'>
      <h1 className='text-[35px] text-center'>Získajte ebook zdarma</h1>

      <form
        onSubmit={sendEmail}
        ref={form}
        className='flex gap-4 justify-center mt-16'
      >
        <label className='form-label text-[25px] text-[#ffffff]'>
          Zadajte Váš Email
        </label>
        <input
          className='form-control rounded-xl pl-2'
          type='email'
          name='user_email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required='required'
        />
        <input
          type='text'
          name='message'
          value={mailMessage}
          className='hidden'
        />

        <button
          type='submit'
          value='Send'
          className='bg-[#ff0000] rounded-[15px] w-[100px]'
        >
          Odoslať
        </button>
      </form>
    </div>
  )
}

export default Ebook
