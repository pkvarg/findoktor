import React from 'react'

const Component16 = ({
  onBack,
  minPriceWithoutRealEstateAssistance,
  maxPriceWithoutRealEstateAssistance,
  minPriceWithRealEstateAssistance,
  maxPriceWithRealEstateAssistance,
}) => {
  return (
    <div className='relative'>
      <p className='text-[#0076ba] text-center text-[25px] pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[40px] text-center font-bold pt-4 pb-8 leading-[50px]'>
        Odhadovaná cena Vašej <br /> nehnuteľnosti je:
      </h1>

      <div className='flex flex-col items-center gap-10 pb-[20%]'>
        <div className='border-2 border-[#0076ba] px-2 mt-[7.5%] mb-16 rounded-[35px] w-[50%] h-[125px] flex flex-col gap-[90px] relative'>
          <p className='text-[42px] text-[#0076ba] font-bold absolute top-[33%] text-right w-[93%] h-[50%]'>
            {minPriceWithoutRealEstateAssistance} -{' '}
            {maxPriceWithoutRealEstateAssistance}€
          </p>

          <p className='text-[#ff010f] text-[22.5px] mt-[22%] ml-[2%]'>
            *cena bez služieb Realitnej kancelárie
          </p>
        </div>
        <div className='border-2 border-[#0076ba] px-2 mb-16 rounded-[35px] w-[50%] h-[125px] flex flex-col gap-[90px] relative'>
          <p className='text-[42px] text-[#0076ba] font-bold absolute top-[33%] text-right w-[93%] h-[50%]'>
            {minPriceWithRealEstateAssistance} -{' '}
            {maxPriceWithRealEstateAssistance}€
          </p>

          <p className='text-[#ff010f] text-[22.5px] mt-[22%] ml-[2%]'>
            *cena po odrátaní služieb Realitnej kancelárie
          </p>
        </div>
        <div className='border-2 border-[#0076ba] px-2 mb-16 rounded-[35px] w-[50%] h-[125px]'>
          <p className='text-[35px] text-[#0076ba] font-bold  text-center h-[50%] leading-[40px] mt-6'>
            Dohodnite si fyzickú <br /> obhliadku teraz
          </p>
          <button
            onClick={onBack}
            className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2 mt-[20%]'
          >
            Späť
          </button>
        </div>
      </div>
    </div>
  )
}

export default Component16
