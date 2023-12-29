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
const HouseComponent08 = lazy(
  () => import('../components/calculator/house/HouseComponent08'),
);
const HouseComponent09 = lazy(
  () => import('../components/calculator/house/HouseComponent09'),
);

const HouseComponent10 = lazy(
  () => import('../components/calculator/house/HouseComponent10'),
);

const HouseComponent11 = lazy(
  () => import('../components/calculator/house/HouseComponent11'),
);

const HouseComponent12 = lazy(
  () => import('../components/calculator/house/HouseComponent12'),
);

const HouseComponent13 = lazy(
  () => import('../components/calculator/house/HouseComponent13'),
);

const HouseComponent14 = lazy(
  () => import('../components/calculator/house/HouseComponent14'),
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

  const garage = document.getElementById('garage');
  const basement = document.getElementById('basement');
  const terrace = document.getElementById('terrace');
  const pool = document.getElementById('pool');
  const sauna = document.getElementById('sauna');
  const gardenshed = document.getElementById('gardenshed');

  useEffect(() => {
    if (garage !== null && hasGarage) garage.classList.add('clicked');
    if (garage !== null && !hasGarage) garage.classList.remove('clicked');
    if (basement !== null && hasBasement) basement.classList.add('clicked');
    if (basement !== null && !hasBasement) basement.classList.remove('clicked');
    if (terrace !== null && hasTerrace) terrace.classList.add('clicked');
    if (terrace !== null && !hasTerrace) terrace.classList.remove('clicked');
    if (pool !== null && hasPool) pool.classList.add('clicked');
    if (pool !== null && !hasPool) pool.classList.remove('clicked');

    if (sauna !== null && hasSauna) sauna.classList.add('clicked');
    if (sauna !== null && !hasSauna) sauna.classList.remove('clicked');

    if (gardenshed !== null && hasGardenShed)
      gardenshed.classList.add('clicked');
    if (gardenshed !== null && !hasGardenShed)
      gardenshed.classList.remove('clicked');
  }, [hasGarage, hasBasement, hasTerrace, hasPool, hasSauna, hasGardenShed]);

  const [landType, setLandType] = useState(0);
  const [currentLandTypeClicked, setCurrentLandTypeClicked] = useState(null);
  const [landSquareMeters, setLandSquareMeters] = useState(0);

  const [builtYear, setBuiltYear] = useState(0);

  const [hasThermostat, setHasThermostat] = useState(false);

  const [hasAlarm, setHasAlarm] = useState(false);
  const [hasFireAlarm, setHasFireAlarm] = useState(false);
  const [hasSolarCollectors, setHasSolarCollectors] = useState(false);
  const [hasCameraSystem, setHasCameraSystem] = useState(false);
  const [hasInternet, setHasInternet] = useState(false);

  const thermostat = document.getElementById('thermostat');
  const alarm = document.getElementById('alarm');
  const firealarm = document.getElementById('firealarm');
  const solarcollectors = document.getElementById('solarcollectors');
  const camerasystem = document.getElementById('camerasystem');
  const internet = document.getElementById('internet');

  useEffect(() => {
    if (thermostat !== null && hasThermostat)
      thermostat.classList.add('clicked');
    if (thermostat !== null && !hasThermostat)
      thermostat.classList.remove('clicked');
    if (alarm !== null && hasAlarm) alarm.classList.add('clicked');
    if (alarm !== null && !hasAlarm) alarm.classList.remove('clicked');
    if (firealarm !== null && hasFireAlarm) firealarm.classList.add('clicked');
    if (firealarm !== null && !hasFireAlarm)
      firealarm.classList.remove('clicked');
    if (solarcollectors !== null && hasSolarCollectors)
      solarcollectors.classList.add('clicked');
    if (solarcollectors !== null && !hasSolarCollectors)
      solarcollectors.classList.remove('clicked');
    if (camerasystem !== null && hasCameraSystem)
      camerasystem.classList.add('clicked');
    if (camerasystem !== null && !hasCameraSystem)
      camerasystem.classList.remove('clicked');
    if (internet !== null && hasInternet) internet.classList.add('clicked');
    if (internet !== null && !hasInternet) internet.classList.remove('clicked');
  }, [
    hasThermostat,
    hasAlarm,
    hasFireAlarm,
    hasSolarCollectors,
    hasCameraSystem,
    hasInternet,
  ]);

  const [hasWell, setHasWell] = useState(false);
  const [hasCityWater, setHasCityWater] = useState(false);

  const [hasCitySewerage, setHasCitySewerage] = useState(false);

  const [hasSeptic, setHasSeptic] = useState(false);
  const [hasElectricity, setHasElectricity] = useState(false);
  const [hasGas, setHasGas] = useState(false);

  const well = document.getElementById('well');
  const citywater = document.getElementById('citywater');
  const citysewerage = document.getElementById('citysewerage');
  const septic = document.getElementById('septic');
  const electricity = document.getElementById('electricity');
  const gas = document.getElementById('gas');

  useEffect(() => {
    if (well !== null && hasWell) well.classList.add('clicked');
    if (well !== null && !hasWell) well.classList.remove('clicked');
    if (citywater !== null && hasCityWater) citywater.classList.add('clicked');
    if (citywater !== null && !hasCityWater)
      citywater.classList.remove('clicked');
    if (citysewerage !== null && hasCitySewerage)
      citysewerage.classList.add('clicked');
    if (citysewerage !== null && !hasCitySewerage)
      citysewerage.classList.remove('clicked');
    if (septic !== null && hasSeptic) septic.classList.add('clicked');
    if (septic !== null && !hasSeptic) septic.classList.remove('clicked');
    if (electricity !== null && hasElectricity)
      electricity.classList.add('clicked');
    if (electricity !== null && !hasElectricity)
      electricity.classList.remove('clicked');
    if (gas !== null && hasGas) gas.classList.add('clicked');
    if (gas !== null && !hasGas) gas.classList.remove('clicked');
  }, [
    hasWell,
    hasCityWater,
    hasCitySewerage,
    hasSeptic,
    hasElectricity,
    hasGas,
  ]);

  const [urbanQuality, setUrbanQuality] = useState('');

  const [currentUrbanQualityClicked, setCurrentUrbanQualityClicked] =
    useState(null);

  const handleUrbanQuality = (quality) => {
    if (currentUrbanQualityClicked !== null) {
      const toRemoveFrom = document.getElementById(currentUrbanQualityClicked);
      toRemoveFrom.classList.remove('clicked');
    }
    setUrbanQuality(quality);
    setCurrentUrbanQualityClicked(quality);
    const element = document.getElementById(quality);
    element.classList.add('clicked');
  };

  const [hasElectricRadiators, setHasElectricRadiators] = useState(false);
  const [hasHeatPump, setHasHeatPump] = useState(false);
  const [hasSolidFuel, setHasSolidFuel] = useState(false);
  const [hasGasBoiler, setHasGasBoiler] = useState(false);
  const [hasUnderfloorHeating, setHasUnderfloorHeating] = useState(false);
  const [hasOther, setHasOther] = useState(false);

  const electricradiators = document.getElementById('electricradiators');
  const heatpump = document.getElementById('heatpump');
  const solidfuel = document.getElementById('solidfuel');
  const gasboiler = document.getElementById('gasboiler');
  const underfloorheating = document.getElementById('underfloorheating');
  const other = document.getElementById('other');

  useEffect(() => {
    if (electricradiators !== null && hasElectricRadiators)
      electricradiators.classList.add('clicked');
    if (electricradiators !== null && !hasElectricRadiators)
      electricradiators.classList.remove('clicked');
    if (heatpump !== null && hasHeatPump) heatpump.classList.add('clicked');
    if (heatpump !== null && !hasHeatPump) heatpump.classList.remove('clicked');
    if (solidfuel !== null && hasSolidFuel) solidfuel.classList.add('clicked');
    if (solidfuel !== null && !hasSolidFuel)
      solidfuel.classList.remove('clicked');
    if (gasboiler !== null && hasGasBoiler) gasboiler.classList.add('clicked');
    if (gasboiler !== null && !hasGasBoiler)
      gasboiler.classList.remove('clicked');
    if (underfloorheating !== null && hasUnderfloorHeating)
      underfloorheating.classList.add('clicked');
    if (underfloorheating !== null && !hasUnderfloorHeating)
      underfloorheating.classList.remove('clicked');
    if (other !== null && hasOther) other.classList.add('clicked');
    if (other !== null && !hasOther) other.classList.remove('clicked');
  }, [
    hasElectricRadiators,
    hasHeatPump,
    hasSolidFuel,
    hasGasBoiler,
    hasUnderfloorHeating,
    hasOther,
  ]);

  const startCalculation = () => {
    // const calculated = result(
    //   city,
    //   street,
    //   houseNumber,
    //   countRooms,
    //   houseCondition,
    //   squareMeters,
    //   allFloorsCount,
    //   currentFloorNumber,
    //   hasElevator,
    //   hasBalcony,
    //   hasLoggia,
    //   hasTerrace,
    //   hasBasement,
    //   hasGarage,
    //   hasParking,
    //   builtYear,
    //   hasIsolation,
    //   hasNewElevator,
    //   hasNewWindows,
    //   hasNewInstallations,
    //   hasThermostat,
    //   hasInternet,
    //   hasAlarm,
    //   hasAirCon,
    //   urbanQuality,
    // );
    // if (calculated !== null && calculated !== '' && calculated !== 0) {
    //   setPrice(calculated.price);
    //   console.log('...RESULTS', calculated);
    //   return calculated;
    // }
  };

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
    landType,
    landSquareMeters,
    builtYear,
    hasThermostat,
    hasAlarm,
    hasFireAlarm,
    hasSolarCollectors,
    hasCameraSystem,
    hasInternet,
    hasWell,
    hasCityWater,
    hasCitySewerage,
    hasSeptic,
    hasElectricity,
    hasGas,
    urbanQuality,
    hasElectricRadiators,
    hasHeatPump,
    hasSolidFuel,
    hasGasBoiler,
    hasUnderfloorHeating,
    hasOther,
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

  const handleLandType = (num) => {
    if (currentLandTypeClicked !== null) {
      const toRemoveFrom = document.getElementById(currentLandTypeClicked);
      toRemoveFrom.classList.remove('clicked');
    }
    setLandType(num);
    setCurrentLandTypeClicked(num);
    const element = document.getElementById(num);
    element.classList.add('clicked');
  };

  const [currentComponent, setCurrentComponent] = useState(6);

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
      case 8:
        return (
          <HouseComponent08
            onBack={handleBack}
            onNext={handleNext}
            handleLandType={handleLandType}
            currentLandTypeClicked={currentLandTypeClicked}
          />
        );
      case 9:
        return (
          <HouseComponent09
            onBack={handleBack}
            onNext={handleNext}
            landSquareMeters={landSquareMeters}
            setLandSquareMeters={setLandSquareMeters}
          />
        );
      case 10:
        return (
          <HouseComponent10
            onBack={handleBack}
            onNext={handleNext}
            builtYear={builtYear}
            setBuiltYear={setBuiltYear}
          />
        );
      case 11:
        return (
          <HouseComponent11
            onBack={handleBack}
            onNext={handleNext}
            hasThermostat={hasThermostat}
            hasAlarm={hasAlarm}
            hasFireAlarm={hasFireAlarm}
            hasSolarCollectors={hasSolarCollectors}
            hasCameraSystem={hasCameraSystem}
            hasInternet={hasInternet}
            setHasThermostat={setHasThermostat}
            setHasAlarm={setHasAlarm}
            setHasFireAlarm={setHasFireAlarm}
            setHasSolarCollectors={setHasSolarCollectors}
            setHasCameraSystem={setHasCameraSystem}
            setHasInternet={setHasInternet}
          />
        );
      case 12:
        return (
          <HouseComponent12
            onBack={handleBack}
            onNext={handleNext}
            hasWell={hasWell}
            hasCityWater={hasCityWater}
            hasCitySewerage={hasCitySewerage}
            hasSeptic={hasSeptic}
            hasElectricity={hasElectricity}
            hasGas={hasGas}
            setHasWell={setHasWell}
            setHasCityWater={setHasCityWater}
            setHasCitySewerage={setHasCitySewerage}
            setHasSeptic={setHasSeptic}
            setHasElectricity={setHasElectricity}
            setHasGas={setHasGas}
          />
        );
      case 13:
        return (
          <HouseComponent13
            onBack={handleBack}
            onNext={handleNext}
            urbanQuality={urbanQuality}
            handleUrbanQuality={handleUrbanQuality}
            startCalculation={startCalculation}
          />
        );

      case 14:
        return (
          <HouseComponent14
            onBack={handleBack}
            onNext={handleNext}
            hasElectricRadiators={hasElectricRadiators}
            hasHeatPump={setHasHeatPump}
            hasSolidFuel={hasSolidFuel}
            hasGasBoiler={hasGasBoiler}
            hasUnderfloorHeating={hasUnderfloorHeating}
            hasOther={hasOther}
            setHasElectricRadiators={setHasElectricRadiators}
            setHasHeatPump={setHasHeatPump}
            setHasSolidFuel={setHasSolidFuel}
            setHasGasBoiler={setHasGasBoiler}
            setHasUnderfloorHeating={setHasUnderfloorHeating}
            setHasOther={setHasOther}
          />
        );
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
