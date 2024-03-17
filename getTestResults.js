// TEST TEST TEST TEST TEST
const bratislava = 252524
const averageTotalSquareMeterPrice = 3860
const averageTotalBratislavaSquareMeterPrice = 4073
let holdValue
const testResult = []
testResult.push(bratislava)

export const getTestResult = (street) => {
  const { district } = streetAndDistrict.find((strt) => strt.street === street)
  console.log('district', district)

  const { districtPrice } = districtAndPrice.find(
    (dsrct) => dsrct.district === district
  )
  console.log('districtPrice', districtPrice)
  testResult.push(districtPrice)
  console.log('resArray', testResult)

  let countRooms = 1

  const { roomsPrice } = roomsAndPrice.find(
    (rooms) => rooms.rooms == countRooms
  )
  console.log('roomsPrice', roomsPrice)
  testResult.push(roomsPrice)
  console.log(testResult)
  // assign holdValue to current roomsPrice
  holdValue = roomsPrice

  const getConditionCoeficient = (houseCondition) => {
    if (houseCondition === 1) return 1
    if (houseCondition === 2) return 0.8
    if (houseCondition === 3) return 0.65
    if (houseCondition === 4) return 0.5
  }

  let houseCondition = 4
  const conditionPrice = Math.ceil(
    // hold is current roomsPrice
    holdValue * getConditionCoeficient(houseCondition)
  )
  console.log('conditionPrice', conditionPrice)
  testResult.push(conditionPrice)
  console.log(testResult)

  let squareMeters = 36

  const squareMetersPrice =
    (squareMeters * averageTotalSquareMeterPrice) / 2 +
    (squareMeters * averageTotalBratislavaSquareMeterPrice) / 2
  console.log('squareMeterPrice', squareMetersPrice)
  testResult.push(squareMetersPrice)
  console.log('resArray', testResult)

  let allFloorsCount = 5

  const assignFloors = (allFloorsCount) => {
    if (allFloorsCount > 0 && allFloorsCount <= 4) return 4
    if (allFloorsCount > 4 && allFloorsCount <= 12) return 12
    if (allFloorsCount > 12 && allFloorsCount <= 19) return 19
    if (allFloorsCount > 19 && allFloorsCount <= 100) return 20
  }
  const floorsCounted = assignFloors(allFloorsCount)
  const { floorCountValue } = floorCountAndValue.find(
    (flrCnt) => flrCnt.floorCount == floorsCounted
  )
  const floorCountPrice = Math.ceil(holdValue * floorCountValue)
  console.log('floorCountPrice', floorCountPrice)
  testResult.push(floorCountPrice)
  console.log('resArray', testResult)

  let currentFloorNumber = 2

  const assignCurrentFloor = (currentFloorNumber) => {
    if (currentFloorNumber === 0 || currentFloorNumber === 1) return 0
    if (currentFloorNumber > 1 && currentFloorNumber <= 12) return 2
    if (currentFloorNumber > 12 && currentFloorNumber <= 19) return 13
    if (currentFloorNumber > 19 && currentFloorNumber <= 100) return 20
  }
  const currentFloorAssigned = assignCurrentFloor(currentFloorNumber)
  const { floorNumberValue } = floorNumberAndValue.find(
    (flr) => flr.floorNumber == currentFloorAssigned
  )
  //const valueOfFindFloorAssign = floorNumberValue
  const currentFloorPrice = Math.ceil(holdValue * floorNumberValue)
  console.log('currentfloorPrice', currentFloorPrice)
  testResult.push(currentFloorPrice)
  console.log('resArray', testResult)
  // here defined
  let hasElevator = 'hasElevator'
  let hasElevatorPrice
  if (hasElevator === 'hasElevator') {
    hasElevatorPrice = holdValue
  }
  if (hasElevator === 'noElevator') {
    hasElevatorPrice = holdValue - 10000
  }
  console.log('hasElevatorPrice', hasElevatorPrice)
  testResult.push(hasElevatorPrice)
  console.log('resArray', testResult)
  let hasBalcony = false
  let hasLoggia = false
  let hasTerrace = false
  let hasBasement = false
  let balcony = Math.ceil(0.8 * holdValue)
  let loggia = Math.ceil(0.8 * holdValue)
  let terrace = Math.ceil(0.8 * holdValue)
  let basement = Math.ceil(0.8 * holdValue)
  if (hasBalcony) balcony = holdValue
  if (hasLoggia) loggia = holdValue
  if (hasTerrace) terrace = holdValue
  if (hasBasement) basement = holdValue
  testResult.push(balcony)
  testResult.push(loggia)
  testResult.push(terrace)
  testResult.push(basement)
  console.log('resArray', testResult)

  let hasGarage = false
  let hasParking = false
  let garage = Math.ceil(0.8 * holdValue)
  let parking = Math.ceil(0.8 * holdValue)
  if (hasGarage) garage = holdValue
  if (hasParking) parking = holdValue
  console.log('parking', garage, parking)
  testResult.push(garage)
  testResult.push(parking)
  console.log('resArray', testResult)

  const assignYearValue = (builtYear) => {
    if (builtYear >= 2018 && builtYear <= 2023) return 1
    if (builtYear >= 2010 && builtYear <= 2017) return 0.9
    if (builtYear >= 2000 && builtYear <= 2009) return 0.85
    if (builtYear >= 1989 && builtYear <= 1999) return 0.75
    if (builtYear >= 1950 && builtYear <= 1988) return 0.5
    if (builtYear < 1950) return 1
  }

  let builtYear = 1988

  const builtYearPrice = Math.ceil(assignYearValue(builtYear) * holdValue)
  console.log('builtYearPrice', builtYearPrice)
  testResult.push(builtYearPrice)
  console.log('resArray', testResult)

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
    buildingCondition.find((cnd) => cnd.condition == aspect)

  const isolationResult = Math.ceil(
    getCondition(isolation).condValue * holdValue
  )
  const elevatorResult = Math.ceil(getCondition(elevator).condValue * holdValue)
  const windowsResult = Math.ceil(getCondition(windows).condValue * holdValue)
  const installationsResult = Math.ceil(
    getCondition(installations).condValue * holdValue
  )

  console.log(
    'buildingCondResults',
    isolationResult,
    elevatorResult,
    windowsResult,
    installationsResult
  )
  testResult.push(isolationResult)
  testResult.push(elevatorResult)
  testResult.push(windowsResult)
  testResult.push(installationsResult)
  console.log('resArray', testResult)

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

  console.log(
    'smartResults',
    thermostatResult,
    internetResult,
    alarmResult,
    airconResult
  )
  testResult.push(thermostatResult)
  testResult.push(internetResult)
  testResult.push(alarmResult)
  testResult.push(airconResult)
  console.log('resArray', testResult)

  let urbanQuality = 'excellent'

  const getUrbanQualityCoeficient = (urbanQuality) => {
    if (urbanQuality === 'excellent') return 1
    if (urbanQuality === 'average') return 0.9
    if (urbanQuality === 'poor') return 0.75
  }
  const urbanQualityPrice = getUrbanQualityCoeficient(urbanQuality) * holdValue
  console.log('urbanQualityPrice', urbanQualityPrice)
  testResult.push(urbanQualityPrice)
  console.log('resArray', testResult)

  // AVERAGE from result array
  const calculateAverage = (array) => {
    // Check if the array is not empty
    if (array.length === 0) {
      return 0 // or return undefined, depending on how you want to handle an empty array
    }
    // Calculate the sum of all values in the array
    const sum = array.reduce((acc, value) => acc + value, 0)
    // Calculate the average
    const average = sum / array.length
    return average
  }
  const averageOfAll = calculateAverage(testResult)

  // Add or subtract 5% to the original value
  let averageHigh = Math.ceil(averageOfAll * 1.05)
  let averageLow = Math.ceil(averageOfAll * 0.95)

  console.log(
    'average',
    averageOfAll,
    'averageLow',
    averageLow,
    'averageHigh',
    averageHigh
  )

  //return cast
}

//getTestResult('Muškátová ulica')
