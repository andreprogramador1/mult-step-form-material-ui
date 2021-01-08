import React, { useContext, useState } from 'react'
import {FirstStep} from './components/FirstStep'
import {SecondStep} from './components/SecondStep'
import {ThirdStep} from './components/ThirdStep'
import { Step, Stepper, StepLabel } from '@material-ui/core'
import { multiStepContext } from './StepContext'
import {DisplayData} from './components/DisplayData'

function App() {

  const { currentStep, finalData } = useContext(multiStepContext)
  
 
  function showStep(step) {
    switch(step) {
      case 1 :
        return <FirstStep/>
      case 2 :
        return <SecondStep/>
      case 3 :
        return <ThirdStep/>
    }
  }

  return (

    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ color: 'orange', textDecoration: 'underline' }}>Multi Step app</h3>
      <div className="center-stepper">

        <Stepper style={{ width: '18%'}} activeStep={currentStep - 1} orientation='horizontal' >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      { showStep(currentStep) }
      <DisplayData/>
    </div>

  );
}

export default App;
