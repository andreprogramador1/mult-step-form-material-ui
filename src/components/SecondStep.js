import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import {multiStepContext} from '../StepContext'

export const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext)
  return(
    <>
      <div>
        <TextField label="First name" margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <TextField label="Last name" margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <TextField label="Contact number" margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <Button  variant="contained" onClick={() => {setStep(1)}} color="secondary">Back</Button><span> </span>
        <Button  variant="contained" onClick={() => {setStep(3)}} color="primary">Next</Button>
      </div>
    </>
  );
}