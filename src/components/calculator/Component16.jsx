import React from 'react'

const Component16 = ({
  onBack,
  withoutRealEstateAssistance,
  withRealEstateAssistance,
}) => {
  const phone = '+421944517560'
  const email = 'michaldovala.gmail.com'

  return (
    <div className='flex flex-col relative w mx-4 md:mx-[20%] lg:mx-[40%] -mt-[30%] md:-mt-[20%] lg:-mt-[10%]'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[22.5px] lg:text-[25px] text-center font-bold py-2 lg:py-2 leading-[22.5px] lg:leading-[25px]'>
        Odhadovaná cena Vašej <br /> nehnuteľnosti je:
      </h1>

      <div className='flex flex-col justify-center mt-2'>
        <div className='border-2 border-[#0076ba] rounded-lg lg:rounded-xl h-[50px] lg:h-[55px] flex flex-col relative'>
          <p className='text-[25px] text-[#ff010f] font-bold text-center translate-y-[30%]'>
            {withoutRealEstateAssistance} €
          </p>

          <p className=' text-[#0076ba]  text-[12.5px] absolute top-14 left-2'>
            *cena bez služieb Realitnej kancelárie
          </p>
        </div>
        <div className='border-2 border-[#0076ba] rounded-lg lg:rounded-xl h-[50px] lg:h-[55px] w-[100%] flex flex-col relative mt-8'>
          <p className='text-[25px] text-[#ff010f] font-bold text-center translate-y-[30%]'>
            {withRealEstateAssistance} €
          </p>

          <p className='text-[#0076ba] text-[12.5px] leading-[12.5px] absolute top-[112%] left-2'>
            *cena po odrátaní služieb Realitnej kancelárie
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 lg:gap-4 mt-12'>
          <p
            id='phone'
            onClick={() => showContact('phone')}
            className='border border-[#0076ba] rounded-[20px] lg:rounded-xl text-[20px] lg:text-[20px] text-[#0076ba] font-bold text-center leading-[20px] lg:leading-[29.5px] py-2 hover:border-none w-[100%]'
          >
            {/* Dohodnite si fyzickú <br /> obhliadku hneď */}

            <a href='tel:+421944517560'>
              Zavolajte <span className='hover-span'>nám</span>
            </a>
            <a className='hover-phone text-[15px]' href='tel:+421944517560'>
              {phone}
            </a>
          </p>
          <p
            id='email'
            onClick={() => showContact('email')}
            className='border border-[#0076ba] rounded-[20px] lg:rounded-xl  text-[20px] lg:text-[20px] text-[#0076ba] font-bold text-center leading-[20px] lg:leading-[29.5px] py-2 hover:border-none w-[100%]'
          >
            {/* Dohodnite si fyzickú <br /> obhliadku hneď */}

            <a href='mailto:michaldovala@gmail.com'>
              Napíšte <span className='hover-span'>nám</span>
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

      <button
        onClick={onBack}
        className='border border-[#0076ba] uppercase text-[15px] px-1 py-2 rounded-[35px] font-bold  hover:border-[#03065f] hover:border-2 w-[90%] mt-16 lg:mt-8'
      >
        Späť (pôjde čoskoro preč 😀)
      </button>
    </div>
  )
}

export default Component16
