import React from 'react'

const Component14 = ({ onBack, onNext, handleUrbanQuality }) => {
  return (
    <div className='flex flex-col mx-1'>
      <p className='text-[#0076ba] text-center text-[18px] lg:text-[25px] pt-8 lg:pt-16'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-[25px] lg:text-[25px] text-center font-bold py-4 lg:py-8 leading-[35px]'>
        Aká je občianska vybavenosť v danej lokalite?
      </h1>
      <div className='flex flex-row justify-center mt-4'>
        <div
          id='excellent'
          onClick={() => handleUrbanQuality('excellent')}
          className='border-2 border-[#0076ba] px-2 rounded-[35px] w-[98%] lg:w-[50%] h-[240px] lg:h-[225px] flex flex-col'
        >
          <p className='leading-[25px] text-[25px] font-semibold text-justify mx-2 mt-4 lg:mt-2'>
            Lokalita patrí k najlepším v meste. Nachádza sa v samotnom centre
            mesta – Staré Mesto, Koliba, nový Downtown. Lokalitu preferuje
            bonitnejšia časť populácie.
          </p>
          <div className='flex flex-row justify-between items-center mt-0 mx-4'>
            <p className='text-[50px]'>⭐️⭐️⭐️</p>
            <p className='text-[#0076ba] text-[35px] font-bold'>výborná</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-4'>
        <div
          id='average'
          onClick={() => handleUrbanQuality('average')}
          className='border-2 border-[#0076ba] px-2 rounded-[35px] w-[98%] lg:w-[50%] h-[270px] lg:h-[225px] flex flex-col'
        >
          <p className='leading-[25px] text-[25px] font-semibold text-justify mx-2 mt-6 lg:mt-2'>
            Lokalita sa nachádza ďalej od centra mesta. Charakterizuje ju dobrá
            občianska vybavenosť (školy, škôlky, kaviarne, reštaurácie, MHD).
            Lokalitu preferuje stredná vrstva populácie.
          </p>
          <div className='flex flex-row justify-between items-center mx-4'>
            <p className='text-[50px]'>⭐️⭐️</p>
            <p className='text-[#0076ba] text-[35px] font-bold'>priemerná</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center mt-4'>
        <div
          id='poor'
          onClick={() => handleUrbanQuality('poor')}
          className='border-2 border-[#0076ba] px-2 rounded-[35px] w-[98%] lg:w-[50%] h-[260px] lg:h-[225px] flex flex-col'
        >
          <p className='leading-[25px] text-[25px] font-semibold text-justify mx-2 mt-4 lg:mt-2'>
            Lokalita patrí k najmenej rozvinutým v meste. Nachádza sa na okraji
            mesta, alebo v blízkosti industriálnej zóny. Preferuje ju primárne
            menej solventná časť populácie.
          </p>
          <div className='flex flex-row justify-between items-center mx-4'>
            <p className='text-[50px]'>⭐️</p>
            <p className='text-[#0076ba] text-[35px] font-bold'>slabšia</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center gap-[8%] lg:gap-[23%] 2xl:gap-[31%] pt-8 lg:pt-16'>
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

export default Component14
