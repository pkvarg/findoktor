import React from 'react';
import { toast } from 'react-hot-toast';

const HouseComponent11 = ({
  onBack,
  onNext,
  hasThermostat,
  hasAlarm,
  hasFireAlarm,
  hasSolarCollectors,
  hasCameraSystem,
  hasInternet,
  setHasThermostat,
  setHasAlarm,
  setHasFireAlarm,
  setHasSolarCollectors,
  setHasCameraSystem,
  setHasInternet,
}) => {
  const onNextGuard = () => {
    if (
      hasThermostat === false &&
      hasAlarm === false &&
      hasFireAlarm === false &&
      hasSolarCollectors === false &&
      hasCameraSystem === false &&
      hasInternet === false
    ) {
      toast.success('Zvolili ste bez uvedenia prvkov');
      setTimeout(onNext, 2000);
    } else onNext();
  };
  return (
    <div className="relative mx-4 flex flex-col lg:mx-[5%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[25px] ">
        Má dom prvky inteligentnej domácnosti?
      </h1>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4">
        {' '}
        <div
          id="thermostat"
          onClick={() => setHasThermostat((prev) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[19%] mt-[10%] w-[70%]"
              src="/smart1.webp"
              alt="termostat"
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Inteligentný <br /> termostat
            </p>
          </div>
        </div>
        <div
          id="alarm"
          onClick={() => setHasAlarm((prev) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[12%] mt-[10.5%] w-[40%]"
              src="/smart3.webp"
              alt="security"
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Alarm
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4 ">
        <div
          id="firealarm"
          onClick={() => setHasFireAlarm((prev) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[12%] mt-[10.5%] w-[40%]"
              src="/smart3.webp"
              alt="security"
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Požiarny hlásič
            </p>
          </div>
        </div>

        <div
          id="solarcollectors"
          onClick={() => setHasSolarCollectors((prev) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[12%] mt-[10.5%] w-[40%]"
              src="/smart3.webp"
              alt="security"
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Solárne kolektory
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4">
        <div
          id="camerasystem"
          onClick={() => setHasCameraSystem((prev) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[15%] mt-[10%] w-[50%]"
              src="/smart4.webp"
              alt="aircon"
            />

            <p className="absolute bottom-2 right-2 text-right text-[12.5px] font-bold leading-[12.5px]">
              Kamerový systém
            </p>
          </div>
        </div>

        <div
          id="internet"
          onClick={() => setHasInternet((prev) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[25%] mt-[10%] w-[53%]"
              src="/smart2.webp"
              alt="internet"
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Internet
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 pt-4 lg:pt-8">
        {' '}
        <button
          onClick={onBack}
          className="h-10 w-[125px] rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={() => onNextGuard()}
          className="h-10 w-[125px] rounded-[35px] border-2 border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-7 lg:py-2 lg:text-[15px]"
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default HouseComponent11;
