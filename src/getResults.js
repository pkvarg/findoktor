import streetInfo from './../uliceCast.json'
import districtInfo from './../castCena.json'

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
  hasGarage,
  builtYear,
  buildingConditions,
  smartHomeItems,
  monthlyCosts,
  urbanQuality,
  email
) => {
  const bratislava = 252524
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

  getDistrict('Bottova ulica')
  console.log(
    'getting results..',
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
    hasGarage,
    builtYear,
    buildingConditions,
    smartHomeItems,
    monthlyCosts,
    urbanQuality,
    email
  )
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
  //   hasGarage,
  //   builtYear,
  //   buildingConditions,
  //   smartHomeItems,
  //   monthlyCosts,
  //   urbanQuality,
  //   email
  // )
}

const getDistrict = (street) => {
  const { cast } = streetInfo.find((strt) => strt.ulica === street)
  console.log(cast)
  const { cena } = districtInfo.find((dsrct) => dsrct.okres === cast)
  console.log(cena)
  return cast
}

getDistrict('Muškátová ulica')
