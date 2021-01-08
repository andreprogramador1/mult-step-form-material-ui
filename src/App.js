import React from 'react'
import {FirstStep} from './components/FirstStep'
import {SecondStep} from './components/SecondStep'
import {ThirdStep} from './components/ThirdStep'
import { Step, Stepper, StepLabel } from '@material-ui/core'

function App() {

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
        <Stepper style={{ width: '18%'}} activeStep="1" orientation='horizontal' >
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
      { showStep(2) }
    </div>
  );
}

export default App;
