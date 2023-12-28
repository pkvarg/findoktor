import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
//import { result } from '../getResults';
import { SpinnerFullPage } from '../components';
import axios from 'axios';

const CalcNavbar = lazy(() => import('../components/calculator/CalcNavbar'));
const HouseComponent01 = lazy(
  () => import('../components/calculator/house/HouseComponent01'),
);
const HouseComponent02 = lazy(
  () => import('../components/calculator/house/HouseComponent02'),
);
const HouseComponent03 = lazy(
  () => import('../components/calculator/house/HouseComponent03'),
);
const HouseComponent04 = lazy(
  () => import('../components/calculator/house/HouseComponent04'),
);
const HouseComponent05 = lazy(
  () => import('../components/calculator/house/HouseComponent05'),
);
const HouseComponent06 = lazy(
  () => import('../components/calculator/house/HouseComponent06'),
);
const HouseComponent07 = lazy(
  () => import('../components/calculator/house/HouseComponent07'),
);

const Footer = lazy(() => import('../components/Footer'));

const CalculatorHouse = () => {
  const formRef = useRef(null);

  const [flatOrHouse, setFlatOrHouse] = useState('house');
  const [city, setCity] = useState('Bratislava');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [countRooms, setCountRooms] = useState(0);
  const [countBathrooms, setCountBathrooms] = useState(0);
  const [currentComponent, setCurrentComponent] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentlyClickedRoomCount, setCurrentlyClickedRoomCount] =
    useState(null);
  const [currentlyClickedBathroomCount, setCurrentlyClickedBathroomCount] =
    useState(null);
  const [houseCondition, setHouseCondition] = useState(0);
  const [currentConditionClicked, setCurrentConditionClicked] = useState(null);
  const [squareMeters, setSquareMeters] = useState(0);
  const [houseType, setHouseType] = useState(0);
  const [currentHouseTypeClicked, setCurrentHouseTypeClicked] = useState(null);
  const [hasGarage, setHasGarage] = useState(false);
  const [hasBasement, setHasBasement] = useState(false);
  const [hasTerrace, setHasTerrace] = useState(false);
  const [hasPool, setHasPool] = useState(false);
  const [hasSauna, setHasSauna] = useState(false);
  const [hasGardenShed, setHasGardenShed] = useState(false);

  console.log(
    'HOUSE',
    flatOrHouse,
    city,
    street,
    houseNumber,
    countRooms,
    countBathrooms,
    houseCondition,
    squareMeters,
    houseType,
    hasGarage,
    hasBasement,
    hasTerrace,
    hasPool,
    hasSauna,
    hasGardenShed,
  );

  const handleNext = () => {
    if (currentComponent < 16) {
      setCurrentComponent(currentComponent + 1);
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentComponent > 0) {
      setCurrentComponent(currentComponent - 1);
    }
  };

  const handleCountRoomClick = (count) => {
    if (currentlyClickedRoomCount !== null) {
      const toRemoveFrom = document.getElementById(currentlyClickedRoomCount);
      toRemoveFrom.classList.remove('clicked');
    }
    setCountRooms(count);
    setCurrentlyClickedRoomCount(count);
    const element = document.getElementById(count);
    element.classList.add('clicked');
  };

  const handleCountBathroomClick = (count) => {
    if (currentlyClickedBathroomCount !== null) {
      const toRemoveFrom = document.getElementById(
        currentlyClickedBathroomCount,
      );
      toRemoveFrom.classList.remove('clicked');
    }
    setCountBathrooms(count);
    setCurrentlyClickedBathroomCount(count);
    const element = document.getElementById(count);
    element.classList.add('clicked');
  };

  const handleHouseCondition = (num) => {
    if (currentConditionClicked !== null) {
      const toRemoveFrom = document.getElementById(currentConditionClicked);
      toRemoveFrom.classList.remove('clicked');
    }
    setHouseCondition(num);
    setCurrentConditionClicked(num);
    const element = document.getElementById(num);
    element.classList.add('clicked');
  };

  const handleHouseType = (num) => {
    if (currentHouseTypeClicked !== null) {
      const toRemoveFrom = document.getElementById(currentHouseTypeClicked);
      toRemoveFrom.classList.remove('clicked');
    }
    setHouseType(num);
    setCurrentHouseTypeClicked(num);
    const element = document.getElementById(num);
    element.classList.add('clicked');
  };

  const renderComponent = (componentNumber) => {
    switch (componentNumber) {
      case 1:
        return (
          <HouseComponent01
            onNext={handleNext}
            onBack={handleBack}
            city={city}
            setCity={setCity}
            street={street}
            setStreet={setStreet}
            houseNumber={houseNumber}
            setHouseNumber={setHouseNumber}
          />
        );

      case 2:
        return (
          <HouseComponent02
            onBack={handleBack}
            onNext={handleNext}
            currentlyClickedRoomCount={currentlyClickedRoomCount}
            handleCountRoomClick={handleCountRoomClick}
          />
        );
      case 3:
        return (
          <HouseComponent03
            onBack={handleBack}
            onNext={handleNext}
            currentlyClickedBathroomCount={currentlyClickedBathroomCount}
            handleCountBathroomClick={handleCountBathroomClick}
          />
        );
      case 4:
        return (
          <HouseComponent04
            onBack={handleBack}
            onNext={handleNext}
            handleHouseCondition={handleHouseCondition}
            currentConditionClicked={currentConditionClicked}
          />
        );
      case 5:
        return (
          <HouseComponent05
            onBack={handleBack}
            onNext={handleNext}
            squareMeters={squareMeters}
            setSquareMeters={setSquareMeters}
          />
        );
      case 6:
        return (
          <HouseComponent06
            onBack={handleBack}
            onNext={handleNext}
            handleHouseType={handleHouseType}
            currentHouseTypeClicked={currentHouseTypeClicked}
          />
        );
      case 7:
        return (
          <HouseComponent07
            onBack={handleBack}
            onNext={handleNext}
            hasGarage={hasGarage}
            hasBasement={hasBasement}
            hasTerrace={hasTerrace}
            hasPool={hasPool}
            hasSauna={hasSauna}
            hasGardenShed={hasGardenShed}
            setHasGarage={setHasGarage}
            setHasBasement={setHasBasement}
            setHasTerrace={setHasTerrace}
            setHasPool={setHasPool}
            setHasSauna={setHasSauna}
            setHasGardenShed={setHasGardenShed}
          />
        );
      // case 5:
      //   return (
      //     <Component05
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       allFloorsCount={allFloorsCount}
      //       setAllFloorsCount={setAllFloorsCount}
      //     />
      //   );

      // case 9:
      //   return (
      //     <Component09
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       hasGarage={hasGarage}
      //       hasParking={hasParking}
      //       hasNoParking={hasNoParking}
      //       setHasGarage={setHasGarage}
      //       setHasParking={setHasParking}
      //       setHasNoParking={setHasNoParking}
      //     />
      //   );

      // case 10:
      //   return (
      //     <Component10
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       builtYear={builtYear}
      //       setBuiltYear={setBuiltYear}
      //     />
      //   );

      // case 11:
      //   return (
      //     <Component11
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       hasIsolation={hasIsolation}
      //       hasNewElevator={hasNewElevator}
      //       hasNewWindows={hasNewWindows}
      //       hasNewInstallations={hasNewInstallations}
      //       setHasIsolation={setHasIsolation}
      //       setHasNewElevator={setHasNewElevator}
      //       setHasNewWindows={setHasNewWindows}
      //       setHasNewInstallations={setHasNewInstallations}
      //     />
      //   );

      // case 12:
      //   return (
      //     <Component12
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       hasThermostat={hasThermostat}
      //       hasInternet={hasInternet}
      //       hasAlarm={hasAlarm}
      //       hasAirCon={hasAirCon}
      //       setHasThermostat={setHasThermostat}
      //       setHasInternet={setHasInternet}
      //       setHasAlarm={setHasAlarm}
      //       setHasAircon={setHasAircon}
      //     />
      //   );

      // case 13:
      //   return (
      //     <Component13
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       monthlyCosts={monthlyCosts}
      //       setMonthlyCosts={setMonthlyCosts}
      //     />
      //   );

      // case 14:
      //   return (
      //     <Component14
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       urbanQuality={urbanQuality}
      //       handleUrbanQuality={handleUrbanQuality}
      //       startCalculation={startCalculation}
      //     />
      //   );

      // case 15:
      //   return (
      //     <Component15
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       isValid={isValid}
      //       email={email}
      //       setEmail={setEmail}
      //       checkBox={checkBox}
      //       setCheckBox={setCheckBox}
      //       isLoading={isLoading}
      //     />
      //   );
      // case 16:
      //   return <Component16 onBack={handleBack} price={price} />;

      default:
        return null;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // if (email !== '') {
    //   setIsValid(validateEmail(email));
    //   setIsLoading(true);

    //   const res = startCalculation();
    //   console.log('res of calc', res);
    //   if (res) {
    //     sendEmail();
    //   }

    //   setTimeout(handleNext, 4000);

    // }
  };

  return (
    <>
      <Suspense fallback={<SpinnerFullPage />}>
        <div className="relative grid h-[97.5vh] grid-rows-3 bg-white text-[30px] lg:h-screen">
          <div className="h-[min-content]">
            <CalcNavbar />
          </div>
          <div className="z-10 flex h-auto  flex-col items-center justify-center  lg:h-[100%]">
            <form onSubmit={handleSubmitForm} ref={formRef}>
              {renderComponent(currentComponent)}
            </form>
          </div>
          <div className="z-0 h-[min-content]">
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default CalculatorHouse;
