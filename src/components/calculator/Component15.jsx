import React from 'react'

const Component15 = ({
  onBack,
  onNext,
  isValid,
  email,
  setEmail,
  checkBox,
  setCheckBox,
}) => {
  console.log(checkBox)
  return (
    <div className='relative flex flex-col mx-1'>
      <p className='text-[#0076ba] text-center text-[25px] pt-16 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[40px] text-center font-bold py-8 leading-[50px]'>
        Vaša nehnuteľnosť bola <br /> nacenená
      </h1>
      <img
        className='hidden lg:flex absolute lg:top-[22%] lg:left-[27.5%]'
        src='/firework.webp'
        alt='firework'
      />
      <img
        className='hidden lg:flex absolute top-[22%] right-[27.5%]'
        src='/firework.webp'
        alt='firework'
      />
      <div className='flex flex-row justify-center gap-10'>
        <div className='border-2 border-[#0076ba] px-2 mt-[7.5%] mb-16 rounded-[35px] w-[99%] lg:w-[50%] h-[125px] flex flex-col gap-[90px] relative'>
          <label
            htmlFor='text'
            className='text-[#0076ba] text-[15px] lg:text-[22px] ml-4 -mt-10'
          >
            <span>Ak chcete pokračovať ďalej, zadajte Váš mail:</span>
          </label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-[25px] lg:text-[38px] font-bold absolute top-[33%] text-right w-[93%] lg:w-[93%] h-[50%] outline-none'
            required='required'
          />
          <div className='flex flex-row justify-start items-center mt-[30%] lg:mt-[16%]'>
            <input
              className='h-[22.5px] w-[22.5px] mr-4'
              type='checkbox'
              defaultChecked={false}
              value={checkBox}
              onChange={() => setCheckBox((prev) => !prev)}
              required='required'
            />
            <p className='text-[#0076ba] text-[22.5px]'>
              Súhlasím s{' '}
              <a
                className='underline font-semibold'
                href='/rules'
                target='_blank'
              >
                podmienkami
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center gap-[8%] lg:gap-[24%] 2xl:gap-[31%]  mt-[20%] lg:mt-[10%] pb-16'>
        <button
          onClick={onBack}
          className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          disabled={checkBox === false || !isValid}
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
