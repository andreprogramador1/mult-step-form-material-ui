import React, {Children, useState} from 'react'
import App from './App'

export const multiStepContext = React.createContext();

export const StepContext = () => {
  const [currentStep, setStep] = useState(1)
  const [userData, setUserData] = useState([])
  const [finalData, setFinalData] = useState([])

  function submitData() {

  }

  return(
    <>
      <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}}>
        <App/>
      </multiStepContext.Provider>
    </>
  );
}