import React, { useEffect, useState } from 'react'
import CalcNavbar from '../components/calculator/CalcNavbar'
import Component00 from '../components/calculator/component00'
import Component01 from '../components/calculator/Component01'
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
import Footer from '../components/Footer'

const Calculator = () => {
  const [flatOrHouse, setFlatOrHouse] = useState('')
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
  const [smartHomeItems, setSmartHomeItems] = useState('')
  const [monthlyCosts, setMonthlyCosts] = useState(0)
  const [urbanQuality, setUrbanQuality] = useState('')
  const [email, setEmail] = useState('')
  const [checkBox, setCheckBox] = useState(false)
  const [
    minPriceWithoutRealEstateAssistance,
    setMinPriceWithoutRealEstateAssistance,
  ] = useState(0)

  const [
    maxPriceWithoutRealEstateAssistance,
    setMaxPriceWithoutRealEstateAssistance,
  ] = useState(0)

  const [
    minPriceWithRealEstateAssistance,
    setMinPriceWithRealEstateAssistance,
  ] = useState(0)

  const [
    maxPriceWithRealEstateAssistance,
    setMaxPriceWithRealEstateAssistance,
  ] = useState(0)

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
    buildingConditions,
    smartHomeItems,
    monthlyCosts,
    urbanQuality,
    email,
    checkBox,
    minPriceWithoutRealEstateAssistance,
    maxPriceWithoutRealEstateAssistance,
    minPriceWithRealEstateAssistance,
    maxPriceWithRealEstateAssistance
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

  const [currentSmartHomeItemsClicked, setCurrentSmartHomeItemsClicked] =
    useState(null)

  const [currentUrbanQualityClicked, setCurrentUrbanQualityClicked] =
    useState(null)

  const [currentFlatOrHouseClicked, setCurrentFlatOrHouseClicked] =
    useState(null)

  const [currentComponent, setCurrentComponent] = useState(0)

  const handleNext = () => {
    if (currentComponent < 16) {
      setCurrentComponent(currentComponent + 1)
    }
  }

  const handleBack = () => {
    if (currentComponent > 0) {
      setCurrentComponent(currentComponent - 1)
    }
  }

  const renderComponent = (componentNumber) => {
    switch (componentNumber) {
      case 0:
        return (
          <Component00
            onNext={handleNext}
            handleFlatOrHouse={handleFlatOrHouse}
          />
        )
      case 1:
        return (
          <Component01
            onBack={handleBack}
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

      case 12:
        return (
          <Component12
            onBack={handleBack}
            onNext={handleNext}
            handleSmartHomeItems={handleSmartHomeItems}
          />
        )

      case 13:
        return (
          <Component13
            onBack={handleBack}
            onNext={handleNext}
            monthlyCosts={monthlyCosts}
            setMonthlyCosts={setMonthlyCosts}
          />
        )

      case 14:
        return (
          <Component14
            onBack={handleBack}
            onNext={handleNext}
            handleUrbanQuality={handleUrbanQuality}
          />
        )

      case 15:
        return (
          <Component15
            onBack={handleBack}
            onNext={handleNext}
            isValid={isValid}
            email={email}
            setEmail={setEmail}
            checkBox={checkBox}
            setCheckBox={setCheckBox}
          />
        )
      case 16:
        return (
          <Component16
            onBack={handleBack}
            minPriceWithoutRealEstateAssistance={
              minPriceWithoutRealEstateAssistance
            }
            maxPriceWithoutRealEstateAssistance={
              maxPriceWithoutRealEstateAssistance
            }
            minPriceWithRealEstateAssistance={minPriceWithRealEstateAssistance}
            maxPriceWithRealEstateAssistance={maxPriceWithRealEstateAssistance}
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

  const handleSmartHomeItems = (item) => {
    console.log(item)
    if (currentSmartHomeItemsClicked !== null) {
      const toRemoveFrom = document.getElementById(currentSmartHomeItemsClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    setSmartHomeItems(item)
    setCurrentSmartHomeItemsClicked(item)
    const element = document.getElementById(item)
    element.classList.add('clicked')
  }

  const handleUrbanQuality = (quality) => {
    console.log(quality)
    if (currentUrbanQualityClicked !== null) {
      const toRemoveFrom = document.getElementById(currentUrbanQualityClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    setUrbanQuality(quality)
    setCurrentUrbanQualityClicked(quality)
    const element = document.getElementById(quality)
    element.classList.add('clicked')
  }

  const handleFlatOrHouse = (building) => {
    console.log(building)
    if (currentFlatOrHouseClicked !== null) {
      const toRemoveFrom = document.getElementById(currentFlatOrHouseClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    setFlatOrHouse(building)
    setCurrentFlatOrHouseClicked(building)
    const element = document.getElementById(building)
    element.classList.add('clicked')
    setTimeout(handleNext, 1000)
  }

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (email !== '') {
      setIsValid(validateEmail(email))
    }
  }, [email])

  console.log('isThisValid', isValid)

  return (
    <div className='text-black bg-white text-[30px]'>
      {/* <Component00 onNext={handleNext} handleFlatOrHouse={handleFlatOrHouse} /> */}
      <div className='flex flex-col items-center relative'>
        <CalcNavbar />
        <form>{renderComponent(currentComponent)}</form>
        <Footer />
      </div>
    </div>
  )
}

export default Calculator
