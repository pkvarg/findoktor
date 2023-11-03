import React from 'react'

const Component14 = ({ onBack, onNext, handleUrbanQuality }) => {
  return (
    <>
      <p className='text-[#0076ba] text-center text-[25px] pt-8'>
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className='text-center font-bold pt-4 pb-8'>
        Aká je občianska vybavenosť v danej lokalite?
      </h1>
      <div className='flex flex-row justify-center'>
        <div
          id='excellent'
          onClick={() => handleUrbanQuality('excellent')}
          className='border-2 border-[#0076ba] px-2 rounded-[35px] w-[50%] h-[225px] flex flex-col'
        >
          <p className='leading-[30px] text-[25px] font-semibold text-justify mx-2 mt-2'>
            Lokalita patrí k najlepším v meste. Nachádza sa v samotnom centre
            mesta – Staré Mesto, Koliba, nový Downtown. Lokalitu preferuje
            bonitnejšia časť populácie.
          </p>
          <div className='flex flex-row justify-between items-center mt-4 mx-4'>
            <p className='text-[50px]'>⭐️⭐️⭐️</p>
            <p className='text-[#0076ba] text-[35px] font-bold'>výborná</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-4'>
        <div
          id='average'
          onClick={() => handleUrbanQuality('average')}
          className='border-2 border-[#0076ba] px-2 rounded-[35px] w-[50%] h-[225px] flex flex-col'
        >
          <p className='leading-[30px] text-[25px] font-semibold text-justify mx-2 mt-2'>
            Lokalita sa nachádza ďalej od centra mesta. Charakterizuje ju dobrá
            občianska vybavenosť (školy, škôlky, kaviarne, reštaurácie, MHD).
            Lokalitu preferuje stredná vrstva populácie.
          </p>
          <div className='flex flex-row justify-between items-center mt-4 mx-4'>
            <p className='text-[50px]'>⭐️⭐️</p>
            <p className='text-[#0076ba] text-[35px] font-bold'>priemerná</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center mt-4'>
        <div
          id='poor'
          onClick={() => handleUrbanQuality('poor')}
          className='border-2 border-[#0076ba] px-2 rounded-[35px] w-[50%] h-[225px] flex flex-col'
        >
          <p className='leading-[30px] text-[25px] font-semibold text-justify mx-2 mt-2'>
            Lokalita patrí k najmenej rozvinutým v meste. Nachádza sa na okraji
            mesta, alebo v blízkosti industriálnej zóny. Preferuje ju primárne
            menej solventná časť populácie.
          </p>
          <div className='flex flex-row justify-between items-center mt-4 mx-4'>
            <p className='text-[50px]'>⭐️</p>
            <p className='text-[#0076ba] text-[35px] font-bold'>slabšia</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center gap-[25%] lg:gap-[23%] 2xl:gap-[31%] py-16'>
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
    </>
  )
}

export default Component14
