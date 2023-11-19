import React, { useState } from 'react'

const Component00 = ({ handleFlatOrHouse }) => {
  const [showPhone, setShowPhone] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  const phone = '+421944517560'
  const email = 'michaldovala.gmail.com'

  const showContact = (info) => {
    if (info === 'phone') {
      // setShowPhone(phone)
      setShowPhone(true)
      const phoneEl = document.getElementById('phone')
      phoneEl.classList.add('noBorder')
    }
    if (info === 'email') {
      // setShowEmail(email)
      setShowEmail(true)
      const emailEl = document.getElementById('email')

      emailEl.classList.add('noBorder')
    }
  }

  return (
    <div className='flex flex-col justify-center mx-4 lg:mx-0 -mt-[17.5%] lg:-mt-[10%]'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[30px] text-center font-bold py-2 lg:py-2 leading-[17.5px]'>
        <span className='text-red-600'>Zvoľte</span> typ Vašej nehnuteľnosti
      </h1>
      <div className='flex flex-row justify-center gap-6 lg:gap-4 pt-4'>
        <div
          id='flat'
          onClick={() => handleFlatOrHouse('flat')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] lg:rounded-[35px] w-[120px] lg:w-[180px] h-[160px] lg:h-[220px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[60%] mt-[20%] ml-[23%]'
              src='/flat1.webp'
              alt='flat'
            />
            <p className='text-[#0076ba] font-extrabold text-[20px] lg:text-[25px] text-center mt-4'>
              Byt
            </p>
          </div>
        </div>
        <div
          id='house'
          onClick={() => handleFlatOrHouse('house')}
          className='border-2 border-[#0076ba] px-2 py-2 rounded-[25px] lg:rounded-[35px] w-[120px] lg:w-[180px] h-[160px] lg:h-[220px] flex flex-col gap-[90px]'
        >
          <div>
            <img
              className='w-[60%] mt-[20%] ml-[22.5%]'
              src='/flat2.webp'
              alt='house'
            />
            <p className='text-[#0076ba] font-extrabold text-[20px] lg:text-[25px] text-center mt-4'>
              Dom
            </p>
          </div>
        </div>
      </div>
      {/* <div className='flex flex-row justify-start items-center gap-4 mt-[4%] lg:mt-[6%] 2xl:mt-[4%]'>
        <img
          className='ml-[10%] lg:ml-[37%] w-[14%] lg:w-[4%]'
          src='/serv1.webp'
          alt='service'
        />
        <p className='text-[25px] lg:text-[35px]'>Online</p>
      </div>
      <div className='flex flex-row justify-start items-center gap-4'>
        <img
          className='ml-[10%] lg:ml-[37%] w-[12%] lg:w-[4%]'
          src='/serv2.webp'
          alt='service'
        />
        <p className='text-[25px] lg:text-[35px]'>Rýchlo</p>
      </div>
      <div className='flex flex-row justify-start items-center gap-4'>
        <img
          className='ml-[10%] lg:ml-[37%] w-[12%] lg:w-[4%]'
          src='/serv3.webp'
          alt='service'
        />
        <p className='text-[25px] lg:text-[35px]'>Zadarmo</p>
      </div> */}
      <div className='flex flex-row justify-center items-center gap-6 lg:gap-4 mt-4'>
        <p
          id='phone'
          onClick={() => showContact('phone')}
          className='border-2 border-[#0076ba] rounded-[20px] lg:rounded-[30px] text-[20px] lg:text-[20px] text-[#0076ba] font-extrabold text-center leading-[20px] lg:leading-[29.5px] py-2 w-[120px] lg:w-[180px] hover:border-none'
        >
          {/* Dohodnite si fyzickú <br /> obhliadku hneď */}

          <a href='tel:+421944517560'>
            Zavolajte <br /> <span className='hover-span'>nám</span>
          </a>
          <a className='hover-phone text-[15px]' href='tel:+421944517560'>
            {phone}
          </a>
        </p>
        <p
          id='email'
          onClick={() => showContact('email')}
          className='border-2 border-[#0076ba] rounded-[20px] lg:rounded-[30px]  text-[20px] lg:text-[20px] text-[#0076ba] font-extrabold text-center leading-[20px] lg:leading-[29.5px] py-2 w-[120px] lg:w-[180px] hover:border-none'
        >
          {/* Dohodnite si fyzickú <br /> obhliadku hneď */}

          <a href='mailto:michaldovala@gmail.com'>
            Napíšte <br /> <span className='hover-span'>nám</span>
          </a>

          <a
            className='hover-email text-[15px]'
            href='mailto:michaldovala@gmail.com'
          >
            {email}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Component00
