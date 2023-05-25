import React from 'react'
import { StickyNav } from '../components'

const About = () => {
  return (
    <>
      <StickyNav />
      <div className='bg-[#013bb0] relative pb-[130px]' id='about'>
        <div className='block lg:hidden bg-[#ffffff]'>
          <img
            className='w-[100%] py-8 px-2 '
            src='fn-sf-logo.svg'
            alt='sophistic-pro-finance'
          />
        </div>
        <h1 className='block lg:hidden text-[#ffffff] text-[50px] text-center pt-8'>
          O nás
        </h1>
        <div className='pt-[0%] lg:pt-[5%]'>
          <h1 className='hidden lg:block uppercase text-[#007ad6] text-[30px] text-center'>
            Sme tu pre Vás
          </h1>
          <div className='absolute left-[7.5%] top-[5.5%]'>
            <img
              className='w-0 lg:w-[65%]'
              src='hero-squares.webp'
              alt='fd-squares'
            />
          </div>
          <div className='text-[#ffffff] text-[25px] lg:text-[30px] mt-[15%] lg:mt-[10%]  mx-[5%] lg:mx-[17%] lg:text-justify'>
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
            <div className='flex justify-center lg:justify-end '>
              <button className='text-[25px] text-[#ffffff] font-normal bg-[#007ad7] rounded-[55px] px-12 py-4 mt-8 lg:mt-[9%] hover:border hover-border-white hover:border-[2px] '>
                Bezplatné stretnutie
              </button>
            </div>
          </div>
        </div>
        <div className='mt-[15%] relative'>
          <h1 className='uppercase text-[#007ad6] text-[30px] text-center'>
            Čo o nás hovoria naši klienti
          </h1>
          <div className='absolute left-[7.5%] top-20'>
            <img
              className='w-0 lg:w-[65%]'
              src='hero-squares.webp'
              alt='fd-squares'
            />
          </div>
          {/* review box */}
          <div className='text-[#ffffff] text-[25px] lg:text-[30px] mt-[15%] lg:mt-[10%]  mx-[5%] lg:mx-[17%] flex flex-col justify-end'>
            <div className='flex flex-row justify-end'>
              <p className='translate-y-[60%] lg:translate-y-[80%] text-[#007ad6] mr-4'>
                Lenka R.
              </p>
              <img
                className='w-[50%] lg:w-[20%]'
                src='/review01.png'
                alt='review'
              />
            </div>
            <div className='mt-8 text-[38px] text-end'>
              <h1>
                "Odporúčam každému, kto sa zaujíma o svoje financie a svoju
                budúcnosť.
              </h1>
              <h1>
                Veľmi dobre mi poradili ohľadne 2. piliera, investovania do
                podielových fondov
              </h1>
              <h1>a pravideľne sa mi starajú o moje portfólio."</h1>
            </div>
            <button className='text-[25px] font-normal bg-[#007ad7] rounded-[55px] py-4  mt-16 lg:mt-10 hover:border hover-border-white hover:border-[2px] lg:ml-[75%]'>
              Bezplatné stretnutie
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
