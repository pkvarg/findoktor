import React from 'react';
import CalcNavbar from '../components/calculator/CalcNavbar';
import { Footer } from '../components';

const CurrentOffer = () => {
  return (
    <div className="relative grid h-[90vh] grid-rows-3 bg-white text-[30px] text-black lg:h-screen">
      <div className="h-[min-content]">
        <CalcNavbar />
      </div>
      <div className="z-10 h-[100%] flex-1">
        <div className="flex flex-col items-center justify-center gap-4 text-[35px] text-[#0076ba]">
          <h1 className="text-center">
            Prejsť na
            <span className="ml-2 uppercase">aktuálnu ponuku</span>
          </h1>

          <div className="rounded-xl bg-[#0076ba] px-4">
            <a
              className=" text-white"
              href="https://modernymakler.sk/nas-tim/michal-dovala/"
              target="_blank"
            >
              kliknite SEM
            </a>
          </div>
        </div>
      </div>
      <div className="z-0 h-[min-content]">
        <Footer />
      </div>
    </div>
  );
};

export default CurrentOffer;
