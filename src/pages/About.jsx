import React from 'react';
import { lazy, Suspense } from 'react';

import CalcNavbar from '../components/calculator/CalcNavbar';
import { BiSolidPhoneCall } from 'react-icons/bi';
const Footer = lazy(() => import('./../components/Footer'));

const About = () => {
  return (
    <div className="relative flex h-[1200px]  grid-rows-3 flex-col  lg:grid lg:h-screen">
      <div className="h-[min-content]">
        <CalcNavbar />
      </div>
      <div className="z-10 h-auto flex-1 lg:h-[100%]">
        <div className="relative mt-2 h-[165px] bg-[#eaf3f6] lg:-mt-[13.5%] lg:h-[180px] xl:-mt-[11.5%] 2xl:-mt-[12%]">
          <div className="mx-1 flex flex-col justify-center gap-0 pt-[3%] lg:mx-0 lg:flex-row lg:gap-[20%] xl:gap-[20%] 2xl:gap-[28%]">
            <div className="">
              <div className="ml-1 mt-6 text-[25px] font-semibold leading-[22.5px] text-[#1871aa] lg:-mt-4 lg:ml-0 lg:text-[30px] lg:leading-[30px]">
                <p className="">Nehnuteľnosti</p>
                <p className="text-[#747170]">Financie</p>
                <p className="">Rekonštrukcie</p>
                <div className="my-2 h-[4px] w-[42%] bg-[#1871aa] lg:w-[102%]"></div>
                <p className="text-[17.5px] leading-[17.5px] text-[#747170]">
                  Pomôžeme Vám vybudovať Váš <br /> vysnívaný
                  <span className="ml-1 text-[#1871aa]">domov</span>
                </p>
              </div>
            </div>
            <div className="absolute right-2 top-7 w-auto rounded-full border-[4px] border-[#0376b7] lg:relative  lg:-mt-[70px] lg:w-auto lg:border-[5px]">
              <img
                className="h-[110px] w-[110px] rounded-full lg:h-[190px] lg:w-[190px]"
                src="about.webp"
                alt="dovala"
              />
            </div>
          </div>
        </div>
        <div className="mx-[22%] mt-[45%] hidden gap-12 lg:mt-12 lg:flex lg:flex-row 2xl:mx-[24%] 2xl:mt-32">
          <div>
            <p
              id="phone"
              onClick={() => showContact('phone')}
              className="flex w-max flex-col items-start gap-2 rounded-[30px] border-[3px] border-[#0076ba] px-4 py-4 text-[20px]  font-bold leading-[20px] text-[#0076ba] lg:rounded-[15px] lg:text-[25px] lg:leading-[29.5px]
          "
            >
              <a className="" href="tel:+421944517560">
                Zavolajte nám:
              </a>
              <div className="flex flex-row items-center gap-2">
                <BiSolidPhoneCall />
                <a className="text-[20px]" href="tel:+421944517560">
                  +421 944 517 560
                </a>
              </div>
            </p>
          </div>
          <div className="ml-6 mr-6 text-justify text-[15px] leading-[15px] text-[#445862] lg:ml-0 lg:mr-0">
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

        {/* mobile only */}

        <div className="mx-2 flex flex-col gap-12 lg:hidden">
          <div className="mt-4 text-justify text-[20px] leading-[20px] text-[#445862]">
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

          <div className="flex justify-center">
            <p
              id="phone"
              onClick={() => showContact('phone')}
              className="flex w-max flex-col items-center gap-2 rounded-[30px] border-[3px] border-[#0076ba] px-16 py-4 text-[20px] font-bold leading-[20px]  text-[#0076ba] 
          "
            >
              <a className="" href="tel:+421944517560">
                Zavolajte nám:
              </a>
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
    </div>
  );
};

export default About;
