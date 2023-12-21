import React from 'react';
import { lazy, Suspense } from 'react';

import CalcNavbar from '../components/calculator/CalcNavbar';
import { BiSolidPhoneCall } from 'react-icons/bi';
const Footer = lazy(() => import('./../components/Footer'));

const About = () => {
  return (
    <div className="relative flex h-[800px] grid-rows-3 flex-col lg:grid lg:h-screen">
      <div className="h-[min-content]">
        <CalcNavbar />
      </div>
      <div className="z-10 flex h-auto flex-col">
        <div className="absolute top-[7%] w-[100%] lg:top-[9%]">
          <div className="relative h-[165px] bg-[#eaf3f6] lg:h-[180px]">
            <div className="absolute left-2 pt-8 text-[25px] font-bold leading-[22.5px] text-[#1871aa] lg:left-[25%] lg:text-[40px] lg:leading-[40px]">
              <p className="">Nehnuteľnosti</p>
              <p className="text-[#747170]">Financie</p>
              <p className="">Rekonštrukcie</p>
              <div className="my-2 h-[4px] w-[52%] bg-[#1871aa] lg:w-[58%]"></div>
            </div>

            <div className="absolute right-2 top-1 w-auto rounded-full border-[4px] border-[#0376b7] lg:right-[21%] lg:top-4 lg:w-auto lg:border-[5px] xl:right-[22%] 2xl:right-[23%]">
              <img
                className="h-[150px] w-[150px] rounded-full lg:h-[290px] lg:w-[290px]"
                src="about.webp"
                alt="dovala"
              />
            </div>
          </div>
        </div>
        <div className="absolute left-6 top-[30%] lg:left-[25%] lg:top-[37.5%]">
          <p className="text-[17.5px] font-semibold leading-[17.5px] text-[#747170]">
            Pomôžeme Vám vybudovať Váš <br /> vysnívaný
            <span className="ml-1 text-[#1871aa]">domov</span>
          </p>
        </div>

        <div className="absolute left-2 top-[35%] z-10 mx-4 lg:left-[22%] lg:top-[45%] lg:mx-0 2xl:left-[25%]">
          <div className="mr-2 text-justify text-[15px] leading-[18px] lg:mr-0 lg:w-[45%] lg:text-[12.5px] 2xl:w-[40%]">
            <p className="mt-[7.5%] 2xl:mt-[9%]">
              Vitaj - ak hľadáš vysnívaný domov, alebo ťa láka finančná istota,
              som tvoj človek! Som Odborník na sieťovanie v oblasti
              nehnuteľností a financií a na pomoc pri správe a rekonštrukcii
              nehnuteľností.
            </p>
            <p className="mt-2">
              Môj cieľ? Urobiť tvoj život jednoduchším. Či je to
              predaj/kúpa/rekonštrukcia/správa nehnuteľnosti alebo financie, som
              tu, aby som ti to uľahčil. Jednoducho a bez stresu - to je moje
              heslo. Teším sa na to, ako ti pomôžem dosiahnuť to, po čom túžiš!
            </p>

            <p className="mt-2">
              Ako? Nie som na to sám. Mám skvelý tím odborníkov ktorí ti pomôžu
              dosiahnuť tvoje ciele nech už sú akékoľvek. Či potrebuješ
              predajcu, právnika, architekta, alebo stolára - všetko nájdeš u
              mňa!
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
