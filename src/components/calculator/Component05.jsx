import React, { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';

const Component05 = ({ onBack, onNext, allFloorsCount, setAllFloorsCount }) => {
  const inputRef = useRef(null);

  const onNextGuard = () => {
    if (
      allFloorsCount <= 0 ||
      allFloorsCount > 99 ||
      allFloorsCount === undefined
    ) {
      toast.error('Zadajte počet poschodí');
      return;
    } else {
      onNext();
    }
  };

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div className="relative mx-4 flex flex-col lg:mx-[20%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[25px]">
        Koľko poschodí má budova v ktorej sa nachádza byt?
      </h1>
      <div className="mt-0 flex flex-row justify-center">
        <div className="relative mt-4 flex h-[50px] w-[100%] flex-col rounded-lg border border-[#0076ba] lg:h-[55px] lg:rounded-xl">
          <label
            htmlFor="text"
            className="relative z-10 ml-2 text-[12.5px] text-[#0076ba] lg:text-[15px]"
          >
            <span>Počet poschodí v budove</span>
          </label>
          <input
            type="number"
            value={allFloorsCount === 0 ? '' : allFloorsCount}
            onChange={(e) => setAllFloorsCount(e.target.value)}
            className="absolute right-3 top-[24%] z-0 w-[50%] text-right text-[22.5px]  font-bold outline-none lg:top-[24%] lg:text-[25px]"
            ref={inputRef}
          />
        </div>
      </div>
      <div className="mt-[20%] flex flex-row justify-between">
        <button
          onClick={onBack}
          className="h-10 rounded-[35px] border border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={() => onNextGuard()}
          className="h-10 rounded-[35px] border border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-7 lg:py-2 lg:text-[15px]"
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default Component05;
