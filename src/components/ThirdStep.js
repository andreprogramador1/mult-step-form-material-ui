import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import {multiStepContext} from '../StepContext'

export const ThirdStep = () => {
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext)
  return(
    <>
      <div>
        <TextField label="Whatever" value={userData['whatever']} onChange={ e => setUserData({...userData, 'whatever' : e.target.value}) } margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <TextField label="Dunno" value={userData['dunno']} onChange={ e => setUserData({...userData, 'dunno' : e.target.value}) } margin="normal" variant="outlined" color="secondary"/>
      </div>
      <div>
        <Button  variant="contained" onClick={() => {setStep(2)}} color="secondary">Back</Button> <span></span>
        <Button  variant="contained" onClick={submitData} color="primary">Submit</Button>
      </div>
    </>
  );
}