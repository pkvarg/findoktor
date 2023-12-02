import React from 'react';
import CalcNavbar from '../components/calculator/CalcNavbar';
import { Footer } from '../components';

const OurServices = () => {
  return (
    <div className="relative flex h-[1750px]  grid-rows-3 flex-col  lg:grid lg:h-screen">
      <div className="h-[min-content]">
        <CalcNavbar />
      </div>
      <div className="z-10 h-auto flex-1 lg:h-[100%]">
        <div className="mt-6 flex flex-col items-start justify-center gap-10 lg:-mt-[10%] lg:flex-row lg:items-center 2xl:-mt-[7%]">
          <div className="realsluzby px-14 py-8 text-[20px] uppercase text-white lg:px-4">
            <p className="mt-8 font-extrabold lg:mt-6">
              Realitné služby, ktoré{' '}
            </p>
            <p className="font-thin">sa prispôsobia Vašim</p>
            <p className="font-thin">potrebám</p>
          </div>
          <div className="ml-4 flex flex-col items-start justify-center font-light lg:ml-0">
            <img
              className="-ml-[12px] h-[50px] w-[50px]"
              src="Predaj.webp"
              alt="sale"
            />
            <p className="text-[22.5px] font-semibold lg:text-[16.5px]">
              Predaj nehnuteľnosti
            </p>
            <div className="hidden leading-[16px] lg:inline lg:text-[15px]">
              <p className="mt-1">S nami môžete mať istotu,</p>
              <p>že Vaša nehnuteľnosť</p>
              <p>bude predaná za najvýhodnejšiu</p>
              <p>cenu na trhu.</p>
            </div>
            <div className="inline text-[18px]  leading-[19px] lg:hidden ">
              <p className="mt-1">S nami môžete mať istotu,</p>
              <p>že Vaša nehnuteľnosť bude predaná</p>
              <p> za najvýhodnejšiu cenu na trhu.</p>
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start justify-center font-light lg:ml-0">
            <img
              className="-ml-[12px] h-[50px] w-[50px]"
              src="Prenajom.webp"
              alt="sale"
            />
            <p className="text-[22.5px] font-semibold lg:text-[16.5px]">
              Prenájom nehnuteľnosti
            </p>

            <div className="hidden text-[15px] leading-[16px] lg:inline">
              <p className="mt-1">Pomôžeme Vám nájsť tých</p>
              <p>správnych nájomcov</p>
              <p>na krátkodobý</p>
              <p>alebo dlhodobý prenájom.</p>
            </div>
            <div className="inline text-[18px] leading-[19px] lg:hidden">
              <p className="mt-1">Pomôžeme Vám nájsť tých</p>
              <p>správnych nájomcov na krátkodobý</p>
              <p>alebo dlhodobý prenájom.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 hidden flex-col items-start justify-center gap-10 lg:flex lg:flex-row lg:items-center lg:gap-14">
          <div className="ml-4 flex flex-col items-start justify-center font-light lg:ml-4">
            <img
              className="-ml-[12px] h-[50px] w-[50px]"
              src="Property.webp"
              alt="sale"
            />
            <p className="text-[16.5px] font-semibold">Property management</p>

            <div className="text-[15px] leading-[16px]">
              <p className="mt-1">Ušetrite čas pri správe </p>
              <p>svojho nájmu. Riešenie </p>
              <p>problémov nechajte </p>
              <p>na nás.</p>
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start justify-center font-light lg:ml-0">
            <img
              className="-ml-[12px] h-[50px] w-[50px]"
              src="Agent.webp"
              alt="sale"
            />
            <p className="text-[16.5px] font-semibold">Agent kupujúceho</p>

            <div className="text-[15px] leading-[16px]">
              <p className="mt-1">Maklér vždy po boku.</p>
              <p>Vyberieme poradíme, </p>
              <p>prevedieme Vás celým</p>
              <p>procesom až po kúpu.</p>
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start justify-center font-light lg:ml-0">
            <img
              className="-ml-[12px] h-[50px] w-[50px]"
              src="Inziniering.webp"
              alt="sale"
            />
            <p className="text-[16.5px] font-semibold">Inžiniering</p>
            <div className="text-[15px] leading-[16px]">
              <p className="mt-1">Všetky povolenia </p>
              <p>súvisiace so</p>
              <p>stavbou domu </p>
              <p>vybavíme za Vás.</p>
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start justify-center font-light lg:ml-0">
            <img
              className="-ml-[12px] h-[50px] w-[50px]"
              src="Legalizacia.webp"
              alt="sale"
            />
            <p className="text-[16.5px] font-semibold">Legalizácia stavieb</p>

            <div className="text-[15px] leading-[16px]">
              <p className="mt-1">Zameriavame sa </p>
              <p>na pomoc pri usporiadaní</p>
              <p>vlastníctva a zápis stavieb </p>
              <p>do katastra nehnuteľností.</p>
            </div>
          </div>
        </div>

        {/* mobile only */}

        <div className="mt-12 flex flex-col items-start justify-center gap-10 lg:hidden">
          <div className="ml-4 flex flex-col items-start justify-center font-light lg:ml-4">
            <img
              className="-ml-[12px] h-[50px] w-[50px]"
              src="Property.webp"
              alt="sale"
            />
            <p className="text-[22.5px] font-semibold">Property management</p>

            <div className="text-[18px] leading-[19px]">
              <p className="mt-1">Ušetrite čas pri správe svojho nájmu.</p>
              <p> Riešenie problémov nechajte na nás.</p>
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start justify-center font-light">
            <img
              className="-ml-[12px] h-[50px] w-[50px]"
              src="Agent.webp"
              alt="sale"
            />
            <p className="text-[22.5px] font-semibold">Agent kupujúceho</p>

            <div className="text-[18px] leading-[19px]">
              <p className="mt-1">Maklér vždy po boku.</p>
              <p>Vyberieme poradíme, prevedieme Vás</p>
              <p>celým procesom až po kúpu.</p>
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start justify-center font-light">
            <img
              className="-ml-[12px] h-[50px] w-[50px]"
              src="Inziniering.webp"
              alt="sale"
            />
            <p className="text-[22.5px] font-semibold">Inžiniering</p>
            <div className="text-[18px] leading-[19px]">
              <p className="mt-1">Všetky povolenia súvisiace</p>
              <p>so stavbou domu vybavíme za Vás.</p>
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start justify-center font-light lg:ml-0">
            <img
              className="-ml-[12px] h-[50px] w-[50px]"
              src="Legalizacia.webp"
              alt="sale"
            />
            <p className="text-[22.5px] font-semibold">Legalizácia stavieb</p>

            <div className="text-[18px] leading-[19px]">
              <p className="mt-1">Zameriavame sa na pomoc </p>
              <p> pri usporiadaní vlastníctva a zápis</p>
              <p> stavieb do katastra nehnuteľností.</p>
            </div>
          </div>
        </div>

        <div className="z-9999 relative mt-14 flex flex-col items-center justify-center gap-6 lg:mt-8 lg:gap-4">
          <p
            id="phone"
            onClick={() => showContact('phone')}
            className="hover-call flex h-[70px] w-[265px] items-center justify-center rounded-[30px] border border-[#0076ba] py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]  lg:w-[285px] lg:rounded-[25px] lg:text-[22.5px] lg:leading-[29.5px]
          "
          >
            <a className="hover-call-us" href="tel:+421944517560">
              Zavolajte nám
            </a>
            <a className="hover-phone" href="tel:+421944517560">
              +421944517560
            </a>
          </p>
          <p
            id="email"
            onClick={() => showContact('email')}
            className="hover-email flex h-[70px] w-[265px] items-center justify-center rounded-[30px] border border-[#0076ba]  py-2 text-center text-[20px] font-extrabold leading-[22.5px] text-[#0076ba]  lg:w-[285px] lg:rounded-[25px] lg:text-[25px] lg:leading-[29.5px]"
          >
            <a className="hover-email-us" href="mailto:michaldovala@gmail.com">
              Napíšte nám
            </a>

            <a
              className="hover-email-address-reconstruction"
              href="mailto:michaldovala@gmail.com"
            >
              michaldovala@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="z-0 h-[min-content]">
        <Footer />
      </div>
    </div>
  );
};

export default OurServices;
