import React, { useEffect, useState, useRef } from 'react';
import streetAndDistrict from './../../../../Json/streetAndDistrict.json';
import { toast } from 'react-hot-toast';

const HouseComponent01 = ({
  onNext,
  onBack,
  city,
  setCity,
  street,
  setStreet,
  houseNumber,
  setHouseNumber,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = React.createRef();

  const setSearchAndStreet = (input) => {
    setSearchTerm(input);
    setStreet(input);
  };

  // Filter streetAndDistrict based on the search term

  const filteredStreets = streetAndDistrict
    .filter((option) =>
      option.street.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .map((option) => option.street);

  console.log('filtered', filteredStreets[0] === searchTerm);
  const [hideStreetDropdown, setHideStreetDropdown] = useState(
    filteredStreets[0] === searchTerm,
  );

  const onNextGuard = () => {
    if (street === '' || street === undefined) {
      toast.error('Zvoľte ulicu');
      return;
    }
    if (houseNumber === '') {
      toast.error('Zadajte číslo');
      return;
    } else {
      onNext();
    }
  };

  return (
    <div className="relative mx-4 flex flex-col md:mx-[20%] lg:mx-[10%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[30px] lg:py-2 lg:text-[30px]">
        Kde sa nachádza Vaša nehnuteľnosť?
      </h1>
      <div className="relative mt-4 flex h-[50px] flex-col rounded-lg border border-[#0076ba] lg:h-[50px] lg:rounded-xl">
        <label
          htmlFor="text"
          className="relative text-[15px] text-[#0076ba] lg:text-[18px]"
        >
          <span className="absolute -top-[0px] left-[10px]">Mesto</span>
        </label>
        <input
          type="text"
          value={city}
          onChange={() => {}}
          className="absolute right-3 top-5 text-right text-[15px] font-bold outline-none lg:top-4 lg:w-[70%] lg:text-[20px]"
        />
      </div>
      <div className="relative mt-4 flex h-[50px] flex-col rounded-lg border border-[#0076ba] lg:h-[50px] lg:rounded-xl">
        <label
          htmlFor="text"
          className="relative text-[15px] text-[#0076ba] lg:text-[18px]"
        >
          <span className="absolute -top-[0px] left-[10px]">Ulica</span>
        </label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="absolute right-2 top-5 text-right text-[15px] font-bold outline-none lg:top-4 lg:w-[70%] lg:text-[20px]"
        ></input>

        {/* {searchTerm === '' && (
          <input
            className='text-[15px] lg:text-[20px] text-gray-400 absolute top-5 lg:top-4 right-2 lg:w-[70%] font-bold text-right outline-none'
            value={street}
            onChange={(e) => setSearchAndStreet(e.target.value)}
          ></input>
        )} */}

        <div className="absolute -right-1 top-[100%] z-30 text-right text-[15px] font-bold outline-none lg:top-[100%] lg:w-[70%] lg:text-[20px]">
          {filteredStreets[0] !== searchTerm && searchTerm !== '' && (
            <ul className="rounded-xl bg-gray-100 pr-2">
              {filteredStreets.map((street, index) => (
                <li
                  onClick={() => setSearchAndStreet(street)}
                  className="hover:bg-gray-200 "
                  key={index}
                  ref={dropdownRef}
                  tabIndex={0}
                >
                  {street}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="relative mt-4 flex h-[50px] flex-col rounded-lg border border-[#0076ba] lg:h-[50px] lg:rounded-xl">
        <label
          htmlFor="text"
          className="relative text-[15px] text-[#0076ba] lg:text-[18px]"
        >
          <span className="absolute -top-[0px] left-[10px]">Číslo</span>
        </label>
        <input
          type="text"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          className="absolute right-3 top-5 text-right text-[15px] font-bold outline-none lg:top-4 lg:w-[70%] lg:text-[20px]"
        />
      </div>

      <div className="mb-8 mt-[15%] flex w-[100%] flex-row justify-between lg:mb-0">
        <button
          onClick={onBack}
          className="h-10 rounded-[35px] border border-[#0076ba] px-10 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-10 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          className="h-10 rounded-[35px] border border-[#0076ba] px-9 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-9 lg:py-2 lg:text-[15px]"
          onClick={() => onNextGuard()}
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default HouseComponent01;
