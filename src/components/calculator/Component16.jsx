import React from 'react'

const Component16 = ({
  onBack,
  minPriceWithoutRealEstateAssistance,
  maxPriceWithoutRealEstateAssistance,
  minPriceWithRealEstateAssistance,
  maxPriceWithRealEstateAssistance,
}) => {
  return (
    <div className='flex flex-col relative w-[98%] lg:w-[100%] mx-1 lg:mx-0 mt-[20%] lg:mt-[2%]'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[20px] lg:leading-[20px]'>
        Odhadovaná cena Vašej <br /> nehnuteľnosti je:
      </h1>

      <div className='flex flex-col justify-center mt-2'>
        <div className='border border-[#0076ba] rounded-lg lg:rounded-xl h-[50px] lg:h-[55px] w-[325px] flex flex-col relative'>
          <p className='text-[20px] text-[#0076ba] font-bold absolute top-[33%] right-4 text-right'>
            {minPriceWithoutRealEstateAssistance}€ -{' '}
            {maxPriceWithoutRealEstateAssistance}€
          </p>

          <p className='text-[#ff010f] text-[12.5px] absolute top-14 left-2'>
            *cena bez služieb Realitnej kancelárie
          </p>
        </div>
        <div className='border border-[#0076ba] rounded-lg lg:rounded-xl h-[50px] lg:h-[55px] w-[100%] flex flex-col relative mt-8'>
          <p className='text-[20px] text-[#0076ba] font-bold absolute top-[33%] right-4 text-right'>
            {minPriceWithRealEstateAssistance}€ -{' '}
            {maxPriceWithRealEstateAssistance}€
          </p>

          <p className='text-[#ff010f] text-[12.5px] absolute -bottom-6 left-2'>
            *cena po odrátaní služieb Realitnej kancelárie
          </p>
        </div>
        <div className='border border-[#0076ba] rounded-[15px] h-[50px] lg:h-[55px] w-[100%] flex flex-col relative mt-12  hover:border-red-600 hover:border-4'>
          <p className='text-[15px] leading-[15px] text-[#0076ba] font-bold text-center mt-3'>
            <a href='tel:+421944517560'>
              Dohodnite si fyzickú <br /> obhliadku teraz
            </a>
          </p>
        </div>
      </div>

      <button
        onClick={onBack}
        className='border border-[#0076ba] uppercase text-[15px] px-1 py-2 rounded-[35px] font-bold  hover:border-[#03065f] hover:border-2 w-[40%] mt-16 lg:mt-8'
      >
        Späť
      </button>
    </div>
  )
}

export default Component16
