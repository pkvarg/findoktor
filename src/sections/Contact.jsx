import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
// import Message from '../components/Message'

const Contact = () => {
  const [message, setMessage] = useState(null)
  const [messageSuccess, setMessageSuccess] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [mailMessage, setMailMessage] = useState('')
  const [checkBox, setCheckBox] = useState(false)

  const handleCheckBox = () => {
    setCheckBox((current) => !current)
  }

  const form = useRef()
  const x = import.meta.env.VITE_EMAIL_EXTRA_ONE
  const y = import.meta.env.VITE_EMAIL_EXTRA_TWO
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)

  const sendEmail = (e) => {
    e.preventDefault()

    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      toast.error('Message failed! Try again later, please.')
      setName('')
      setEmail('')
      setMailMessage('')
      increaseBots()
      const element = document.getElementById('contact')
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
            toast.success('Message successfully sent!')
            console.log('message sent')
          },
          (error) => {
            toast.error('Error! Try again later, please.')
            console.log(error.text)
          }
        )
      setName('')
      setEmail('')
      setPhone('')
      setMailMessage('')
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='bg-[#013bb0] relative pb-8' id='contact'>
      <h1 className='text-center text-[35px] text-[#007ad6] text-[30px]'>
        KONTAKT
      </h1>
      <div className='absolute left-[7.5%] top-20'>
        <img
          className='w-0 lg:w-[65%]'
          src='hero-squares.webp'
          alt='fd-squares'
        />
      </div>
      <div className='flex flex-col lg:flex-row mt-[15%] ml-[22.5%] text-[#007ad6] gap-4'>
        <div>
          {/* <h1 className='text-[30px] uppercase'>Napíšte nám</h1> */}
          <div className=' lg:pt-0 pt-[150px]'>
            {/* {messageSuccess && (
            <Message variant='success'>{messageSuccess}</Message>
          )}
          {message && <Message variant='danger'>{message}</Message>} */}
            <div className='text-[#000000]'>
              <form
                ref={form}
                onSubmit={sendEmail}
                className='flex flex-col gap-[2.5px] text-[25px]'
              >
                <label className='form-label text-[#ffffff]'>
                  Vaša správa<sup>*</sup>
                </label>
                <textarea
                  className='form-control rounded-xl pl-2'
                  rows='5'
                  name='message'
                  value={mailMessage}
                  onChange={(e) => setMailMessage(e.target.value)}
                  required='required'
                ></textarea>
                <label className='form-label my-1  text-[#ffffff]'>
                  Meno <sup>*</sup>
                </label>
                <input
                  className='form-control rounded-xl pl-2'
                  type='text'
                  name='user_name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required='required'
                />

                <label className='form-label my-1  text-[#ffffff]'>
                  {' '}
                  Telefón
                </label>
                <input
                  className='form-control rounded-xl pl-2'
                  type='text'
                  name='user_phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <label className='form-label my-1  text-[#ffffff]'>
                  Email <sup>*</sup>
                </label>
                <input
                  className='form-control rounded-xl pl-2'
                  type='email'
                  name='user_email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required='required'
                />

                <div className='flex flex-row items-center form-check my-3'>
                  <input
                    id='flexCheckDefault'
                    type='checkbox'
                    defaultChecked={false}
                    value={checkBox}
                    onChange={handleCheckBox}
                    required='required'
                    className='rounded-xl w-[20px] h-[20px]'
                  />
                  <label
                    className='form-check-label lg:text-[30px] text-[40px] text-[#ffffff] ml-1'
                    htmlFor='flexCheckDefault'
                  >
                    Súhlasím so spracovaním údajov
                  </label>
                </div>
                <input
                  className='form-control hidden'
                  type='text'
                  defaultValue={passwordGroupOne}
                  onChange={(e) => setPasswordGroupOne(e.target.value)}
                />
                <input
                  className='form-control hidden'
                  type='text'
                  defaultValue={passwordGroupTwo}
                  onChange={(e) => setPasswordGroupTwo(e.target.value)}
                />
                <button
                  className='bg-[#0378d5] text-[#ffffff] py-2 mt-3 rounded-[30px] hover:border'
                  type='submit'
                  value='Send'
                >
                  Odoslať
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <img className='w-[30%]' src='/map.png' alt='map' /> */}
      </div>
    </div>
  )
}

export default Contact
