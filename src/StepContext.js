import React, { useState, useReducer} from 'react'

export const multiStepContext = React.createContext();

export const StepContext = ({ children } ) => {
  const [currentStep, setStep] = useState(1)
  // const [userData, setUserData] = useState({})
  const [finalData, setFinalData] = useState([])

  const [userData, setUserData] = useReducer((prev, next) => (next ? {...prev, ...next} : {} ), {})

  function submitData() {
    setFinalData(finalData=>[...finalData, userData])
    setUserData(false)
    setStep(1)
    console.log(userData)
  }

  return(
    <>
      <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}}>
        {children}
      </multiStepContext.Provider>
    </>
  );
}