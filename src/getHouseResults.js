import streetAndDistrict from './../Json/streetAndDistrict.json' assert { type: 'json' };
import districtAndPrice from './../Json/districtAndPrice.json' assert { type: 'json' };
import roomsAndPrice from './../Json/roomsAndPrice.json' assert { type: 'json' };
//import bathrooms from './../Json/bathRooms.json' assert { type: 'json' };
import floorCountAndValue from './../Json/floorCountAndValue.json' assert { type: 'json' };
import floorNumberAndValue from './../Json/floorNumberAndValue.json' assert { type: 'json' };
import buildingCondition from './../Json/buildingCondition.json' assert { type: 'json' };
import smartHome from './../Json/smartHome.json' assert { type: 'json' };

// TODO all comps select something if must
// comp 10 limit years !!!

export const houseResult = (calcValues) => {
  console.log('HouseRes', calcValues);
  const bratislava = 252524;
  const averageTotalSquareMeterPrice = 3860;
  const averageTotalBratislavaSquareMeterPrice = 4073;
  let holdValue;
  let districtValueHold;
  let roomValueHold;
  let bathroomValueHold;
  let conditionPriceHold;
  let squareMetersPriceHold;
  let averageOfDistrictPlusRoom;
  let averageOfRoomPlusBathroom;
  let averageOfRoomPlusBathroomConditionAndPriceSquareMetersPrice;
  // no holds
  let houseTypePrice;

  const result = [];
  result.push(bratislava);

  const getDistrictPrice = (street) => {
    const { district } = streetAndDistrict.find(
      (strt) => strt.street === street,
    );
    console.log('district', district);
    const { districtPrice } = districtAndPrice.find(
      (dsrct) => dsrct.district === district,
    );
    console.log('districtPrice', districtPrice);
    districtValueHold = districtPrice;
    result.push(districtPrice);
    console.log('resArray', result);
  };

  getDistrictPrice(calcValues.street);

  const getRoomPrice = (countRooms) => {
    const { roomsPrice } = roomsAndPrice.find(
      (rooms) => rooms.rooms == countRooms,
    );
    result.push(roomsPrice);
    roomValueHold = roomsPrice;
    console.log(result);
  };

  getRoomPrice(calcValues.countRooms);

  const getBathRoomPrice = (countBathrooms) => {
    const getBathroomCoeficient = (countBathrooms) => {
      if (countBathrooms === 1) return 0.9;
      if (countBathrooms === 2) return 1;
      if (countBathrooms === 3) return 1.5;
      if (countBathrooms === 4) return 2;
    };

    averageOfDistrictPlusRoom = (districtValueHold + roomValueHold) / 2;

    console.log('averageOfDistrictPlusRoom', averageOfDistrictPlusRoom);

    const bathroomPrice = Math.ceil(
      averageOfDistrictPlusRoom * getBathroomCoeficient(countBathrooms),
    );
    bathroomValueHold = bathroomPrice;

    console.log('bathroomPrice', bathroomPrice);
    result.push(bathroomPrice);
  };

  getBathRoomPrice(calcValues.countBathrooms);

  const getConditionPrice = (houseCondition) => {
    const getConditionCoeficient = (houseCondition) => {
      if (houseCondition === 1) return 1.7;
      if (houseCondition === 2) return 1.2;
      if (houseCondition === 3) return 0.65;
      if (houseCondition === 4) return 0.5;
    };

    averageOfRoomPlusBathroom = (roomValueHold + bathroomValueHold) / 2;
    console.log('averageOfRoomPlusBathroom', averageOfRoomPlusBathroom);

    const conditionPrice = Math.ceil(
      averageOfRoomPlusBathroom * getConditionCoeficient(houseCondition),
    );
    conditionPriceHold = conditionPrice;
    console.log('conditionPrice', conditionPrice);
    result.push(conditionPrice);
  };

  getConditionPrice(calcValues.houseCondition);

  const getSquareMetersPrice = (squareMeters) => {
    const squareMetersPrice =
      (squareMeters * averageTotalSquareMeterPrice) / 2 +
      (squareMeters * averageTotalBratislavaSquareMeterPrice) / 2;
    console.log('squareMeterPrice', squareMetersPrice);
    squareMetersPriceHold = squareMetersPrice;
    result.push(squareMetersPrice);
    console.log('resArray', result);
  };

  getSquareMetersPrice(calcValues.squareMeters);

  const getHouseTypePrice = (houseType) => {
    const getHouseTypePriceCoeficient = (houseType) => {
      if (houseType === 1) return 1;
      if (houseType === 2) return 1;
      if (houseType === 3) return 1.2;
      if (houseType === 4) return 2;
    };

    averageOfRoomPlusBathroomConditionAndPriceSquareMetersPrice =
      (averageOfRoomPlusBathroom + conditionPriceHold + squareMetersPriceHold) /
      3;

    houseTypePrice =
      averageOfRoomPlusBathroomConditionAndPriceSquareMetersPrice *
      getHouseTypePriceCoeficient(houseType);

    console.log('houseTypePrice', houseTypePrice);

    result.push(houseTypePrice);
    console.log('resArray', result);
  };

  getHouseTypePrice(calcValues.houseType);

  const getExtrasPrice = (
    hasPool,
    hasSauna,
    hasGardenShed,
    hasGarage,
    hasBasement,
    hasTerrace,
  ) => {
    // ternary
    const garage = !hasGarage
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const basement = !hasBasement
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const terrace = !hasTerrace
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const pool = !hasPool
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const sauna = !hasSauna
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const gardenShed = !hasGardenShed
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    console.log('extras', garage, basement, terrace, pool, sauna, gardenShed);
    result.push(garage);
    result.push(basement);
    result.push(terrace);
    result.push(pool);
    result.push(sauna);
    result.push(gardenShed);
    console.log('resArray', result);
  };

  getExtrasPrice(
    calcValues.hasPool,
    calcValues.hasSauna,
    calcValues.hasGardenShed,
    calcValues.hasGarage,
    calcValues.hasBasement,
    calcValues.hasTerrace,
  );

  // const getParkingPrice = (hasGarage, hasParking) => {
  //   let garage = Math.ceil(0.8 * holdValue);
  //   let parking = Math.ceil(0.8 * holdValue);
  //   if (hasGarage) garage = holdValue;
  //   if (hasParking) parking = holdValue;
  //   console.log('parking', garage, parking);
  //   result.push(garage);
  //   result.push(parking);
  //   console.log('resArray', result);
  // };

  // getParkingPrice(hasGarage, hasParking);

  // const getBuiltYearPrice = (builtYear) => {
  //   const assignYearValue = (builtYear) => {
  //     const currentYear = new Date().getFullYear();
  //     console.log('currentYear is', currentYear);
  //     // miesto 2023 dnesny rok
  //     if (builtYear >= 2018 && builtYear <= currentYear) return 1;
  //     if (builtYear >= 2010 && builtYear <= 2017) return 0.9;
  //     if (builtYear >= 2000 && builtYear <= 2009) return 0.85;
  //     if (builtYear >= 1989 && builtYear <= 1999) return 0.75;
  //     if (builtYear >= 1950 && builtYear <= 1988) return 0.5;
  //     if (builtYear < 1950) return 1;
  //   };

  //   const builtYearPrice = Math.ceil(assignYearValue(builtYear) * holdValue);
  //   console.log('builtYearPrice', builtYearPrice);
  //   result.push(builtYearPrice);
  //   console.log('resArray', result);
  // };

  // getBuiltYearPrice(builtYear);

  // const getBuildingConditionPrice = (
  //   hasIsolation,
  //   hasNewElevator,
  //   hasNewWindows,
  //   hasNewInstallations,
  // ) => {
  //   let isolation;
  //   let elevator;
  //   let windows;
  //   let installations;
  //   if (hasIsolation) isolation = 'hasIsolation';
  //   if (!hasIsolation) isolation = 'noIsolation';
  //   if (hasNewElevator) elevator = 'hasNewElevator';
  //   if (!hasNewElevator) elevator = 'noNewElevator';
  //   if (hasNewWindows) windows = 'hasNewWindows';
  //   if (!hasNewWindows) windows = 'noNewWindows';
  //   if (hasNewInstallations) installations = 'hasNewInstallations';
  //   if (!hasNewInstallations) installations = 'noNewInstallations';

  //   const getCondition = (aspect) =>
  //     buildingCondition.find((cnd) => cnd.condition == aspect);

  //   const isolationResult = Math.ceil(
  //     getCondition(isolation).condValue * holdValue,
  //   );
  //   const elevatorResult = Math.ceil(
  //     getCondition(elevator).condValue * holdValue,
  //   );
  //   const windowsResult = Math.ceil(
  //     getCondition(windows).condValue * holdValue,
  //   );
  //   const installationsResult = Math.ceil(
  //     getCondition(installations).condValue * holdValue,
  //   );
  //   console.log(
  //     'buildingCondResults',
  //     isolationResult,
  //     elevatorResult,
  //     windowsResult,
  //     installationsResult,
  //   );
  //   result.push(isolationResult);
  //   result.push(elevatorResult);
  //   result.push(windowsResult);
  //   result.push(installationsResult);
  //   console.log('resArray', result);
  // };

  // getBuildingConditionPrice(
  //   hasIsolation,
  //   hasNewElevator,
  //   hasNewWindows,
  //   hasNewInstallations,
  // );

  // const getSmartHomePrice = (
  //   hasThermostat,
  //   hasInternet,
  //   hasAlarm,
  //   hasAirCon,
  // ) => {
  //   let thermostat;
  //   let internet;
  //   let alarm;
  //   let aircon;
  //   if (hasThermostat) thermostat = 'hasThermostat';
  //   if (!hasThermostat) thermostat = 'noThermostat';
  //   if (hasInternet) internet = 'hasInternet';
  //   if (!hasInternet) internet = 'noInternet';
  //   if (hasAlarm) alarm = 'hasAlarm';
  //   if (!hasAlarm) alarm = 'noAlarm';
  //   if (hasAirCon) aircon = 'hasAirCon';
  //   if (!hasAirCon) aircon = 'noAirCon';

  //   const getCondition = (aspect) =>
  //     smartHome.find((cnd) => cnd.smartHome == aspect);

  //   const thermostatResult = Math.ceil(
  //     getCondition(thermostat).smartValue * holdValue,
  //   );
  //   const internetResult = Math.ceil(
  //     getCondition(internet).smartValue * holdValue,
  //   );
  //   const alarmResult = Math.ceil(getCondition(alarm).smartValue * holdValue);
  //   const airconResult = Math.ceil(getCondition(aircon).smartValue * holdValue);

  //   console.log(
  //     'smartResults',
  //     thermostatResult,
  //     internetResult,
  //     alarmResult,
  //     airconResult,
  //   );
  //   result.push(thermostatResult);
  //   result.push(internetResult);
  //   result.push(alarmResult);
  //   result.push(airconResult);
  //   console.log('resArray', result);
  // };

  // getSmartHomePrice(hasThermostat, hasInternet, hasAlarm, hasAirCon);

  // const getUrbanQualityPrice = (urbanQuality) => {
  //   console.log('uV', urbanQuality, holdValue);
  //   const getUrbanQualityCoeficient = (urbanQuality) => {
  //     if (urbanQuality === 'excellent') return 1;
  //     if (urbanQuality === 'average') return 0.9;
  //     if (urbanQuality === 'poor') return 0.75;
  //   };
  //   const urbanQualityPrice =
  //     getUrbanQualityCoeficient(urbanQuality) * holdValue;
  //   console.log('urbanQualityPrice', urbanQualityPrice);
  //   result.push(urbanQualityPrice);
  //   console.log('resArray', result);
  // };

  //getUrbanQualityPrice(urbanQuality);

  // const calculateAverage = (array) => {
  //   if (array.length === 0) {
  //     return 0;
  //   }
  //   const sum = array.reduce((acc, value) => acc + value, 0);
  //   const average = sum / array.length;
  //   return average;
  // };
  // const averageOfAll = calculateAverage(result);
  // let withProvision = Math.floor(averageOfAll);
  // let noProvision = Math.ceil(averageOfAll * 0.95);
  // let price = (withProvision / 1000) * 1000;
  let price = 1111;

  return {
    price,
  };
};

const testValues = {
  street: 'Galvaniho ulica',
  countRooms: 5,
  countBathrooms: 1,
  houseCondition: 1,
  squareMeters: '123',
  houseType: 2,
  hasPool: false,
  hasSauna: false,
  hasGardenShed: false,
  hasGarage: false,
  hasBasement: true,
  hasTerrace: false,
  landType: 1,
  landSquareMeters: '500',
  builtYear: '2018',
  hasThermostat: false,
  hasAlarm: false,
  hasFireAlarm: false,
  hasSolarCollectors: false,
  hasCameraSystem: false,
  hasInternet: true,
  hasWell: true,
  hasCityWater: true,
  hasCitySewerage: true,
  hasSeptic: true,
  hasElectricity: true,
  hasGas: true,
  urbanQuality: 'poor',
  hasElectricRadiators: false,
  hasHeatPump: false,
  hasOther: false,
  hasSolidFuel: true,
  hasGasBoiler: true,
  hasUnderfloorHeating: true,
};

houseResult(testValues);
