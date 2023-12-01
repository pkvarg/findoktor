import React, { useState } from 'react';

const Component00 = ({ handleFlatOrHouse }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const phone = '+421944517560';
  const email = 'michaldovala.gmail.com';

  const showContact = (info) => {
    if (info === 'phone') {
      // setShowPhone(phone)
      setShowPhone(true);
      const phoneEl = document.getElementById('phone');
      phoneEl.classList.add('noBorder');
    }
    if (info === 'email') {
      // setShowEmail(email)
      setShowEmail(true);
      const emailEl = document.getElementById('email');

      emailEl.classList.add('noBorder');
    }
  };

  return (
    <div className="mx-4 -mt-[22.5%] flex flex-col justify-center lg:mx-0 lg:-mt-[10%]">
      <p className="pt-2 text-center text-[10px] text-[#0076ba] lg:pt-2 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="pb-2 pt-4 text-center text-[18px] font-bold leading-[17.5px]  lg:text-[30px]">
        <span className="text-red-600">Zvoľte</span> typ Vašej nehnuteľnosti
      </h1>
      <div className="flex flex-row justify-center gap-6 pt-8 lg:gap-8">
        <div
          id="flat"
          onClick={() => handleFlatOrHouse('flat')}
          className="flex h-[160px] w-[120px] flex-col gap-[90px] rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[220px] lg:w-[180px] lg:rounded-[35px]"
        >
          <div>
            <img
              className="ml-[23%] mt-[20%] w-[60%]"
              src="/flat1.webp"
              alt="flat"
            />
            <p className="mt-4 text-center text-[20px] font-extrabold text-[#0076ba] lg:text-[25px]">
              Byt
            </p>
          </div>
        </div>
        <div
          id="house"
          onClick={() => handleFlatOrHouse('house')}
          className="flex h-[160px] w-[120px] flex-col gap-[90px] rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[220px] lg:w-[180px] lg:rounded-[35px]"
        >
          <div>
            <img
              className="ml-[22.5%] mt-[20%] w-[60%]"
              src="/flat2.webp"
              alt="house"
            />
            <p className="mt-4 text-center text-[20px] font-extrabold text-[#0076ba] lg:text-[25px]">
              Dom
            </p>
          </div>
        </div>
      </div>

      <div className="z-9999 relative mt-8 flex flex-col items-center justify-center gap-6 lg:gap-4">
        <p
          id="phone"
          onClick={() => showContact('phone')}
          className="hover-call flex h-[70px] w-[265px] items-center justify-center rounded-[30px] border-2 border-[#0076ba] py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]  lg:w-[385px] lg:rounded-[35px] lg:text-[25px] lg:leading-[29.5px]
          "
        >
          <a className="hover-call-us" href="tel:+421944517560">
            Zavolajte nám
          </a>
          <a className="hover-phone" href="tel:+421944517560">
            {phone}
          </a>
        </p>
        <p
          id="email"
          onClick={() => showContact('email')}
          className="hover-email flex h-[70px] w-[265px] items-center justify-center rounded-[30px] border-2 border-[#0076ba]  py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]  lg:w-[385px] lg:rounded-[35px] lg:text-[25px] lg:leading-[29.5px]"
        >
          <a className="hover-email-us" href="mailto:michaldovala@gmail.com">
            Napíšte nám
          </a>

          <a
            className="hover-email-address"
            href="mailto:michaldovala@gmail.com"
          >
            {email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Component00;
