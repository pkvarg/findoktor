import React from 'react'
import { lazy, Suspense } from 'react'

import CalcNavbar from '../components/calculator/CalcNavbar'
import { TfiMapAlt } from 'react-icons/tfi'
import { TfiEmail } from 'react-icons/tfi'
import { FiPhone } from 'react-icons/fi'
const Footer = lazy(() => import('./../components/Footer'))

const About = () => {
  return (
    <>
      <CalcNavbar />
      <div className=''>
        <div className='relative bg-[#eaf3f6] mt-2 h-[350px] lg:h-[300px]'>
          <div className='mt-8 absolute left-[6.25%] top-12'>
            <p className='bg-[#0076b7] w-max text-[#ffffff] text-[18px] px-6 py-1'>
              Moderný maklér
            </p>
            <p className='text-[#0376b7] text-[40px] mt-4'>MICHAL DOVALA</p>
            <p className='text-[#0376b7] text-[20px]'>
              Realitný sprostredkovateľ
            </p>
          </div>
          <div className='mt-4 w-[65%] lg:w-[25%] absolute right-[30.5%] lg:right-[12.5%] top-[70%] lg:top-12'>
            <img
              className='max-w-[155%] h-[225px] lg:h-[300px]'
              src='dovala1.webp'
              alt='dovala'
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-center gap-12 mt-[45%] lg:mt-24'>
          <div className='flex flex-col gap-6 border-4 border-[#eaf3f6] pl-6 lg:pl-12 pr-0 lg:pr-24 pt-10 pb-10 h-max ml-4 lg:ml-[6.25%] mr-4 lg:mr-0'>
            <div>
              <div className='flex flex-row gap-4 items-center'>
                <TfiMapAlt className='text-[30px] text-[#0376b7]' />
                <p className='text-[#232528] text-[20px]'>Lokalita</p>
              </div>
              <p className='text-[#707f87] text-[14px] ml-[14.5%] lg:ml-[22%]'>
                Bratislava a okolie
              </p>
            </div>
            <div>
              <div className='flex flex-row gap-4 items-center'>
                <TfiEmail className='text-[30px] text-[#0376b7]' />
                <p className='text-[#232528] text-[20px]'>E-mail</p>
              </div>

              <p className='text-[#707f87] text-[14px] ml-[14.5%] lg:ml-[22%]'>
                michal.dovala@modernymakler.sk
              </p>
            </div>
            <div>
              <div className='flex flex-row gap-4 items-center'>
                <FiPhone className='text-[30px] text-[#0376b7]' />
                <p className='text-[#232528] text-[20px]'>Telefón</p>
              </div>
              <p className='text-[#707f87] text-[14px] ml-[14.5%] lg:ml-[22%]'>
                +421 944 517 560
              </p>
            </div>
          </div>
          <div className='text-[#445862] text-[16px] -mt-6 lg:mt-6 tracking-wide ml-6 lg:ml-0 mr-6 lg:mr-[6%] text-justify leading-8'>
            <p>
              Kúpa alebo predaj nehnuteľnosti je jedno z najdôležitejších
              rozhodnutí vo Vašom živote. Je to náročný a pomerne zložitý
              proces, v ktorom číha nejedna nástraha. Práve preto je dobré mať
              na svojej strane partnera, na koho sa môžete spoľahnúť za každých
              okolností. Práve toto poskytujem svojim klientom.
            </p>
            <p className='mt-4'>
              K realitám som mal vždy blízko, mojim hobby je totiž architektúra
              a dizajn. Navyše ma baví práca s ľuďmi a networking.
            </p>

            <p className='mt-4'>
              Realitný maklér je niekto, kto Vás počas celého procesu zastupuje.
              Je to niekto, kto dokonale pozná Vaše potreby a požiadavky a
              pomáha Vám si splniť Váš sen o vysnívanom bývaní. A presne takýto
              Moderný maklér chcem byť pre Vás.
            </p>
            <p className='mt-4'>
              Klientom poskytujem počas celej doby spolupráce komplexnú
              starostlivosť, profesionalitu, lojalitu a dlhodobú víziu. Každý
              klient dostane exkluzívnu starostlivosť.
            </p>
            <p className='mt-4'>
              Práca s ľuďmi ma naučila, aké dôležité je budovať priateľstvo a
              férové partnerstvo s klientom. Práve preto sa sústredím na
              budovanie vzájomnej dôvery a poskytujem svojim klientom komplexné
              služby, či už sa jedná o financovanie a poistenie nehnuteľností,
              ich predaj či nákup, rekonštrukcie alebo prenájom. Všetko
              dostanete na jedno mieste.
            </p>
          </div>
        </div>
        <div className='relative mt-4 h-[50px]'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default About
