import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import {multiStepContext} from '../StepContext'

export const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext)
  return(
    <>
      <div>
        <TextField label="First name" value={userData['firstname']} onChange={ e => setUserData({'firstname' : e.target.value}) }  margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <TextField label="Last name" value={userData['lastname']} onChange={ e => setUserData({'lastname' : e.target.value}) } margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <TextField label="Contact number" value={userData['contact']} onChange={ e => setUserData({'contact' : e.target.value}) } margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <Button  variant="contained" onClick={() => {setStep(2)}} color="primary">Next</Button>
      </div>
    </>
  );
}