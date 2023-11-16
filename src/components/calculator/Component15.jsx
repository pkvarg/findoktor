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
  return (
    <div className='flex flex-col relative w-[98%] lg:w-[100%] mx-1 lg:mx-0 mt-[20%] lg:mt-0'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[20px] lg:leading-[27px]'>
        Vaša nehnuteľnosť bola <br /> nacenená
      </h1>
      <img
        className='flex w-[17.5%] absolute top-[19%] lg:top-[22%] lg:left-[0%]'
        src='/firework.webp'
        alt='firework'
      />
      <img
        className='flex w-[17.5%] absolute top-[19%] lg:top-[22%] right-0 lg:right-[0%]'
        src='/firework.webp'
        alt='firework'
      />
      <div className='flex flex-col justify-center mt-10'>
        <label
          htmlFor='text'
          className='text-[#0076ba] text-[12.5px] lg:text-[12.5px] ml-1 relative'
        >
          <span>Ak chcete pokračovať ďalej, zadajte Váš mail:</span>
        </label>
        <div className='border border-[#0076ba] rounded-lg lg:rounded-xl h-[50px] lg:h-[55px] w-[100%] flex flex-col relative'>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-[17.5px] font-bold absolute top-[32%] text-right w-[93%] lg:w-[96%] h-[50%] outline-none'
            required='required'
          />
          <div className='flex flex-row justify-start items-center mt-[30%] lg:mt-[30%]'>
            <input
              className='h-[15px] w-[15px] mr-2'
              type='checkbox'
              defaultChecked={false}
              value={checkBox}
              onChange={() => setCheckBox((prev) => !prev)}
              required
            />
            <p className='text-[#0076ba] text-[15px]'>
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

      <div className='flex flex-row justify-between pt-[70%] lg:pt-[70%] gap-1'>
        <button
          onClick={onBack}
          className='border border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-8 lg:px-8 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          type='submit'
          //disabled={checkBox === false || !isValid}
          //onClick={onNext}
          className='border border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-7 lg:px-7 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component15
