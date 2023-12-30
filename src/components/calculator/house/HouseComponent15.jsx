import React from 'react';

const HouseComponent15 = ({
  onBack,
  email,
  setEmail,
  checkBox,
  setCheckBox,
  isLoading,
  handleSubmitForm,
}) => {
  return (
    <div className="relative mx-4 flex flex-col lg:mx-[0%]">
      <p className="pt-6 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[27px]">
        Vaša nehnuteľnosť bola <br /> nacenená
      </h1>
      <img
        className="absolute top-[19%] flex w-[17.5%] md:top-[7%] md:w-[12%] lg:left-[0%]  lg:top-[27%] lg:w-[25%]"
        src="/firework.webp"
        alt="firework"
      />
      <img
        className="absolute right-0 top-[19%] flex w-[17.5%] md:top-[7%] md:w-[12%]  lg:right-[0%] lg:top-[27%] lg:w-[25%]"
        src="/firework.webp"
        alt="firework"
      />
      <div className="mt-14 flex flex-col justify-center">
        <label
          htmlFor="text"
          className="relative ml-1 text-[12.5px] text-[#0076ba] lg:text-[12.5px]"
        >
          <span>Ak chcete pokračovať ďalej, zadajte Váš mail:</span>
        </label>
        <div className="relative flex h-[50px] w-[100%] flex-col rounded-lg border-2 border-[#0076ba] lg:h-[55px] lg:rounded-xl">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="absolute top-[32%] h-[50%] w-[93%] text-right text-[17.5px] font-bold outline-none lg:w-[96%]"
            required="required"
          />
          <div className="ml-2 mt-[30%] flex flex-row items-center justify-start md:mt-[12.5%] lg:mt-[22.5%]">
            <input
              className="mr-2 h-[15px] w-[15px]"
              type="checkbox"
              defaultChecked={false}
              value={checkBox}
              onChange={() => setCheckBox((prev) => !prev)}
              required
            />
            <p className="text-[15px] text-[#0076ba]">
              Súhlasím s{' '}
              <a
                className="font-semibold underline"
                href="/rules"
                target="_blank"
              >
                podmienkami
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[40%] flex flex-row justify-between lg:mt-[20%]">
        <button
          onClick={(e) => onBack(e)}
          className="h-10 rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={(e) => handleSubmitForm(e)}
          //type="submit"
          className="h-10 rounded-[35px] border-2 border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-7 lg:py-2 lg:text-[15px]"
        >
          {isLoading ? 'odosielam...' : 'Ďalej'}
        </button>
      </div>
    </div>
  );
};

export default HouseComponent15;
