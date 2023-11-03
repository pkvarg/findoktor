import React, { useState } from 'react'
import Component00 from '../components/calculator/component00'
import Component01 from '../components/calculator/component01'
import Component02 from '../components/calculator/Component02'
import Component03 from '../components/calculator/Component03'
import Component04 from '../components/calculator/Component04'
import Component05 from '../components/calculator/Component05'
import Component06 from '../components/calculator/Component06'
import Component07 from '../components/calculator/Component07'
import Component08 from '../components/calculator/component08'
import Component09 from '../components/calculator/component09'
import Component10 from '../components/calculator/Component10'
import Component11 from '../components/calculator/Component11'
import Component12 from '../components/calculator/Component12'
import Component13 from '../components/calculator/Component13'
import Component14 from '../components/calculator/Component14'
import Component15 from '../components/calculator/Component15'
import Component16 from '../components/calculator/component16'

const Calculator = () => {
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [countRooms, setCountRooms] = useState(0)
  const [houseCondition, setHouseCondition] = useState(0)
  const [squareMeters, setSquareMeters] = useState(0)
  const [allFloorsCount, setAllFloorsCount] = useState(0)
  const [currentFloorNumber, setCurrentFloorNumber] = useState(0)
  const [hasElevator, setHasElevator] = useState('')
  const [hasBalcony, setHasBalcony] = useState('')
  const [hasGarage, setHasGarage] = useState('')
  const [builtYear, setBuiltYear] = useState(0)
  const [buildingConditions, setBuildingConditions] = useState('')

  console.log(
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
    buildingConditions
  )

  const [currentlyClicked, setCurrentlyClicked] = useState(null)
  const [currentConditionClicked, setCurrentConditionClicked] = useState(null)
  const [currentElevatorStatusClicked, setCurrentElevatorStatusClicked] =
    useState(null)
  const [currentBalconyStatusClicked, setCurrentBalconyStatusClicked] =
    useState(null)
  const [currentGarageStatusClicked, setCurrentGarageStatusClicked] =
    useState(null)

  const [
    currentBuildingConditionStatusClicked,
    setCurrentBuildingConditionStatusClicked,
  ] = useState(null)

  const [currentComponent, setCurrentComponent] = useState(1)

  const handleNext = () => {
    if (currentComponent < 16) {
      setCurrentComponent(currentComponent + 1)
    }
  }

  const handleBack = () => {
    if (currentComponent > 1) {
      setCurrentComponent(currentComponent - 1)
    }
  }

  const renderComponent = (componentNumber) => {
    switch (componentNumber) {
      case 1:
        return (
          <Component01
            onNext={handleNext}
            city={city}
            setCity={setCity}
            street={street}
            setStreet={setStreet}
            houseNumber={houseNumber}
            setHouseNumber={setHouseNumber}
          />
        )
      case 2:
        return (
          <Component02
            onBack={handleBack}
            onNext={handleNext}
            handleCountRoomClick={handleCountRoomClick}
          />
        )
      case 3:
        return (
          <Component03
            onBack={handleBack}
            onNext={handleNext}
            handleHouseCondition={handleHouseCondition}
          />
        )
      case 4:
        return (
          <Component04
            onBack={handleBack}
            onNext={handleNext}
            squareMeters={squareMeters}
            setSquareMeters={setSquareMeters}
          />
        )
      case 5:
        return (
          <Component05
            onBack={handleBack}
            onNext={handleNext}
            allFloorsCount={allFloorsCount}
            setAllFloorsCount={setAllFloorsCount}
          />
        )
      case 6:
        return (
          <Component06
            onBack={handleBack}
            onNext={handleNext}
            currentFloorNumber={currentFloorNumber}
            setCurrentFloorNumber={setCurrentFloorNumber}
          />
        )
      case 7:
        return (
          <Component07
            onBack={handleBack}
            onNext={handleNext}
            handleHasElevator={handleHasElevator}
          />
        )

      case 8:
        return (
          <Component08
            onBack={handleBack}
            onNext={handleNext}
            handleHasBalcony={handleHasBalcony}
          />
        )

      case 9:
        return (
          <Component09
            onBack={handleBack}
            onNext={handleNext}
            handleHasGarage={handleHasGarage}
          />
        )

      case 10:
        return (
          <Component10
            onBack={handleBack}
            onNext={handleNext}
            builtYear={builtYear}
            setBuiltYear={setBuiltYear}
          />
        )

        case 11:
          return (
            <Component11
              onBack={handleBack}
              onNext={handleNext}
              handleBuildingCondition={handleBuildingCondition}
            />
          )

      default:
        return null
    }
  }

  const handleCountRoomClick = (count) => {
    if (currentlyClicked !== null) {
      const toRemoveFrom = document.getElementById(currentlyClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    console.log(count)
    setCountRooms(count)
    setCurrentlyClicked(count)
    const element = document.getElementById(count)
    element.classList.add('clicked')
  }

  const handleHouseCondition = (num) => {
    console.log(num)
    if (currentConditionClicked !== null) {
      const toRemoveFrom = document.getElementById(currentConditionClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    setHouseCondition(num)
    setCurrentConditionClicked(num)
    const element = document.getElementById(num)
    element.classList.add('clicked')
  }

  const handleHasElevator = (elevator) => {
    console.log(elevator)
    if (currentElevatorStatusClicked !== null) {
      const toRemoveFrom = document.getElementById(currentElevatorStatusClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    setHasElevator(elevator)
    setCurrentElevatorStatusClicked(elevator)
    const element = document.getElementById(elevator)
    element.classList.add('clicked')
  }

  const handleHasBalcony = (balcony) => {
    console.log(balcony)
    if (currentBalconyStatusClicked !== null) {
      const toRemoveFrom = document.getElementById(currentBalconyStatusClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    setHasBalcony(balcony)
    setCurrentBalconyStatusClicked(balcony)
    const element = document.getElementById(balcony)
    element.classList.add('clicked')
  }

  const handleHasGarage = (garage) => {
    console.log(garage)
    if (currentGarageStatusClicked !== null) {
      const toRemoveFrom = document.getElementById(currentGarageStatusClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    setHasGarage(garage)
    setCurrentGarageStatusClicked(garage)
    const element = document.getElementById(garage)
    element.classList.add('clicked')
  }

  const handleBuildingCondition = (condition) => {
    console.log(condition)
    if (currentBuildingConditionStatusClicked !== null) {
      const toRemoveFrom = document.getElementById(
        currentBuildingConditionStatusClicked
      )
      toRemoveFrom.classList.remove('clicked')
    }
    setBuildingConditions(condition)
    setCurrentBuildingConditionStatusClicked(condition)
    const element = document.getElementById(condition)
    element.classList.add('clicked')
  }

  return (
    <div className='text-black bg-white text-[30px]'>
      {renderComponent(currentComponent)}
    </div>
  )
}

export default Calculator
