import React, { useState} from 'react'
import App from './App'

export const multiStepContext = React.createContext();

export const StepContext = ({ children }) => {
  const [currentStep, setStep] = useState(1)
  const [userData, setUserData] = useState([])
  const [finalData, setFinalData] = useState([])

  function submitData() {
    setFinalData(finalData=>[...finalData, userData])
    setUserData('')
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