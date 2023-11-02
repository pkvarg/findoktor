import React, { useState } from 'react'

const Calculator = () => {
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [houseNumber, setHouseNumber] = useState('')

  const [showPart1, setShowPart1] = useState(true)
  const [showPart2, setShowPart2] = useState(true)
  const [showPart3, setShowPart3] = useState(false)
  const [showPart4, setShowPart4] = useState(false)
  const [showPart5, setShowPart5] = useState(false)
  const [showPart6, setShowPart6] = useState(false)
  const [showPart7, setShowPart7] = useState(false)
  const [showPart8, setShowPart8] = useState(false)
  const [showPart9, setShowPart9] = useState(false)
  const [showPart10, setShowPart10] = useState(false)
  const [showPart11, setShowPart11] = useState(false)
  const [showPart12, setShowPart12] = useState(false)
  const [showPart13, setShowPart13] = useState(false)
  const [showPart14, setShowPart14] = useState(false)
  const [showPart15, setShowPart15] = useState(false)
  const [showPart16, setShowPart16] = useState(false)

  console.log(city, street, houseNumber)
  const handleNext1 = () => {
    setShowPart1(false)
    setShowPart2(true)
  }

  const handleBack = () => {
    setShowPart1(true)
    setShowPart2(false)
  }
  const handleNext2 = () => {
    setShowPart2(false)
    setShowPart3(true)
  }

  return (
    <div className='text-black bg-white text-[30px] pb-8 '>
      {showPart1 && (
        <>
          <p className='text-[#0076ba] text-center text-[25px] pt-8'>
            OCENENIE NEHNUTEĽNOSTI ONLINE
          </p>
          <h1 className='text-center font-bold py-4'>
            Kde sa nachádza Vaša nehnuteľnosť?
          </h1>
          <div className='border border-[#0076ba] rounded-xl mx-[250px] my-8 h-[90px] flex flex-col'>
            <label
              htmlFor='text'
              className='text-[#0076ba] text-[18px] relative'
            >
              <span className='absolute -top-[0px] left-[10px] '>Mesto</span>
            </label>
            <input
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className='mt-[30px] w-[97%] text-right outline-none'
            />
          </div>
          <div className='border border-[#0076ba] rounded-xl mx-[250px] my-8 h-[90px] flex flex-col'>
            <label
              htmlFor='text'
              className='text-[#0076ba] text-[18px] relative'
            >
              <span className='absolute -top-[0px] left-[10px] '>Ulica</span>
            </label>
            <input
              type='text'
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className='mt-[30px] w-[97%] text-right outline-none'
            />
          </div>

          <div className='border border-[#0076ba] rounded-xl mx-[250px] my-8 h-[90px] flex flex-col'>
            <label
              htmlFor='text'
              className='text-[#0076ba] text-[18px] relative'
            >
              <span className='absolute -top-[0px] left-[10px] '>Číslo</span>
            </label>
            <input
              type='text'
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              className='mt-[30px] w-[97%] text-right outline-none'
            />
          </div>
          <div className='flex flex-row justify-between mx-[250px] mt-16'>
            <button
              onClick={() => setShowPart1(true)}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]'
            >
              Späť
            </button>
            <button
              onClick={() => handleNext1()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]'
            >
              Ďalej
            </button>
          </div>
        </>
      )}
      {showPart2 && (
        <>
          <p className='text-[#0076ba] text-center text-[25px] pt-8'>
            OCENENIE NEHNUTEĽNOSTI ONLINE
          </p>
          <h1 className='text-center font-bold py-4'>Zvoľte počet izieb</h1>
          <div className='flex flex-row justify-center gap-10'>
            <div className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[200px] h-[150px] flex flex-col gap-[60px]'>
              <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px]'></div>
              <p className='font-bold text-right mr-2'>Garzónka</p>
            </div>
            <div className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[200px] h-[150px]'>
              <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
              <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-6 mr-2'>
                1
              </p>
              <p className='font-bold text-right mr-3 -mt-6'>izbový</p>
            </div>
          </div>
          <div className='mt-4 flex flex-row justify-center gap-10'>
            <div className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[200px] h-[150px]'>
              <div className='flex flex-col gap-[4px] mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[45px] bg-[#0076ba]'></div>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
              </div>
              <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[35%] mr-2'>
                2
              </p>
              <p className='font-bold text-right mr-3 -mt-6'>izbový</p>
            </div>
            <div className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[200px] h-[150px]'>
              <div className='flex flex-row mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
              </div>

              <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] mt-[5px] ml-[15px] bg-[#0076ba]'></div>

              <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[36%] mr-2'>
                3
              </p>
              <p className='font-bold text-right mr-3 -mt-6'>izbový</p>
            </div>
          </div>
          <div className='mt-4 flex flex-row justify-center gap-10'>
            <div className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[200px] h-[150px]'>
              <div className='flex flex-row mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
              </div>
              <div className='flex flex-row mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
              </div>
              <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[35%] mr-2'>
                4
              </p>
              <p className='font-bold text-right mr-3 -mt-6'>izbový</p>
            </div>
            <div className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[200px] h-[150px]'>
              <div className='flex flex-row mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
              </div>
              <div className='flex flex-row mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
              </div>
              <div className='flex flex-row mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
                <p className='ml-[7.5px] -mt-[8%] text-[35px] text-[#0076ba]'>
                  +
                </p>
              </div>

              <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[60%] mr-2'>
                5+
              </p>
              <p className='font-bold text-right mr-3 -mt-6'>izbový</p>
            </div>
          </div>
          <div className='flex flex-row justify-between mx-[35%] mt-16'>
            <button
              onClick={() => handleBack()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]'
            >
              Späť
            </button>
            <button
              onClick={() => handleNext2()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]'
            >
              Ďalej
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Calculator
