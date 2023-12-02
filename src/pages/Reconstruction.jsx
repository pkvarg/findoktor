import React from 'react';
import CalcNavbar from '../components/calculator/CalcNavbar';
import { Footer } from '../components';
import { MdEuro } from 'react-icons/md';
import { FaPerson } from 'react-icons/fa6';
import { FaSmile } from 'react-icons/fa';
import { RiRunLine } from 'react-icons/ri';

const Reconstruction = () => {
  return (
    <div className="relative flex h-[1050px]  grid-rows-3 flex-col  lg:grid lg:h-screen">
      <div className="h-[min-content]">
        <CalcNavbar />
      </div>
      <div className="z-10 h-auto flex-1 lg:h-[100%]">
        <div className="mt-12 text-[30px]  font-extrabold leading-[30px] text-[#050003] lg:-mt-[10%] 2xl:-mt-[7%]">
          <div className="ml-4 flex justify-start lg:ml-[22%] xl:ml-[24%] 2xl:ml-[32%]">
            <p>
              Snívate o tom, že Váš domov bude vyzerať <br />
              <span className="mr-2 text-[#1871aa]">štýlovo</span>a
              <span className="ml-2 mr-1 text-[#1871aa]">elegatne</span>?
            </p>
          </div>
          <div className="mt-16 flex flex-col justify-center gap-6 text-[22.5px] lg:flex-row lg:text-[25px]">
            <div className="ml-2 flex flex-col items-start gap-4 lg:ml-[22%]">
              <div className="flex flex-row items-center gap-2 lg:gap-6">
                <MdEuro className="text-[35px]" />

                <p className="font-bold text-[#1871aa]">
                  Bezplatná cenová ponuka
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 lg:gap-6">
                <FaPerson className="text-[35px]" />
                <p className="font-bold text-[#1871aa]">Individuálny prístup</p>
              </div>
              <div className="flex flex-row items-center gap-3 lg:gap-6">
                <FaSmile className="text-[35px]" />
                <p className="font-bold leading-[45px] text-[#1871aa]">
                  Zaručujeme 100% spokojnosť
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 lg:gap-6">
                <RiRunLine className="text-[35px]" />
                <p className="font-bold text-[#1871aa]">Rýchla reakcia</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center lg:mt-0 lg:justify-start">
              <img
                className="w-[75%] lg:w-[50%]"
                src="reconstruction.webp"
                alt="kvalitnamontaz.sk"
              />
            </div>
          </div>
          <p className="mx-4 mt-8 text-center text-[12.5px] leading-[17.5px] lg:mx-0">
            <span className="mr-2 text-red-400">*</span>
            službu poskytujeme výhradne v Bratislave a blízkom okolí, pre viac
            informácií nás kontaktujte{' '}
          </p>
          <div className="z-9999 relative mt-8 flex flex-col items-center justify-center gap-6 lg:mt-16 lg:flex-row lg:gap-4">
            <p
              id="phone"
              className="hover-call flex h-[70px] w-[265px] items-center justify-center rounded-[30px] border-2 border-[#0076ba] py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]  lg:w-[255px] lg:rounded-[30px] lg:text-[25px] lg:leading-[29.5px]
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
              className="hover-email flex h-[70px] w-[265px] items-center justify-center rounded-[30px] border-2 border-[#0076ba]  py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]  lg:w-[255px] lg:rounded-[30px] lg:text-[25px] lg:leading-[29.5px]"
            >
              <a
                className="hover-email-us"
                href="mailto:michaldovala@gmail.com"
              >
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
      </div>
      <div className="z-0 h-[min-content]">
        <Footer />
      </div>
    </div>
  );
};

export default Reconstruction;
