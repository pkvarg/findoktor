import React from 'react';
import { lazy, Suspense } from 'react';

import CalcNavbar from '../components/calculator/CalcNavbar';
import { BiSolidPhoneCall } from 'react-icons/bi';
const Footer = lazy(() => import('./../components/Footer'));

const About = () => {
  return (
    <div className="relative flex h-[1100px] grid-rows-3 flex-col lg:grid lg:h-screen">
      <div className="h-[min-content]">
        <CalcNavbar />
      </div>
      <div className="z-10 flex h-auto flex-col">
        <div className="absolute top-[5%] w-[100%] lg:top-[9%]">
          <div className="relative h-[165px] bg-[#eaf3f6] lg:h-[180px]">
            <div className="absolute left-2 pt-8 text-[25px] font-bold leading-[22.5px] text-[#1871aa] lg:left-[25%] lg:text-[40px] lg:leading-[40px]">
              <p className="">Nehnuteľnosti</p>
              <p className="text-[#747170]">Financie</p>
              <p className="">Rekonštrukcie</p>
              <div className="my-2 h-[4px] w-[52%] bg-[#1871aa] lg:w-[58%]"></div>
            </div>

            <div className="absolute right-2 top-1 w-auto rounded-full border-[4px] border-[#0376b7] lg:right-[21%] lg:top-4 lg:w-auto lg:border-[5px]">
              <img
                className="h-[150px] w-[150px] rounded-full lg:h-[290px] lg:w-[290px]"
                src="about.webp"
                alt="dovala"
              />
            </div>
          </div>
        </div>
        <div className="absolute left-2 top-[22.5%] lg:left-[25%] lg:top-[37.5%]">
          <p className="text-[17.5px] font-semibold leading-[17.5px] text-[#747170]">
            Pomôžeme Vám vybudovať Váš <br /> vysnívaný
            <span className="ml-1 text-[#1871aa]">domov</span>
          </p>
        </div>

        <div className="absolute left-2 top-[27.5%] z-10 lg:left-[22%] lg:top-[45%] 2xl:left-[23%]">
          <div className="mr-2 text-justify text-[15px] leading-[18px] text-[#445862] lg:mr-0 lg:w-[45%] lg:text-[12.5px]">
            <p>
              Kúpa alebo predaj nehnuteľnosti je jedno z najdôležitejších
              rozhodnutí vo Vašom živote. Je to náročný a pomerne zložitý
              proces, v ktorom číha nejedna nástraha. Práve preto je dobré mať
              na svojej strane partnera, na koho sa môžete spoľahnúť za každých
              okolností. Práve toto poskytujem svojim klientom.
            </p>
            <p className="mt-2">
              K realitám som mal vždy blízko, mojim hobby je totiž architektúra
              a dizajn. Navyše ma baví práca s ľuďmi a networking.
            </p>

            <p className="mt-2">
              Realitný maklér je niekto, kto Vás počas celého procesu zastupuje.
              Je to niekto, kto dokonale pozná Vaše potreby a požiadavky a
              pomáha Vám si splniť Váš sen o vysnívanom bývaní. A presne takýto
              Moderný maklér chcem byť pre Vás.
            </p>
            <p className="mt-2">
              Klientom poskytujem počas celej doby spolupráce komplexnú
              starostlivosť, profesionalitu, lojalitu a dlhodobú víziu. Každý
              klient dostane exkluzívnu starostlivosť.
            </p>
            <p className="mt-2">
              Práca s ľuďmi ma naučila, aké dôležité je budovať priateľstvo a
              férové partnerstvo s klientom. Práve preto sa sústredím na
              budovanie vzájomnej dôvery a poskytujem svojim klientom komplexné
              služby, či už sa jedná o financovanie a poistenie nehnuteľností,
              ich predaj či nákup, rekonštrukcie alebo prenájom. Všetko
              dostanete na jednom mieste.
            </p>
          </div>
        </div>

        <div className="absolute right-[23%] top-[80%] lg:top-[60%]">
          <p
            id="phone"
            onClick={() => showContact('phone')}
            className="flex w-max flex-col items-center gap-2 rounded-[30px] border-[3px] border-[#0076ba] px-4 py-4 text-[20px]  font-bold leading-[20px] text-[#0076ba] lg:rounded-[15px] lg:text-[25px] lg:leading-[29.5px]
          "
          >
            <a href="tel:+421944517560">Zavolajte nám</a>
            <div className="flex flex-row items-center gap-2">
              <BiSolidPhoneCall />
              <a className="text-[20px]" href="tel:+421944517560">
                +421 944 517 560
              </a>
            </div>
          </p>
        </div>
      </div>
      <div className="z-0 h-[min-content]">
        <Footer />
      </div>
    </div>
  );
};

export default About;
