import React, { lazy, Suspense, useEffect, useState } from 'react'
// import CalcNavbar from '../components/calculator/CalcNavbar'
// import Component00 from '../components/calculator/component00'
// import Component01 from '../components/calculator/Component01'
// import Component02 from '../components/calculator/Component02'
// import Component03 from '../components/calculator/Component03'
// import Component04 from '../components/calculator/Component04'
// import Component05 from '../components/calculator/Component05'
// import Component06 from '../components/calculator/Component06'
// import Component07 from '../components/calculator/Component07'
// import Component08 from '../components/calculator/component08'
// import Component09 from '../components/calculator/component09'
// import Component10 from '../components/calculator/Component10'
// import Component11 from '../components/calculator/Component11'
// import Component12 from '../components/calculator/Component12'
// import Component13 from '../components/calculator/Component13'
// import Component14 from '../components/calculator/Component14'
// import Component15 from '../components/calculator/Component15'
// import Component16 from '../components/calculator/Component16'
// import Footer from '../components/Footer'
import { result } from '../getResults'
import { SpinnerFullPage } from '../components'

const CalcNavbar = lazy(() => import('../components/calculator/CalcNavbar'))
const Component00 = lazy(() => import('../components/calculator/component00'))
const Component01 = lazy(() => import('../components/calculator/Component01'))
const Component02 = lazy(() => import('../components/calculator/Component02'))
const Component03 = lazy(() => import('../components/calculator/Component03'))
const Component04 = lazy(() => import('../components/calculator/Component04'))
const Component05 = lazy(() => import('../components/calculator/Component05'))
const Component06 = lazy(() => import('../components/calculator/Component06'))
const Component07 = lazy(() => import('../components/calculator/Component07'))
const Component08 = lazy(() => import('../components/calculator/component08'))
const Component09 = lazy(() => import('../components/calculator/component09'))
const Component10 = lazy(() => import('../components/calculator/Component10'))
const Component11 = lazy(() => import('../components/calculator/Component11'))
const Component12 = lazy(() => import('../components/calculator/Component12'))
const Component13 = lazy(() => import('../components/calculator/Component13'))
const Component14 = lazy(() => import('../components/calculator/Component14'))
const Component15 = lazy(() => import('../components/calculator/Component15'))
const Component16 = lazy(() => import('../components/calculator/Component16'))
const Footer = lazy(() => import('../components/Footer'))

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
  const [hasBalcony, setHasBalcony] = useState(false)
  const [hasLoggia, setHasLoggia] = useState(false)
  const [hasTerrace, setHasTerrace] = useState(false)
  const [hasBasement, setHasBasement] = useState(false)
  const [hasGarage, setHasGarage] = useState(false)
  const [hasParking, setHasParking] = useState(false)
  const [hasNoParking, setHasNoParking] = useState(false)
  const [builtYear, setBuiltYear] = useState(0)
  const [hasIsolation, setHasIsolation] = useState(false)
  const [hasNewElevator, setHasNewElevator] = useState(false)
  const [hasNewWindows, setHasNewWindows] = useState(false)
  const [hasNewInstallations, setHasNewInstallations] = useState(false)
  const [hasThermostat, setHasThermostat] = useState(false)
  const [hasInternet, setHasInternet] = useState(false)
  const [hasAlarm, setHasAlarm] = useState(false)
  const [hasAirCon, setHasAircon] = useState(false)
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
    hasParking,
    hasLoggia,
    hasTerrace,
    hasBasement,
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
            setHasBalcony={setHasBalcony}
            setHasLoggia={setHasLoggia}
            setHasTerrace={setHasTerrace}
            setHasBasement={setHasBasement}
          />
        )

      case 9:
        return (
          <Component09
            onBack={handleBack}
            onNext={handleNext}
            setHasGarage={setHasGarage}
            setHasParking={setHasParking}
            setHasNoParking={setHasNoParking}
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
            setHasIsolation={setHasIsolation}
            setHasNewElevator={setHasNewElevator}
            setHasNewWindows={setHasNewWindows}
            setHasNewInstallations={setHasNewInstallations}
          />
        )

      case 12:
        return (
          <Component12
            onBack={handleBack}
            onNext={handleNext}
            setHasThermostat={setHasThermostat}
            setHasInternet={setHasInternet}
            setHasAlarm={setHasAlarm}
            setHasAircon={setHasAircon}
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
    setCountRooms(count)
    setCurrentlyClicked(count)
    const element = document.getElementById(count)
    element.classList.add('clicked')
  }

  const handleHouseCondition = (num) => {
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
    if (currentElevatorStatusClicked !== null) {
      const toRemoveFrom = document.getElementById(currentElevatorStatusClicked)
      toRemoveFrom.classList.remove('clicked')
    }
    setHasElevator(elevator)
    setCurrentElevatorStatusClicked(elevator)
    const element = document.getElementById(elevator)
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

  const selectBalcony = (balcony) => {
    const el = document.getElementById(balcony)
    if (el !== null) {
      el.classList.remove('clicked')
      el.classList.add('clicked')
    }
  }

  const unselectBalcony = (balcony) => {
    const el = document.getElementById(balcony)
    if (el !== null) {
      el.classList.remove('clicked')
    }
  }

  const balcony = document.getElementById('balcony')
  const loggia = document.getElementById('loggia')
  const terrace = document.getElementById('terrace')
  const basement = document.getElementById('basement')

  useEffect(() => {
    if (balcony !== null && hasBalcony) balcony.classList.add('clicked')
    if (balcony !== null && !hasBalcony) balcony.classList.remove('clicked')
    if (loggia !== null && hasLoggia) loggia.classList.add('clicked')
    if (loggia !== null && !hasLoggia) loggia.classList.remove('clicked')
    if (terrace !== null && hasTerrace) terrace.classList.add('clicked')
    if (terrace !== null && !hasTerrace) terrace.classList.remove('clicked')
    if (basement !== null && hasBasement) basement.classList.add('clicked')
    if (basement !== null && !hasBasement) basement.classList.remove('clicked')
  }, [hasBalcony, hasLoggia, hasTerrace, hasBasement])

  const garage = document.getElementById('garage')
  const parking = document.getElementById('parking')
  const noParking = document.getElementById('noParking')

  useEffect(() => {
    if (garage !== null && hasGarage) garage.classList.add('clicked')
    if (garage !== null && !hasGarage) garage.classList.remove('clicked')
    if (parking !== null && hasParking) parking.classList.add('clicked')
    if (parking !== null && !hasParking) parking.classList.remove('clicked')
    if (noParking !== null && hasNoParking) {
      setHasParking(false)
      setHasGarage(false)
      garage.classList.remove('clicked')
      parking.classList.remove('clicked')
      noParking.classList.add('clicked')
    }
    if (noParking !== null && !hasNoParking)
      noParking.classList.remove('clicked')
  }, [hasGarage, hasParking, hasNoParking])

  const isolation = document.getElementById('isolation')
  const newElevator = document.getElementById('newElevator')
  const newWindows = document.getElementById('newWindows')
  const newInstallations = document.getElementById('newInstallations')

  useEffect(() => {
    if (isolation !== null && hasIsolation) isolation.classList.add('clicked')
    if (isolation !== null && !hasIsolation)
      isolation.classList.remove('clicked')
    if (newElevator !== null && hasNewElevator)
      newElevator.classList.add('clicked')
    if (newElevator !== null && !hasNewElevator)
      newElevator.classList.remove('clicked')
    if (newWindows !== null && hasNewWindows)
      newWindows.classList.add('clicked')
    if (newWindows !== null && !hasNewWindows)
      newWindows.classList.remove('clicked')
    if (newInstallations !== null && hasNewInstallations)
      newInstallations.classList.add('clicked')
    if (newInstallations !== null && !hasNewInstallations)
      newInstallations.classList.remove('clicked')
  }, [hasIsolation, hasNewElevator, hasNewWindows, hasNewInstallations])

  const thermostat = document.getElementById('thermostat')
  const internet = document.getElementById('internet')
  const alarm = document.getElementById('alarm')
  const aircon = document.getElementById('aircon')

  useEffect(() => {
    if (thermostat !== null && hasThermostat)
      thermostat.classList.add('clicked')
    if (thermostat !== null && !hasThermostat)
      thermostat.classList.remove('clicked')
    if (internet !== null && hasInternet) internet.classList.add('clicked')
    if (internet !== null && !hasInternet) internet.classList.remove('clicked')
    if (alarm !== null && hasAlarm) alarm.classList.add('clicked')
    if (alarm !== null && !hasAlarm) alarm.classList.remove('clicked')
    if (aircon !== null && hasAirCon) aircon.classList.add('clicked')
    if (aircon !== null && !hasAirCon) aircon.classList.remove('clicked')
  }, [hasThermostat, hasInternet, hasAlarm, hasAirCon])

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (email !== '') {
      setIsValid(validateEmail(email))
      console.log(
        'submitted',
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
      handleNext()
      result(
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
    }
  }

  return (
    <>
      <Suspense fallback={<SpinnerFullPage />}>
        <div className='text-black bg-white text-[30px]'>
          {/* <Component00 onNext={handleNext} handleFlatOrHouse={handleFlatOrHouse} /> */}
          <div className='flex flex-col items-center relative '>
            <CalcNavbar />
            <form onSubmit={handleSubmitForm}>
              {renderComponent(currentComponent)}
            </form>
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default Calculator
