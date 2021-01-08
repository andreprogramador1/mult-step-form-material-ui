import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import {multiStepContext} from '../StepContext'

export const ThirdStep = () => {
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext)
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
        <Button  variant="contained" onClick={submitData} color="primary">Next</Button>
      </div>
    </>
  );
}