import React from 'react'
import { StickyNav } from '../components'

const About = () => {
  return (
    <>
      <StickyNav />
      <div className='bg-[#013bb0] relative pb-[130px]' id='about'>
        <div className='pt-[5%]'>
          <h1 className='uppercase text-[#007ad6] text-[30px] text-center'>
            Sme tu pre Vás
          </h1>
          <div className='absolute left-[7.5%] top-[15.5%]'>
            <img
              className='w-0 lg:w-[55%]'
              src='/src/assets/hero-squares.webp'
              alt='fd-squares'
            />
          </div>
          <div className='text-[#ffffff] text-[30px] mt-[20%] mx-[17%] text-justify'>
            <p className=''>
              <span className='font-bold'>V Sophistic Pro finance</span> sme,
              vďaka zázemiu a dlhoročným skúsenostiam v oblasti poskytovania
              finančných služieb, pripravení ušiť klientom na mieru riešenie pre
              dosiahnutie ich krátkodobých a dlhodobých cieľov. Kladieme dôraz
              na to, aby nami navrhované riešenia boli jednoduché a pre klienta
              zrozumiteľné, od čoho sa odvíja stručnosť a ľahká pochopiteľnosť
              samotnej prezentácie spomínaných riešení.
            </p>
            <p className='mt-8'>
              V rámci individuálneho prístupu ku každému klientovi zohľadňujeme
              predovšetkým ciele definované klientom. Táto stratégia je
              stanovená a odsúhlasená klientom pred samotným začatím
              spostredkovania finančných služieb. Dbáme na diskrétnosť
              poskytovaných informácií a prihliadame na individuálne požiadavky
              zo strany klienta.
            </p>
            <p className='mt-8'>
              Filozofiu a hlavnú myšlienku spoločnosti umocňuje a jednoznačne
              dopĺňa jej................
            </p>
            <button className='text-[25px] font-normal absolute right-[16%] bg-[#007ad7] rounded-[55px] px-12 py-4 mt-8 lg:mt-8 hover:border hover-border-white hover:border-[2px]'>
              Bezplatné stretnutie
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
