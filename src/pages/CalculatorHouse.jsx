import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
//import { result } from '../getResults';
import { SpinnerFullPage } from '../components';
import axios from 'axios';

const CalcNavbar = lazy(() => import('../components/calculator/CalcNavbar'));
const HouseComponent01 = lazy(
  () => import('../components/calculator/house/HouseComponent01'),
);
const Footer = lazy(() => import('../components/Footer'));

const CalculatorHouse = () => {
  const formRef = useRef(null);

  const [flatOrHouse, setFlatOrHouse] = useState('house');
  const [city, setCity] = useState('Bratislava');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');

  const [currentComponent, setCurrentComponent] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  console.log(flatOrHouse, city);

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
      // case 2:
      //   return (
      //     <Component01
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       city={city}
      //       setCity={setCity}
      //       street={street}
      //       setStreet={setStreet}
      //       houseNumber={houseNumber}
      //       setHouseNumber={setHouseNumber}
      //     />
      //   );
      // case 2:
      //   return (
      //     <Component02
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       currentlyClickedRoomCount={currentlyClickedRoomCount}
      //       handleCountRoomClick={handleCountRoomClick}
      //     />
      //   );
      // case 3:
      //   return (
      //     <Component03
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       handleHouseCondition={handleHouseCondition}
      //       currentConditionClicked={currentConditionClicked}
      //     />
      //   );
      // case 4:
      //   return (
      //     <Component04
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       squareMeters={squareMeters}
      //       setSquareMeters={setSquareMeters}
      //     />
      //   );
      // case 5:
      //   return (
      //     <Component05
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       allFloorsCount={allFloorsCount}
      //       setAllFloorsCount={setAllFloorsCount}
      //     />
      //   );
      // case 6:
      //   return (
      //     <Component06
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       currentFloorNumber={currentFloorNumber}
      //       setCurrentFloorNumber={setCurrentFloorNumber}
      //     />
      //   );
      // case 7:
      //   return (
      //     <Component07
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       hasElevator={hasElevator}
      //       handleHasElevator={handleHasElevator}
      //     />
      //   );

      // case 8:
      //   return (
      //     <Component08
      //       onBack={handleBack}
      //       onNext={handleNext}
      //       hasBalcony={hasBalcony}
      //       hasLoggia={hasLoggia}
      //       hasTerrace={hasTerrace}
      //       hasBasement={hasBasement}
      //       setHasBalcony={setHasBalcony}
      //       setHasLoggia={setHasLoggia}
      //       setHasTerrace={setHasTerrace}
      //       setHasBasement={setHasBasement}
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
