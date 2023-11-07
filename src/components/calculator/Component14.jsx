import React from 'react'

const Component14 = ({ onBack, onNext, handleUrbanQuality }) => {
  return (
    <div className='flex flex-col relative mx-1'>
      <p className='text-[#0076ba] text-center text-[10px] lg:text-[12.5px] pt-12 lg:pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[18px] lg:text-[20px] text-center font-bold py-2 lg:py-2 leading-[20px] lg:leading-[27px]'>
        Aká je občianska vybavenosť <br /> v danej lokalite?
      </h1>
      <div className='flex flex-row justify-center mt-4'>
        <div
          id='excellent'
          onClick={() => handleUrbanQuality('excellent')}
          className='border-2 border-[#0076ba] pt-1 lg:pt-0 px-4  lg:px-2 rounded-[20px]  flex flex-col mx-1 lg:mx-3 lg:w-[29%]'
        >
          <p className='leading-[15px] text-[15px] font-semibold text-justify mx-1 lg:mt-2'>
            Lokalita patrí k najlepším v meste. Nachádza sa v samotnom centre
            mesta – Staré Mesto, Koliba, nový Downtown. Lokalitu preferuje
            bonitnejšia časť populácie.
          </p>
          <div className='flex flex-row justify-between items-center mt-0 mx-1'>
            <p className='text-[20px]'>⭐️⭐️⭐️</p>
            <p className='text-[#0076ba] text-[15px] font-bold'>výborná</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-4'>
        <div
          id='average'
          onClick={() => handleUrbanQuality('average')}
          className='border-2 border-[#0076ba] px-2 rounded-[20px]  flex flex-col mx-1 lg:mx-3 lg:w-[29%]'
        >
          <p className='leading-[15px] text-[15px] font-semibold text-justify pt-1 lg:pt-0 mx-1 lg:mt-2'>
            Lokalita sa nachádza ďalej od centra mesta. Charakterizuje ju dobrá
            občianska vybavenosť (školy, škôlky, kaviarne, reštaurácie, MHD).
            Lokalitu preferuje stredná vrstva populácie.
          </p>
          <div className='flex flex-row justify-between items-center mx-1'>
            <p className='text-[20px]'>⭐️⭐️</p>
            <p className='text-[#0076ba] text-[15px] font-bold'>priemerná</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-4'>
        <div
          id='poor'
          onClick={() => handleUrbanQuality('poor')}
          className='border-2 border-[#0076ba] px-2 rounded-[20px] flex flex-col mx-1 lg:mx-3 lg:w-[29%]'
        >
          <p className='leading-[15px] text-[15px] font-semibold text-justify pt-1 lg:pt-0 mx-1 lg:mt-2'>
            Lokalita patrí k najmenej rozvinutým v meste. Nachádza sa na okraji
            mesta, alebo v blízkosti industriálnej zóny. Preferuje ju primárne
            menej solventná časť populácie.
          </p>
          <div className='flex flex-row justify-between items-center mx-1'>
            <p className='text-[20px]'>⭐️</p>
            <p className='text-[#0076ba] text-[15px] font-bold'>slabšia</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-[35%] lg:gap-[12.5%] pt-[15%] lg:pt-[5%]'>
        <button
          onClick={onBack}
          className='border border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-8 lg:px-8 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Späť
        </button>
        <button
          onClick={onNext}
          className='border border-[#0076ba] text-[15px] lg:text-[15px] h-10 lg:h-10 px-7 lg:px-7 py-0 lg:py-2 rounded-[35px] uppercase font-bold hover:border-[#03065f] hover:border-2'
        >
          Ďalej
        </button>
      </div>
    </div>
  )
}

export default Component14
