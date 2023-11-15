import streetInfo from './../uliceCast.json'
import districtInfo from './../castCena.json'
import roomInfo from './../izbyCena.json'
import floorsCount from './../pocetPosch.json'
import floorNumber from './../cisloPosch.json'
import houseCondition from './../houseCondition.json'
import smartHome from './../smartHome.json'

// TODO all comps select something if must
// comp 10 limit years !!!

export const result = (
  city,
  street,
  houseNumber,
  countRooms,
  houseCondition,
  squareMeters,
  allFloorsCount,
  currentFloorNumber,
  hasElevator,
  hasBalcony,
  hasLoggia,
  hasTerasa,
  hasBasement,
  hasGarage,
  hasParking,
  builtYear,
  hasIsolation,
  hasNewElevator,
  hasNewWindows,
  hasNewInstallations,
  hasThermostat,
  hasInternet,
  hasAlarm,
  hasAirCon,
  monthlyCosts,
  urbanQuality,
  email
) => {
  const bratislava = 252524
  const priemCenaIzbySpolu = 3860
  const priemCenaBaSpolu = 4073
  let holdValue

  const getDistrict = (street) => {
    const { cast } = streetInfo.find((strt) => strt.ulica === street)
    console.log(cast)
    return cast
  }

  const getDistrictPrice = (district) => {
    // kedy district = spolu?
    const { cena } = districtInfo.find((dsrct) => dsrct.okres === district)
    console.log(cena)
    return cena
  }

  // condition coeficient
  const getHouseConditionCoeficient = (houseCondition) => {
    if (houseCondition === '1') return 1
    if (houseCondition === '2') return 0.8
    if (houseCondition === '3') return 0.65
    if (houseCondition === '4') return 0.5
  }

  // two steps
  const getRoomAndConditionPrice = (countRooms) => {
    // kedy district = spolu?
    const izbaCena = roomInfo.find((room) => room.izby === countRooms)
    const resIzba = izbaCena.cena
    // assign holdValue
    holdValue = resIzba
    const conditionPrice = Math.ceil(
      resIzba * getHouseConditionCoeficient(houseCondition)
    )
    console.log('izba', resIzba, 'stav', conditionPrice)

    return conditionPrice
  }

  getSquareMetersPrice = (squareMeters) => {
    const squareMetersPrice =
      (squareMeters * priemCenaIzbySpolu) / 2 +
      (squareMeters * priemCenaBaSpolu) / 2
    console.log(squareMetersPrice)
    return squareMetersPrice
  }
  //helper
  const assignFloors = (allFloorsCount) => {
    if (allFloorsCount > 0 && allFloorsCount <= 4) return 4
    if (allFloorsCount > 4 && allFloorsCount <= 12) return 12
    if (allFloorsCount > 12 && allFloorsCount <= 19) return 19
    if (allFloorsCount > 19 && allFloorsCount <= 100) return 20
  }

  const getFloorCountPrice = () => {
    const floorsCounted = assignFloors(allFloorsCount)
    const { hodnota } = floorsCount.find(
      (flrCnt) => flrCnt.pocetPosch == floorsCounted
    )
    const floorCountPrice = Math.ceil(holdValue * hodnota)
    console.log('floorCountPrice', floorCountPrice)
  }

  //helper
  const assignCurrentFloor = (currentFloorNumber) => {
    if (currentFloorNumber === 0 || currentFloorNumber === 1) return 0
    if (currentFloorNumber > 1 && currentFloorNumber <= 12) return 2
    if (currentFloorNumber > 12 && currentFloorNumber <= 19) return 13
    if (currentFloorNumber > 19 && currentFloorNumber <= 100) return 20
  }

  const getCurrentFloorPrice = (currentFloorNumber) => {
    const currentFloorAssigned = assignCurrentFloor(currentFloorNumber)
    const findFloorAssign = floorNumber.find(
      (flr) => flr.cisloPosch == currentFloorAssigned
    )
    const valueOfFindFloorAssign = findFloorAssign.hodnota
    const valueOfCurrentFloorPrice = Math.ceil(
      holdValue * valueOfFindFloorAssign
    )
    console.log('currentfloorPrice', valueOfCurrentFloorPrice)
  }

  const getHasElevatorPrice = (hasElevator) => {
    let hasElevatorPrice
    if (hasElevator === 'elevatorTrue') {
      hasElevatorPrice = holdValue
    }
    if (hasElevator === 'elevatorFalse') {
      hasElevatorPrice = holdValue - 10000
    }
    console.log('hasElevatorPrice', hasElevatorPrice)
  }

  const getBalconyStuff = (hasBalcony, hasLoggia, hasTerasa, hasBasement) => {
    let balcony = Math.ceil(0.8 * holdValue)
    let loggia = Math.ceil(0.8 * holdValue)
    let terasa = Math.ceil(0.8 * holdValue)
    let basement = Math.ceil(0.8 * holdValue)
    if (hasBalcony) balcony = holdValue
    if (hasLoggia) loggia = holdValue
    if (hasTerasa) terasa = holdValue
    if (hasBasement) basement = holdValue
    console.log('balcony', balcony, loggia, terasa, basement)
    return { balcony, loggia, terasa, basement }
  }

  const getParking = (hasGarage, hasParking) => {
    let garage = Math.ceil(0.8 * holdValue)
    let parking = Math.ceil(0.8 * holdValue)
    if (hasGarage) garage = holdValue
    if (hasParking) parking = holdValue
    console.log('parking', garage, parking)
    return { garage, parking }
  }

  //helper
  const assignYearValue = (builtYear) => {
    if (builtYear >= 2018 && builtYear <= 2023) return 1
    if (builtYear >= 2010 && builtYear <= 2017) return 0.9
    if (builtYear >= 2000 && builtYear <= 2009) return 0.85
    if (builtYear >= 1989 && builtYear <= 1999) return 0.75
    if (builtYear >= 1950 && builtYear <= 1989) return 0.5
    if (builtYear < 1950) return 1
  }

  const getBuiltYearPrice = (builtYear) => {
    const builtYearPrice = Math.ceil(assignYearValue(builtYear) * holdValue)
    console.log('builtYearPrice', builtYearPrice)
    return builtYearPrice
  }

  const getHouseNewCondition = (
    hasIsolation,
    hasNewElevator,
    hasNewWindows,
    hasNewInstallations
  ) => {
    let isolation
    let elevator
    let windows
    let installations
    if (hasIsolation) isolation = 'hasIsolation'
    if (!hasIsolation) isolation = 'noIsolation'
    if (hasNewElevator) elevator = 'hasNewElevator'
    if (!hasNewElevator) elevator = 'noNewElevator'
    if (hasNewWindows) windows = 'hasNewWindows'
    if (!hasNewWindows) windows = 'noNewWindows'
    if (hasNewInstallations) installations = 'hasNewInstallations'
    if (!hasNewInstallations) installations = 'noNewInstallations'

    const getCondition = (aspect) =>
      houseCondition.find((cnd) => cnd.condition == aspect)

    const isolationResult = Math.ceil(
      getCondition(isolation).condValue * holdValue
    )
    const elevatorResult = Math.ceil(
      getCondition(elevator).condValue * holdValue
    )
    const windowsResult = Math.ceil(getCondition(windows).condValue * holdValue)
    const installationsResult = Math.ceil(
      getCondition(installations).condValue * holdValue
    )

    const condResult = {
      isolationResult,
      elevatorResult,
      windowsResult,
      installationsResult,
    }

    console.log(condResult)
    return condResult
  }

  const getSmartHomeCondition = (
    hasThermostat,
    hasInternet,
    hasAlarm,
    hasAirCon
  ) => {
    let thermostat
    let internet
    let alarm
    let aircon
    if (hasThermostat) thermostat = 'hasThermostat'
    if (!hasThermostat) thermostat = 'noThermostat'
    if (hasInternet) internet = 'hasInternet'
    if (!hasInternet) internet = 'noInternet'
    if (hasAlarm) alarm = 'hasAlarm'
    if (!hasAlarm) alarm = 'noAlarm'
    if (hasAirCon) aircon = 'hasAirCon'
    if (!hasAirCon) aircon = 'noAirCon'

    const getCondition = (aspect) =>
      smartHome.find((cnd) => cnd.smartHome == aspect)

    const thermostatResult = Math.ceil(
      getCondition(thermostat).smartValue * holdValue
    )
    const internetResult = Math.ceil(
      getCondition(internet).smartValue * holdValue
    )
    const alarmResult = Math.ceil(getCondition(alarm).smartValue * holdValue)
    const airconResult = Math.ceil(getCondition(aircon).smartValue * holdValue)

    const condResult = {
      thermostatResult,
      internetResult,
      alarmResult,
      airconResult,
    }

    console.log(condResult)
    return condResult
  }

  // console.log(
  //   'getting results..',
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
  //   hasGarage,
  //   builtYear,
  //   buildingConditions,
  //   smartHomeItems,
  //   monthlyCosts,
  //   urbanQuality,
  //   email
  // )
  // console.log(
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
  // hasLoggia,
  //  hasTerasa,
  //  hasBasement,
  //   hasGarage,
  // hasParking,
  //   builtYear,
  // hasIsolation,
  // hasNewElevator,
  // hasNewWindows,
  // hasNewInstallations,
  //   hasThermostat,
  // hasInternet,
  // hasAlarm,
  // hasAirCon,
  //   monthlyCosts,
  //   urbanQuality,
  //   email
  // )
}

// TEST TEST TEST TEST TEST

const priemCenaIzbySpolu = 3860
const priemCenaBaSpolu = 4073
let holdValue

// condition coeficient
const getHouseConditionCoeficient = (houseCondition) => {
  if (houseCondition === '1') return Number(1)
  if (houseCondition === '2') return Number(0.8)
  if (houseCondition === '3') return Number(0.65)
  if (houseCondition === '4') return Number(0.5)
}
//assign Floors
const assignFloors = (allFloorsCount) => {
  if (allFloorsCount > 0 && allFloorsCount <= 4) return 4
  if (allFloorsCount > 4 && allFloorsCount <= 12) return 12
  if (allFloorsCount > 12 && allFloorsCount <= 19) return 19
  if (allFloorsCount > 19 && allFloorsCount <= 100) return 20
}

//helper
const assignCurrentFloor = (currentFloorNumber) => {
  if (currentFloorNumber === 0 || currentFloorNumber === 1) return 0
  if (currentFloorNumber > 1 && currentFloorNumber <= 12) return 2
  if (currentFloorNumber > 12 && currentFloorNumber <= 19) return 13
  if (currentFloorNumber > 19 && currentFloorNumber <= 100) return 20
}

const getDistrict = (street) => {
  const { cast } = streetInfo.find((strt) => strt.ulica === street)
  console.log('cast', cast)
  const { cena } = districtInfo.find((dsrct) => dsrct.okres === cast)
  console.log('cast', cena)
  const izbaCena = roomInfo.find((room) => room.izby === '1')
  const resIzba = izbaCena.cena
  holdValue = resIzba
  const conditionPrice = Math.ceil(resIzba * getHouseConditionCoeficient('4'))
  console.log('izba', resIzba, 'stav', conditionPrice)
  const squareMetersPrice =
    (36 * priemCenaIzbySpolu) / 2 + (36 * priemCenaBaSpolu) / 2
  console.log('sqmPrice', squareMetersPrice)

  const floorsCounted = assignFloors(5)
  const { hodnota } = floorsCount.find(
    (flrCnt) => flrCnt.pocetPosch == floorsCounted
  )
  const floorCountPrice = Math.ceil(holdValue * hodnota)
  console.log('floorCountPrice', floorCountPrice)

  const currentFloorAssigned = assignCurrentFloor(2)
  const findFloorAssign = floorNumber.find(
    (flr) => flr.cisloPosch == currentFloorAssigned
  )
  const valueOfFindFloorAssign = findFloorAssign.hodnota
  const valueOfCurrentFloorPrice = Math.ceil(holdValue * valueOfFindFloorAssign)
  console.log('currentfloorPrice', valueOfCurrentFloorPrice)
  // here defined
  let hasElevator = 'elevatorFalse'
  let hasElevatorPrice
  if (hasElevator === 'elevatorTrue') {
    hasElevatorPrice = holdValue
  }
  if (hasElevator === 'elevatorFalse') {
    hasElevatorPrice = holdValue - 10000
  }

  console.log('hasElevatorPrice', hasElevatorPrice)
  let hasBalcony = false
  let hasLoggia = true
  let hasTerasa = true
  let hasBasement = true
  let balcony = Math.ceil(0.8 * holdValue)
  let loggia = Math.ceil(0.8 * holdValue)
  let terasa = Math.ceil(0.8 * holdValue)
  let basement = Math.ceil(0.8 * holdValue)
  if (hasBalcony) balcony = holdValue
  if (hasLoggia) loggia = holdValue
  if (hasTerasa) terasa = holdValue
  if (hasBasement) basement = holdValue
  console.log('balcony', balcony, loggia, terasa, basement)

  let hasGarage = false
  let hasParking = true
  let garage = Math.ceil(0.8 * holdValue)
  let parking = Math.ceil(0.8 * holdValue)
  if (hasGarage) garage = holdValue
  if (hasParking) parking = holdValue
  console.log('parking', garage, parking)

  // helper
  const assignYearValue = (builtYear) => {
    if (builtYear >= 2018 && builtYear <= 2023) return 1
    if (builtYear >= 2010 && builtYear <= 2017) return 0.9
    if (builtYear >= 2000 && builtYear <= 2009) return 0.85
    if (builtYear >= 1989 && builtYear <= 1999) return 0.75
    if (builtYear >= 1950 && builtYear <= 1989) return 0.5
    if (builtYear < 1950) return 1
  }

  const builtYearPrice = Math.ceil(assignYearValue(1950) * holdValue)

  console.log('builtYearPrice', builtYearPrice)

  let hasIsolation = true
  let hasNewElevator = true
  let hasNewWindows = true
  let hasNewInstallations = true

  let isolation
  let elevator
  let windows
  let installations
  if (hasIsolation) isolation = 'hasIsolation'
  if (!hasIsolation) isolation = 'noIsolation'
  if (hasNewElevator) elevator = 'hasNewElevator'
  if (!hasNewElevator) elevator = 'noNewElevator'
  if (hasNewWindows) windows = 'hasNewWindows'
  if (!hasNewWindows) windows = 'noNewWindows'
  if (hasNewInstallations) installations = 'hasNewInstallations'
  if (!hasNewInstallations) installations = 'noNewInstallations'

  const getCondition = (aspect) =>
    houseCondition.find((cnd) => cnd.condition == aspect)

  const isolationResult = Math.ceil(
    getCondition(isolation).condValue * holdValue
  )
  const elevatorResult = Math.ceil(getCondition(elevator).condValue * holdValue)
  const windowsResult = Math.ceil(getCondition(windows).condValue * holdValue)
  const installationsResult = Math.ceil(
    getCondition(installations).condValue * holdValue
  )

  const condResult = {
    isolationResult,
    elevatorResult,
    windowsResult,
    installationsResult,
  }
  console.log(condResult)

  let hasThermostat = false
  let hasInternet = true
  let hasAlarm = false
  let hasAirCon = false
  let thermostat
  let internet
  let alarm
  let aircon
  if (hasThermostat) thermostat = 'hasThermostat'
  if (!hasThermostat) thermostat = 'noThermostat'
  if (hasInternet) internet = 'hasInternet'
  if (!hasInternet) internet = 'noInternet'
  if (hasAlarm) alarm = 'hasAlarm'
  if (!hasAlarm) alarm = 'noAlarm'
  if (hasAirCon) aircon = 'hasAirCon'
  if (!hasAirCon) aircon = 'noAirCon'

  const getSmartCondition = (aspect) =>
    smartHome.find((cnd) => cnd.smartHome === aspect)

  const thermostatResult = Math.ceil(
    getSmartCondition(thermostat).smartValue * holdValue
  )
  const internetResult = Math.ceil(
    getSmartCondition(internet).smartValue * holdValue
  )
  const alarmResult = Math.ceil(getSmartCondition(alarm).smartValue * holdValue)
  const airconResult = Math.ceil(
    getSmartCondition(aircon).smartValue * holdValue
  )

  const smartResult = {
    thermostatResult,
    internetResult,
    alarmResult,
    airconResult,
  }

  console.log(smartResult)

  //return cast
}

getDistrict('Muškátová ulica')
