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
  let landTypePrice;
  let landSquareMetersPrice;
  let builtYearPrice;

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

    averageOfDistrictPlusRoom = Math.floor(
      (districtValueHold + roomValueHold) / 2,
    );

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
    const squareMetersPrice = Math.floor(
      (squareMeters * averageTotalSquareMeterPrice) / 2 +
        (squareMeters * averageTotalBratislavaSquareMeterPrice) / 2,
    );
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

    houseTypePrice = Math.floor(
      averageOfRoomPlusBathroomConditionAndPriceSquareMetersPrice *
        getHouseTypePriceCoeficient(houseType),
    );

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
    const pool = !hasPool
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const sauna = !hasSauna
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const gardenShed = !hasGardenShed
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const garage = !hasGarage
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const basement = !hasBasement
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const terrace = !hasTerrace
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    console.log('extras', pool, sauna, gardenShed, garage, basement, terrace);
    result.push(pool);
    result.push(sauna);
    result.push(gardenShed);
    result.push(garage);
    result.push(basement);
    result.push(terrace);
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

  const getLandTypePrice = (landType) => {
    const getLandTypePriceCoeficient = (landType) => {
      if (landType === 1) return 1;
      if (landType === 2) return 0.8;
      if (landType === 3) return 0.6;
      if (landType === 4) return 0.6;
    };

    landTypePrice = Math.floor(
      houseTypePrice * getLandTypePriceCoeficient(landType),
    );

    console.log('landTypePrice', landTypePrice);

    result.push(landTypePrice);
    console.log('resArray', result);
  };

  getLandTypePrice(calcValues.landType);

  const getLandSquareMetersPrice = (landSquareMeters) => {
    landSquareMeters = parseInt(landSquareMeters);
    landSquareMetersPrice = Math.floor(
      (landSquareMeters * averageTotalSquareMeterPrice) / 2 / 10 +
        (landSquareMeters * averageTotalBratislavaSquareMeterPrice) / 2 / 10,
    );
    console.log('landSquareMeterPrice', landSquareMetersPrice);
    result.push(landSquareMetersPrice);
    console.log('resArray', result);
  };

  getLandSquareMetersPrice(calcValues.landSquareMeters);

  const getBuiltYearPrice = (builtYear) => {
    const assignYearValue = (builtYear) => {
      const currentYear = new Date().getFullYear();
      console.log('currentYear is', currentYear);
      if (builtYear >= 2018 && builtYear <= currentYear) return 1;
      if (builtYear >= 2010 && builtYear <= 2017) return 0.9;
      if (builtYear >= 2000 && builtYear <= 2009) return 0.85;
      if (builtYear >= 1989 && builtYear <= 1999) return 0.75;
      if (builtYear >= 1950 && builtYear <= 1988) return 0.5;
      if (builtYear < 1950) return 1;
    };

    builtYearPrice = Math.ceil(assignYearValue(builtYear) * houseTypePrice);
    console.log('builtYearPrice', builtYearPrice);
    result.push(builtYearPrice);
    console.log('resArray', result);
  };

  getBuiltYearPrice(calcValues.builtYear);

  const getSmartsPrice = (
    hasThermostat,
    hasAlarm,
    hasFireAlarm,
    hasSolarCollectors,
    hasCameraSystem,
    hasInternet,
  ) => {
    // ternary
    const thermostat = !hasThermostat
      ? Math.floor(0.8 * builtYearPrice)
      : Math.floor(1.1 * builtYearPrice);

    const alarm = !hasAlarm
      ? Math.floor(0.8 * builtYearPrice)
      : Math.floor(1.1 * builtYearPrice);

    const firealarm = !hasFireAlarm
      ? Math.floor(0.8 * builtYearPrice)
      : Math.floor(1.1 * builtYearPrice);

    const solarcollectors = !hasSolarCollectors
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1.1 * houseTypePrice);

    const camerasystem = !hasCameraSystem
      ? Math.floor(0.8 * builtYearPrice)
      : Math.floor(1.1 * builtYearPrice);

    const internet = !hasInternet
      ? Math.floor(0.8 * builtYearPrice)
      : Math.floor(1.1 * builtYearPrice);

    console.log(
      'smarts',
      thermostat,
      alarm,
      firealarm,
      solarcollectors,
      camerasystem,
      internet,
    );
    result.push(thermostat);
    result.push(alarm);
    result.push(firealarm);
    result.push(solarcollectors);
    result.push(camerasystem);
    result.push(internet);
    console.log('resArray', result);
  };

  getSmartsPrice(
    calcValues.hasThermostat,
    calcValues.hasAlarm,
    calcValues.hasFireAlarm,
    calcValues.hasSolarCollectors,
    calcValues.hasCameraSystem,
    calcValues.hasInternet,
  );

  const getEngineeringPrice = (
    hasWell,
    hasCityWater,
    hasCitySewerage,
    hasSeptic,
    hasElectricity,
    hasGas,
  ) => {
    // ternary
    const well = !hasWell
      ? Math.floor(0.7 * builtYearPrice)
      : Math.floor(1 * builtYearPrice);

    const citywater = !hasCityWater
      ? Math.floor(0.7 * builtYearPrice)
      : Math.floor(1 * builtYearPrice);

    const citysewerage = !hasCitySewerage
      ? Math.floor(0.7 * builtYearPrice)
      : Math.floor(1 * builtYearPrice);

    const septic = !hasSeptic
      ? Math.floor(0.7 * builtYearPrice)
      : Math.floor(1 * builtYearPrice);

    const electricity = !hasElectricity
      ? Math.floor(0.7 * builtYearPrice)
      : Math.floor(1 * builtYearPrice);

    const gas = !hasGas
      ? Math.floor(0.7 * builtYearPrice)
      : Math.floor(1 * builtYearPrice);

    console.log(
      'engineering',
      well,
      citywater,
      citysewerage,
      septic,
      electricity,
      gas,
    );
    result.push(well);
    result.push(citywater);
    result.push(citysewerage);
    result.push(septic);
    result.push(electricity);
    result.push(gas);
    console.log('resArray', result);
  };

  getEngineeringPrice(
    calcValues.hasWell,
    calcValues.hasCityWater,
    calcValues.hasCitySewerage,
    calcValues.hasSeptic,
    calcValues.hasElectricity,
    calcValues.hasGas,
  );

  const getUrbanQualityPrice = (urbanQuality) => {
    console.log('uV', urbanQuality);
    const getUrbanQualityCoeficient = (urbanQuality) => {
      if (urbanQuality === 'excellent') return 1;
      if (urbanQuality === 'average') return 0.9;
      if (urbanQuality === 'poor') return 0.75;
    };
    const urbanQualityPrice = Math.floor(
      getUrbanQualityCoeficient(urbanQuality) * builtYearPrice,
    );
    console.log('urbanQualityPrice', urbanQualityPrice);
    result.push(urbanQualityPrice);
    console.log('resArray', result);
  };

  getUrbanQualityPrice(calcValues.urbanQuality);

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
  hasGarage: true,
  hasBasement: true,
  hasTerrace: true,
  landType: 1,
  landSquareMeters: '500',
  builtYear: '2018',
  hasThermostat: false,
  hasAlarm: false,
  hasFireAlarm: false,
  hasSolarCollectors: false,
  hasCameraSystem: false,
  hasInternet: true,
  hasWell: false,
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
