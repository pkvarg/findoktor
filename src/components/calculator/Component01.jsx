import React, { useEffect, useState } from 'react'
import streetAndDistrict from './../../../Json/streetAndDistrict.json'
import { toast } from 'react-hot-toast'

const Component01 = ({
  onNext,
  onBack,
  city,
  setCity,
  street,
  setStreet,
  houseNumber,
  setHouseNumber,
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  console.log(searchTerm.toLowerCase())
  // Filter streetAndDistrict based on the search term

  const filteredStreets = streetAndDistrict
    .filter((option) =>
      option.street.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((option) => option.street)
  // .filter((street) =>
  //   street.street.toLowerCase().includes(searchTerm.toLowerCase())
  // )

  console.log('filtered', filteredStreets)
  //setStreet(filteredOptions)

  const onNextGuard = () => {
    if (street === '') {
      toast.error('Zvoľte ulicu')
    }
    if (houseNumber === '') {
      toast.error('Zadajte číslo')
    } else {
      onNext()
    }
  }

  return (
    <div className='flex flex-col relative mx-4 md:mx-[20%] lg:mx-[35%] -mt-[12.5%] lg:-mt-[7.5%]'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[30px] text-center font-bold py-2 lg:py-2 leading-[30px]'>
        Kde sa nachádza Vaša nehnuteľnosť?
      </h1>
      <div className='border border-[#0076ba] rounded-lg lg:rounded-xl mt-4 h-[50px] lg:h-[50px] flex flex-col relative'>
        <label
          htmlFor='text'
          className='text-[#0076ba] text-[15px] lg:text-[18px] relative'
        >
          <span className='absolute -top-[0px] left-[10px]'>Mesto</span>
        </label>
        <input
          type='text'
          value={city}
          // onChange={(e) => setCity(e.target.value)}
          className='text-[15px] lg:text-[20px] absolute top-5 lg:top-4 right-3 lg:w-[70%] font-bold text-right outline-none'
        />
      </div>
      <div className='border border-[#0076ba] rounded-lg lg:rounded-xl mt-4 h-[50px] lg:h-[50px] flex flex-col relative'>
        <label
          htmlFor='text'
          className='text-[#0076ba] text-[15px] lg:text-[18px] relative'
        >
          <span className='absolute -top-[0px] left-[10px]'>Ulica</span>
        </label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='text-[15px] lg:text-[20px] absolute top-5 lg:top-4 right-2 lg:w-[70%] font-bold text-right outline-none'
        ></input>

        <div
          //onChange={(e) => setSearchTerm(e.target.value)}
          //value={street}
          className='text-[15px] lg:text-[20px] absolute top-9 lg:top-12 right-2 lg:w-[70%] font-bold text-right outline-none z-30'
        >
          {searchTerm !== '' && (
            <ul className='bg-gray-100 pr-2'>
              {filteredStreets.map((street, index) => (
                <li key={index}>{street}</li>
              ))}
            </ul>
          )}
          {/* <option className='bg-none'>Zvoľte ulicu</option> */}
        </div>
      </div>
      <div className='border border-[#0076ba] rounded-lg lg:rounded-xl mt-4 h-[50px] lg:h-[50px] flex flex-col relative'>
        <label
          htmlFor='text'
          className='text-[#0076ba] text-[15px] lg:text-[18px] relative'
        >
          <span className='absolute -top-[0px] left-[10px]'>Číslo</span>
        </label>
        <input
          type='text'
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          className='text-[15px] lg:text-[20px] absolute top-5 lg:top-4 right-3 lg:w-[70%] font-bold text-right outline-none'
        />
      </div>

      <div className='flex flex-row justify-between w-[100%] mb-8 lg:mb-0 mt-[15%]'>
        <button
          onClick={onBack}
          className='border border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-10 lg:px-10 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          className='border border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-9 lg:px-9 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
          onClick={() => onNextGuard()}
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component01
