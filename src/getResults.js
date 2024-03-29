import streetAndDistrict from './../Json/streetAndDistrict.json';
import districtAndPrice from './../Json/districtAndPrice.json';
import roomsAndPrice from './../Json/roomsAndPrice.json';
import floorCountAndValue from './../Json/floorCountAndValue.json';
import floorNumberAndValue from './../Json/floorNumberAndValue.json';
import buildingCondition from './../Json/buildingCondition.json';
import smartHome from './../Json/smartHome.json';

// TODO all comps select something if must
// comp 10 limit years !!!

export const result = (calcValues) => {
  const bratislava = 252524;
  const averageTotalSquareMeterPrice = 3860;
  const averageTotalBratislavaSquareMeterPrice = 4073;
  let holdValue;
  let districtValueHold;
  let roomValueHold;
  let averageOfDistrictPlusRoom;
  const result = [];
  result.push(bratislava);

  const getDistrictPrice = (street) => {
    // kedy district = spolu?
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

  const getConditionPrice = (houseCondition) => {
    const getConditionCoeficient = (houseCondition) => {
      if (houseCondition === 1) return 1.7;
      if (houseCondition === 2) return 1.2;
      if (houseCondition === 3) return 0.65;
      if (houseCondition === 4) return 0.5;
    };

    averageOfDistrictPlusRoom = (districtValueHold + roomValueHold) / 2;
    console.log('averageOfDistrictPlusRoom', averageOfDistrictPlusRoom);

    const conditionPrice = Math.ceil(
      // hold is current roomsPrice
      averageOfDistrictPlusRoom * getConditionCoeficient(houseCondition),
    );
    console.log('conditionPrice', conditionPrice);
    result.push(conditionPrice);
  };

  getConditionPrice(calcValues.houseCondition);

  const getSquareMetersPrice = (squareMeters) => {
    const squareMetersPrice =
      (squareMeters * averageTotalSquareMeterPrice) / 2 +
      (squareMeters * averageTotalBratislavaSquareMeterPrice) / 2;
    console.log('squareMeterPrice', squareMetersPrice);
    result.push(squareMetersPrice);
    console.log('resArray', result);
  };

  getSquareMetersPrice(calcValues.squareMeters);

  const getFloorCountPrice = (allFloorsCount) => {
    const assignFloors = (allFloorsCount) => {
      if (allFloorsCount > 0 && allFloorsCount <= 4) return 4;
      if (allFloorsCount > 4 && allFloorsCount <= 12) return 12;
      if (allFloorsCount > 12 && allFloorsCount <= 19) return 19;
      if (allFloorsCount > 19 && allFloorsCount <= 100) return 20;
    };
    const floorsCounted = assignFloors(allFloorsCount);
    const { floorCountValue } = floorCountAndValue.find(
      (flrCnt) => flrCnt.floorCount == floorsCounted,
    );
    let newAverage = (averageOfDistrictPlusRoom + result[3] + result[4]) / 3;
    holdValue = newAverage;
    const floorCountPrice = Math.ceil(holdValue * floorCountValue);
    console.log('floorCountPrice', floorCountPrice);
    result.push(floorCountPrice);
    console.log('resArray', result);
  };

  getFloorCountPrice(calcValues.allFloorsCount);

  const getCurrentFloorPrice = (currentFloorNumber) => {
    const assignCurrentFloor = (currentFloorNumber) => {
      if (currentFloorNumber == 0 || currentFloorNumber == 1) return 0;
      if (currentFloorNumber > 1 && currentFloorNumber <= 12) return 2;
      if (currentFloorNumber > 12 && currentFloorNumber <= 19) return 13;
      if (currentFloorNumber > 19 && currentFloorNumber <= 100) return 20;
    };
    const currentFloorAssigned = assignCurrentFloor(currentFloorNumber);
    const flV = floorNumberAndValue.find(
      (flr) => flr.floorNumber == currentFloorAssigned,
    );

    console.log('flvl', flV);
    const { floorNumberValue } = floorNumberAndValue.find(
      (flr) => flr.floorNumber == currentFloorAssigned,
    );
    //const valueOfFindFloorAssign = floorNumberValue
    const currentFloorPrice = Math.ceil(holdValue * floorNumberValue);
    console.log('currentfloorPrice', currentFloorPrice);
    result.push(currentFloorPrice);
    console.log('resArray', result);
  };

  getCurrentFloorPrice(calcValues.currentFloorNumber);

  const getElevatorPrice = (hasElevator) => {
    let hasElevatorPrice;
    if (hasElevator === 'hasElevator') {
      hasElevatorPrice = holdValue;
    }
    if (hasElevator === 'noElevator') {
      hasElevatorPrice = holdValue - 10000;
    }
    console.log('hasElevatorPrice', hasElevatorPrice);
    result.push(hasElevatorPrice);
    console.log('resArray', result);
  };

  getElevatorPrice(calcValues.hasElevator);

  const getBalconyPrice = (hasBalcony, hasLoggia, hasTerrace, hasBasement) => {
    let balcony = Math.ceil(0.8 * holdValue);
    let loggia = Math.ceil(0.8 * holdValue);
    let terrace = Math.ceil(0.8 * holdValue);
    let basement = Math.ceil(0.8 * holdValue);
    if (hasBalcony) balcony = holdValue;
    if (hasLoggia) loggia = holdValue;
    if (hasTerrace) terrace = holdValue;
    if (hasBasement) basement = holdValue;
    console.log('balcony', balcony, loggia, terrace, basement);
    result.push(balcony);
    result.push(loggia);
    result.push(terrace);
    result.push(basement);
    console.log('resArray', result);
  };

  getBalconyPrice(
    calcValues.hasBalcony,
    calcValues.hasLoggia,
    calcValues.hasTerrace,
    calcValues.hasBasement,
  );

  const getParkingPrice = (hasGarage, hasParking) => {
    let garage = Math.ceil(0.8 * holdValue);
    let parking = Math.ceil(0.8 * holdValue);
    if (hasGarage) garage = holdValue;
    if (hasParking) parking = holdValue;
    console.log('parking', garage, parking);
    result.push(garage);
    result.push(parking);
    console.log('resArray', result);
  };

  getParkingPrice(calcValues.hasGarage, calcValues.hasParking);

  const getBuiltYearPrice = (builtYear) => {
    const assignYearValue = (builtYear) => {
      const currentYear = new Date().getFullYear();
      console.log('currentYear is', currentYear);
      // miesto 2023 dnesny rok
      if (builtYear >= 2018 && builtYear <= currentYear) return 1;
      if (builtYear >= 2010 && builtYear <= 2017) return 0.9;
      if (builtYear >= 2000 && builtYear <= 2009) return 0.85;
      if (builtYear >= 1989 && builtYear <= 1999) return 0.75;
      if (builtYear >= 1950 && builtYear <= 1988) return 0.5;
      if (builtYear < 1950) return 1;
    };

    const builtYearPrice = Math.ceil(assignYearValue(builtYear) * holdValue);
    console.log('builtYearPrice', builtYearPrice);
    result.push(builtYearPrice);
    console.log('resArray', result);
  };

  getBuiltYearPrice(calcValues.builtYear);

  const getBuildingConditionPrice = (
    hasIsolation,
    hasNewElevator,
    hasNewWindows,
    hasNewInstallations,
  ) => {
    let isolation;
    let elevator;
    let windows;
    let installations;
    if (hasIsolation) isolation = 'hasIsolation';
    if (!hasIsolation) isolation = 'noIsolation';
    if (hasNewElevator) elevator = 'hasNewElevator';
    if (!hasNewElevator) elevator = 'noNewElevator';
    if (hasNewWindows) windows = 'hasNewWindows';
    if (!hasNewWindows) windows = 'noNewWindows';
    if (hasNewInstallations) installations = 'hasNewInstallations';
    if (!hasNewInstallations) installations = 'noNewInstallations';

    const getCondition = (aspect) =>
      buildingCondition.find((cnd) => cnd.condition == aspect);

    const isolationResult = Math.ceil(
      getCondition(isolation).condValue * holdValue,
    );
    const elevatorResult = Math.ceil(
      getCondition(elevator).condValue * holdValue,
    );
    const windowsResult = Math.ceil(
      getCondition(windows).condValue * holdValue,
    );
    const installationsResult = Math.ceil(
      getCondition(installations).condValue * holdValue,
    );
    console.log(
      'buildingCondResults',
      isolationResult,
      elevatorResult,
      windowsResult,
      installationsResult,
    );
    result.push(isolationResult);
    result.push(elevatorResult);
    result.push(windowsResult);
    result.push(installationsResult);
    console.log('resArray', result);
  };

  getBuildingConditionPrice(
    calcValues.hasIsolation,
    calcValues.hasNewElevator,
    calcValues.hasNewWindows,
    calcValues.hasNewInstallations,
  );

  const getSmartHomePrice = (
    hasThermostat,
    hasInternet,
    hasAlarm,
    hasAirCon,
  ) => {
    let thermostat;
    let internet;
    let alarm;
    let aircon;
    if (hasThermostat) thermostat = 'hasThermostat';
    if (!hasThermostat) thermostat = 'noThermostat';
    if (hasInternet) internet = 'hasInternet';
    if (!hasInternet) internet = 'noInternet';
    if (hasAlarm) alarm = 'hasAlarm';
    if (!hasAlarm) alarm = 'noAlarm';
    if (hasAirCon) aircon = 'hasAirCon';
    if (!hasAirCon) aircon = 'noAirCon';

    const getCondition = (aspect) =>
      smartHome.find((cnd) => cnd.smartHome == aspect);

    const thermostatResult = Math.ceil(
      getCondition(thermostat).smartValue * holdValue,
    );
    const internetResult = Math.ceil(
      getCondition(internet).smartValue * holdValue,
    );
    const alarmResult = Math.ceil(getCondition(alarm).smartValue * holdValue);
    const airconResult = Math.ceil(getCondition(aircon).smartValue * holdValue);

    console.log(
      'smartResults',
      thermostatResult,
      internetResult,
      alarmResult,
      airconResult,
    );
    result.push(thermostatResult);
    result.push(internetResult);
    result.push(alarmResult);
    result.push(airconResult);
    console.log('resArray', result);
  };

  getSmartHomePrice(
    calcValues.hasThermostat,
    calcValues.hasInternet,
    calcValues.hasAlarm,
    calcValues.hasAirCon,
  );

  const getUrbanQualityPrice = (urbanQuality) => {
    console.log('uV', urbanQuality, holdValue);
    const getUrbanQualityCoeficient = (urbanQuality) => {
      if (urbanQuality === 'excellent') return 1;
      if (urbanQuality === 'average') return 0.9;
      if (urbanQuality === 'poor') return 0.75;
    };
    const urbanQualityPrice =
      getUrbanQualityCoeficient(urbanQuality) * holdValue;
    console.log('urbanQualityPrice', urbanQualityPrice);
    result.push(urbanQualityPrice);
    console.log('resArray', result);
  };

  getUrbanQualityPrice(calcValues.urbanQuality);

  // AVERAGE from result array
  const calculateAverage = (array) => {
    // Check if the array is not empty
    if (array.length === 0) {
      return 0; // or return undefined, depending on how you want to handle an empty array
    }
    // Calculate the sum of all values in the array
    const sum = array.reduce((acc, value) => acc + value, 0);
    // Calculate the average
    const average = sum / array.length;
    return average;
  };
  const averageOfAll = calculateAverage(result);
  let withProvision = Math.floor(averageOfAll);
  let price = Math.round(withProvision / 1000) * 1000;

  return {
    price,
  };
};
