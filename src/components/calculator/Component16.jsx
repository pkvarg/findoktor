import React from 'react';

const Component16 = ({
  onBack,
  withoutRealEstateAssistance,
  withRealEstateAssistance,
}) => {
  const phone = '+421944517560';
  const email = 'michaldovala.gmail.com';

  return (
    <div className="w relative mx-4 -mt-[30%] flex flex-col md:mx-[20%] md:-mt-[20%] lg:mx-[40%] lg:-mt-[10%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[25px]">
        Odhadovaná cena Vašej <br /> nehnuteľnosti je:
      </h1>

      <div className="mt-2 flex flex-col justify-center">
        <div className="relative flex h-[50px] flex-col rounded-lg border-2 border-[#0076ba] lg:h-[55px] lg:rounded-xl">
          <p className="translate-y-[30%] text-center text-[25px] font-bold text-[#ff010f]">
            {withoutRealEstateAssistance} €
          </p>

          <p className=" absolute  left-2 top-14 text-[12.5px] text-[#0076ba]">
            *cena bez služieb Realitnej kancelárie
          </p>
        </div>
        <div className="relative mt-8 flex h-[50px] w-[100%] flex-col rounded-lg border-2 border-[#0076ba] lg:h-[55px] lg:rounded-xl">
          <p className="translate-y-[30%] text-center text-[25px] font-bold text-[#ff010f]">
            {withRealEstateAssistance} €
          </p>

          <p className="absolute left-2 top-[125%] text-[12.5px] leading-[12.5px] text-[#0076ba] lg:top-[112%]">
            *cena po odrátaní služieb Realitnej kancelárie
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 lg:gap-4">
          <p
            id="phone"
            onClick={() => showContact('phone')}
            className="hover-call w-[100%] rounded-[20px] border border-[#0076ba] py-2 text-center text-[20px] font-bold leading-[20px] text-[#0076ba] lg:rounded-xl lg:text-[20px] lg:leading-[29.5px]"
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
            className="hover-email w-[100%] rounded-[20px] border border-[#0076ba]  py-2 text-center text-[20px] font-bold leading-[20px] text-[#0076ba] lg:rounded-xl lg:text-[20px]  lg:leading-[29.5px]"
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

      <button
        onClick={onBack}
        className="mt-16 w-[90%] rounded-[35px] border border-[#0076ba] px-1 py-2 text-[15px]  font-bold uppercase hover:border-2 hover:border-[#03065f] lg:mt-8"
      >
        Späť (pôjde čoskoro preč 😀)
      </button>
    </div>
  );
};

export default Component16;
