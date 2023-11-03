import React from 'react'

const Component15 = ({ onBack, onNext, email, setEmail }) => {
  return (
    <div className='relative'>
      <p className='text-[#0076ba] text-center text-[25px] pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[40px] text-center font-bold pt-4 pb-8 leading-[50px]'>
        Vaša nehnuteľnosť bola <br /> nacenená
      </h1>
      <img
        className='absolute top-[22%] left-[27.5%]'
        src='/firework.webp'
        alt='firework'
      />
      <img
        className='absolute top-[22%] right-[27.5%]'
        src='/firework.webp'
        alt='firework'
      />
      <div className='flex flex-row justify-center gap-10'>
        <div className='border-2 border-[#0076ba] px-2 mt-[7.5%] mb-16 rounded-[35px] w-[50%] h-[125px] flex flex-col gap-[90px] relative'>
          <label
            htmlFor='text'
            className='text-[#0076ba] text-[22px] ml-4 -mt-10'
          >
            <span>Ak chcete pokračovať ďalej, zadajte Váš mail:</span>
          </label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-[38px] font-bold absolute top-[33%] text-right w-[93%] h-[50%] outline-none'
          />
          <p className='text-[#0076ba] text-[22.5px] mt-[15%]'>
            Súhlasím s{' '}
            <a
              className='underline font-semibold'
              href='/rules'
              target='_blank'
            >
              podmienkami
            </a>
          </p>
          <input type='checkbox' id='vehicle1' name='vehicle1' />
        </div>
      </div>

      <div className='flex flex-row justify-center gap-[25%] lg:gap-[22%] 2xl:gap-[31%] pt-[10%] pb-16'>
        <button
          onClick={onBack}
          className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          onClick={onNext}
          className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component15
