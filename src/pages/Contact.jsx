import React, { useState } from 'react'
import CalcNavbar from '../components/calculator/CalcNavbar'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Footer } from '../components'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const x = import.meta.env.VITE_EMAIL_EXTRA_ONE
  const y = import.meta.env.VITE_EMAIL_EXTRA_TWO
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)

  console.log(name, email, phone, message)

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('subbbbb')
    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      toast.error('Nastala chyba.')
    }
    try {
      console.log('..email is sending..')
      const { data } = await axios.put(
        `https://api.pictusweb.com/api/md/contact`,
        // `http://localhost:2000/api/md/contact`,
        {
          name,
          email,
          phone,
          message,
        }
      )

      if (data.status === 'Success') toast.success('Správa úspešne odoslaná')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  return (
    <>
      <CalcNavbar />
      <h1 className='text-center text-[30px] text-[#0376b7] font-bold mt-12'>
        Kontaktujte ma
      </h1>
      <div className='bg-white mx-4 lg:mx-[25%] mt-12'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='flex flex-col justify-start'>
            <label className='font-bold py-2'>
              Meno
              <span className='text-red-500 ml-1'>*</span>
            </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border border-gray-300 h-[50px] pl-[5px]'
              required='required'
            />
          </div>
          <div className='flex flex-col justify-start'>
            <label className='font-bold py-2'>
              Email
              <span className='text-red-500 ml-1'>*</span>
            </label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border border-gray-300 h-[50px] pl-[5px]'
              required='required'
            />
          </div>
          <div className='flex flex-col justify-start'>
            <label className='font-bold py-2'>
              Telefón
              <span className='text-red-500 ml-1'>*</span>
            </label>
            <input
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='border border-gray-300 h-[50px] pl-[5px]'
              required='required'
            />
          </div>
          <div className='flex flex-col justify-start'>
            <label className='font-bold py-2'>
              Vaša správa
              <span className='text-red-500 ml-1'>*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='border border-gray-300 h-[150px] pl-[5px]'
              rows='10'
            ></textarea>
          </div>
          <div className='flex flex-row items-center gap-4 lg:gap-2 mt-4'>
            <input type='checkbox' required='required' />
            <p>Pred odoslaním musíte súhlasiť so spracovaním osobných údajov</p>
          </div>

          <input
            className='form-control'
            type='text'
            defaultValue={passwordGroupOne}
            onChange={(e) => setPasswordGroupOne(e.target.value)}
          />
          <input
            className='form-control'
            type='text'
            defaultValue={passwordGroupTwo}
            onChange={(e) => setPasswordGroupTwo(e.target.value)}
          />

          <button
            type='submit'
            className='bg-[#0376b7] text-white w-[100%] lg:w-[20%] hover:bg-white hover:text-[#0376b7] hover:border hover:border-[#0376b7] py-3 mt-8 lg:mt-4'
          >
            Odoslať
          </button>
        </form>
      </div>
      <div className='relative mt-4 h-[50px]'>
        <Footer />
      </div>
    </>
  )
}

export default Contact
