import React, { useState } from 'react'

const Calculator = () => {
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [houseNumber, setHouseNumber] = useState('')

  const [countRooms, setCountRooms] = useState(0)
  const [houseCondition, setHouseCondition] = useState(0)

  const [squareMeters, setSquareMeters] = useState(0)

  const [allFloorsCount, setAllFloorsCount] = useState(0)

  const [currentFloorNumber, setCurrentFloorNumber] = useState(0)

  console.log(
    city,
    street,
    houseNumber,
    countRooms,
    houseCondition,
    squareMeters,
    allFloorsCount
  )

  const [showPart1, setShowPart1] = useState(true)
  const [showPart2, setShowPart2] = useState(false)
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

  const [currentlyClicked, setCurrentlyClicked] = useState(null)
  const [currentConditionClicked, setCurrentConditionClicked] = useState(null)

  const handleNext1 = () => {
    setShowPart1(false)
    setShowPart2(true)
  }

  const handleBack2 = () => {
    setShowPart1(true)
    setShowPart2(false)
  }
  const handleNext2 = () => {
    setShowPart2(false)
    setShowPart3(true)
  }

  const handleBack3 = () => {
    setShowPart3(false)
    setShowPart2(true)
  }

  const handleNext3 = () => {
    setShowPart3(false)
    setShowPart4(true)
  }

  const handleBack4 = () => {
    setShowPart4(false)
    setShowPart3(true)
  }

  const handleNext4 = () => {
    setShowPart4(false)
    setShowPart5(true)
  }

  const handleBack5 = () => {
    setShowPart4(false)
    setShowPart3(true)
  }

  const handleNext5 = () => {
    setShowPart4(false)
    setShowPart5(true)
  }

  const handleBack6 = () => {
    setShowPart5(false)
    setShowPart4(true)
  }

  const handleNext6 = () => {
    setShowPart5(false)
    setShowPart6(true)
  }

  const handleBack7 = () => {
    setShowPart5(false)
    setShowPart4(true)
  }

  const handleNext7 = () => {
    setShowPart5(false)
    setShowPart6(true)
  }

  const handleBack8 = () => {
    setShowPart6(false)
    setShowPart5(true)
  }

  const handleNext8 = () => {
    setShowPart6(false)
    setShowPart7(true)
  }

  const handleCountRoomClick = (count) => {
    if (currentlyClicked !== null) {
      const toRemoveFrom = document.getElementById(currentlyClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    console.log(count)
    setCountRooms(count)
    setCurrentlyClicked(count)
    const element = document.getElementById(count)
    element.classList.add('clicked')
  }

  const handleHouseCondition = (num) => {
    console.log(num)
    if (currentConditionClicked !== null) {
      const toRemoveFrom = document.getElementById(currentConditionClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    setHouseCondition(num)
    setCurrentConditionClicked(num)
    const element = document.getElementById(num)
    element.classList.add('clicked')
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
            {/* <button
              onClick={() => handleBack()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
            >
              Späť
            </button> */}
            <button
              onClick={() => handleNext1()}
              className='ml-auto border border-[#0076ba] px-14 py-2 rounded-[35px] hover:border-[#03065f] hover:border-2'
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
          <h1 className='text-center font-bold pt-4 pb-8'>
            Zvoľte počet izieb
          </h1>
          <div className='flex flex-row justify-center gap-10'>
            <div
              id='0'
              onClick={() => handleCountRoomClick(0)}
              className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[180px] flex flex-col gap-[90px]'
            >
              <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] '></div>
              <p className='font-bold text-right mr-3'>Garzónka</p>
            </div>
            <div
              id='1'
              onClick={() => handleCountRoomClick(1)}
              className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[180px]'
            >
              <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
              <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-4 mr-2'>
                1
              </p>
              <p className='font-bold text-right mr-3 -mt-1'>izbový</p>
            </div>
          </div>
          <div className='mt-4 flex flex-row justify-center gap-10'>
            <div
              id='2'
              onClick={() => handleCountRoomClick(2)}
              className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[180px]'
            >
              <div className='flex flex-col gap-[4px] mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[45px] bg-[#0076ba]'></div>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
              </div>
              <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[26%] mr-2'>
                2
              </p>
              <p className='font-bold text-right mr-3 -mt-1'>izbový</p>
            </div>
            <div
              id='3'
              onClick={() => handleCountRoomClick(3)}
              className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[180px]'
            >
              <div className='flex flex-row mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
              </div>

              <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] mt-[5px] ml-[15px] bg-[#0076ba]'></div>

              <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[26%] mr-2'>
                3
              </p>
              <p className='font-bold text-right mr-3 -mt-1'>izbový</p>
            </div>
          </div>
          <div className='mt-4 flex flex-row justify-center gap-10'>
            <div
              id='4'
              onClick={() => handleCountRoomClick(4)}
              className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[180px]'
            >
              <div className='flex flex-row mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
              </div>
              <div className='flex flex-row mt-2'>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[15px] bg-[#0076ba]'></div>
                <div className='border-4 border-[#0076ba] h-[25px] w-[25px] rounded-[60px] ml-[5px] bg-[#0076ba]'></div>
              </div>
              <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[28%] mr-2'>
                4
              </p>
              <p className='font-bold text-right mr-3 -mt-1'>izbový</p>
            </div>
            <div
              id='5'
              onClick={() => handleCountRoomClick(5)}
              className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[230px] h-[180px]'
            >
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

              <p className='text-[#0076ba] text-[75px] font-bold text-right -mt-[48.5%] mr-2'>
                5+
              </p>
              <p className='font-bold text-right mr-3 -mt-1'>izbový</p>
            </div>
          </div>
          <div className='flex flex-row justify-between mx-[32%] mt-16'>
            <button
              onClick={() => handleBack2()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
            >
              Späť
            </button>
            <button
              onClick={() => handleNext2()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
            >
              Ďalej
            </button>
          </div>
        </>
      )}
      {showPart3 && (
        <>
          <p className='text-[#0076ba] text-center text-[25px] pt-8'>
            OCENENIE NEHNUTEĽNOSTI ONLINE
          </p>
          <h1 className='text-center font-bold pt-4 pb-8'>
            V akom stave je nehnuteľnosť?
          </h1>
          <div className='flex flex-row justify-center gap-10'>
            <div
              id='1'
              onClick={() => handleHouseCondition(1)}
              className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px] flex flex-col gap-[90px]'
            >
              <div>
                <img
                  className='w-[100%] mt-[10%]'
                  src='/cnd01.webp'
                  alt='home01'
                />
                <div className='bg-[#000000] h-[2px]'></div>
                <p className='font-bold text-[35px] text-right mt-4 mr-3  '>
                  Novostavba
                </p>
                <p className='text-right mr-2 text-[#0076ba] text-[18px]'>
                  Byt bol postavený iba nedávno
                </p>
              </div>
            </div>
            <div
              id='2'
              onClick={() => handleHouseCondition(2)}
              className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
            >
              <div>
                <img
                  className='w-[70%] mt-[8.5%] ml-[5%]'
                  src='/cnd02.webp'
                  alt='home02'
                />
                <div className='bg-[#000000] h-[3px]'></div>
                <p className='text-[35px] font-bold text-right mr-3 mt-4'>
                  Vynikajúci
                </p>
                <p className='mt-0 mr-2 text-[#0076ba] text-[16px]'>
                  Byt je kompletne zrekonštruovaný
                </p>
              </div>
            </div>
          </div>
          <div className='mt-4 flex flex-row justify-center gap-10'>
            <div
              id='3'
              onClick={() => handleHouseCondition(3)}
              className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
            >
              <div>
                <img
                  className='w-[100%] mt-[8.5%]'
                  src='/cnd03.webp'
                  alt='home03'
                />
                <div className='bg-[#000000] h-[3px]'></div>
                <p className='text-[35px] font-bold text-right mr-3 mt-4'>
                  Dobrý
                </p>
                <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right'>
                  Niečo už potrebuje
                </p>
                <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right'>
                  modernizovať
                </p>
              </div>
            </div>
            <div
              id='4'
              onClick={() => handleHouseCondition(4)}
              className='border-2 border-[#0076ba] px-2 py-2 rounded-[35px] w-[280px] h-[285px]'
            >
              <div>
                <img
                  className='w-[80%] mt-[7%] ml-[7%]'
                  src='/cnd04.webp'
                  alt='home04'
                />
                <div className='bg-[#000000] h-[3px] mt-2'></div>
                <p className='text-[35px] font-bold text-right mr-3 mt-4'>
                  Pôvodný
                </p>
                <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right'>
                  Byt potrebuje celkovú
                </p>
                <p className='mt-0 mr-2 text-[#0076ba] text-[18px] text-right'>
                  rekonštrukciu
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-between mx-[29%] mt-16'>
            <button
              onClick={() => handleBack3()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
            >
              Späť
            </button>
            <button
              onClick={() => handleNext3()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
            >
              Ďalej
            </button>
          </div>
        </>
      )}
      {showPart4 && (
        <>
          <p className='text-[#0076ba] text-center text-[25px] pt-8'>
            OCENENIE NEHNUTEĽNOSTI ONLINE
          </p>
          <h1 className='text-center font-bold pt-4 pb-8'>
            Akú obytnú plochu má byt?
          </h1>
          <div className='flex flex-row justify-center gap-10'>
            <div className='border-2 border-[#0076ba] px-2 my-16 rounded-[35px] w-[50%] h-[125px] flex flex-col gap-[90px] relative'>
              <label
                htmlFor='text'
                className='text-[#0076ba] text-[22px] ml-4 relative'
              >
                <span className=''>Úžitková plocha</span>
              </label>
              <input
                type='text'
                value={squareMeters}
                onChange={(e) => setSquareMeters(e.target.value)}
                className='text-[68px] font-bold ml-[5%] -mt-[16%] w-[85%] text-right outline-none'
              />

              <p className='text-[#0076ba] font-bold text-[35px] absolute top-[41%] right-8'>
                m<span className='text-[15px] absolute top-2'>2</span>
              </p>
            </div>
          </div>
          <div className='flex flex-row justify-between mx-[25%] mt-16'>
            <button
              onClick={() => handleBack5()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
            >
              Späť
            </button>
            <button
              onClick={() => handleNext5()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
            >
              Ďalej
            </button>
          </div>
        </>
      )}

      {showPart5 && (
        <>
          <p className='text-[#0076ba] text-center text-[25px] pt-8'>
            OCENENIE NEHNUTEĽNOSTI ONLINE
          </p>
          <h1 className='text-center font-bold pt-4 pb-8'>
            Koľko poschodí má budova v ktorej sa nachádza byt?
          </h1>
          <div className='flex flex-row justify-center gap-10'>
            <div className='border-2 border-[#0076ba] px-2 my-16 rounded-[35px] w-[50%] h-[125px] flex flex-col gap-[90px] relative'>
              <label
                htmlFor='text'
                className='text-[#0076ba] text-[22px] ml-4 relative'
              >
                <span className=''>Počet poschodí v budove</span>
              </label>
              <input
                type='text'
                value={allFloorsCount}
                onChange={(e) => setAllFloorsCount(e.target.value)}
                className='text-[68px] font-bold ml-[5%] -mt-[16%] w-[90%] text-right outline-none'
              />
            </div>
          </div>
          <div className='flex flex-row justify-between mx-[25%] mt-16'>
            <button
              onClick={() => handleBack7()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
            >
              Späť
            </button>
            <button
              onClick={() => handleNext7()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
            >
              Ďalej
            </button>
          </div>
        </>
      )}

      {showPart6 && (
        <>
          <p className='text-[#0076ba] text-center text-[25px] pt-8'>
            OCENENIE NEHNUTEĽNOSTI ONLINE
          </p>
          <h1 className='text-center font-bold pt-4 pb-8'>
            Na koľkom poschodí sa nachádza byt?
          </h1>
          <div className='flex flex-row justify-center gap-10'>
            <div className='border-2 border-[#0076ba] px-2 my-16 rounded-[35px] w-[50%] h-[125px] flex flex-col gap-[90px] relative'>
              <label
                htmlFor='text'
                className='text-[#0076ba] text-[22px] ml-4 relative'
              >
                <span className=''>Číslo poschodia bytu</span>
              </label>
              <input
                type='text'
                value={currentFloorNumber}
                onChange={(e) => setCurrentFloorNumber(e.target.value)}
                className='text-[68px] font-bold ml-[5%] -mt-[16%] w-[90%] text-right outline-none'
              />
            </div>
          </div>
          <div className='flex flex-row justify-between mx-[25%] mt-16'>
            <button
              onClick={() => handleBack8()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
            >
              Späť
            </button>
            <button
              onClick={() => handleNext8()}
              className='border border-[#0076ba] px-14 py-2 rounded-[35px]  hover:border-[#03065f] hover:border-2'
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
